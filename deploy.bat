@echo off
setlocal enabledelayedexpansion

echo Starting deployment process...

REM Store the current branch name
for /f "tokens=*" %%a in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%a
echo Current branch: %CURRENT_BRANCH%

REM Create a copy of the deploy script for later restoration
copy deploy.bat deploy.bat.bak

REM Save working directory changes (if any)
echo Saving any uncommitted changes...
git stash push -m "Stashed changes before deployment"

REM Build the project using npx to ensure shadow-cljs is found
echo Building project...
call npx shadow-cljs release app

REM Make sure we can cleanly checkout gh-pages
git fetch origin

REM Switch to gh-pages branch
echo Switching to gh-pages branch...
git checkout gh-pages || git checkout -b gh-pages origin/gh-pages

REM Create .gitignore to ignore node_modules
echo Setting up .gitignore for gh-pages...
(
echo node_modules/
echo .shadow-cljs/
echo public/
) > .gitignore

REM Clean any untracked files (like node_modules)
echo Cleaning untracked files from gh-pages branch...
git add .gitignore
git commit -m "Add .gitignore for clean deployment" --allow-empty
git rm -r --cached node_modules 2>nul
git rm -r --cached .shadow-cljs 2>nul

REM Copy the built files from public/ directory
echo Copying built files...
git checkout %CURRENT_BRANCH% -- public/

REM Update only HTML and JS files in the root (for GitHub Pages)
echo Updating HTML and JS files for GitHub Pages...
if not exist public (
  echo ERROR: public directory not found
  goto cleanup
)

REM Copy HTML files
copy /Y public\*.html .

REM Fix paths in index.html to use /wizmetria-web/ prefix
echo Fixing paths in HTML files...
if exist index.html (
  REM Create a temporary file with fixed paths
  powershell -Command "Get-Content -Path 'index.html' -Raw | ForEach-Object { $_ -replace 'src=\"/js/', 'src=\"/wizmetria-web/js/' -replace 'href=\"/js/', 'href=\"/wizmetria-web/js/' -replace 'href=\"/site.webmanifest\"', 'href=\"/wizmetria-web/site.webmanifest\"' -replace 'src=\"/img/', 'src=\"/wizmetria-web/img/' -replace 'href=\"/img/', 'href=\"/wizmetria-web/img/' -replace 'href=\"/css/', 'href=\"/wizmetria-web/css/' } | Set-Content -Path 'index.html' -Force"
)

REM Copy site.webmanifest if it exists
if exist public\site.webmanifest (
  copy /Y public\site.webmanifest .
  if exist site.webmanifest (
    powershell -Command "Get-Content -Path 'site.webmanifest' -Raw | ForEach-Object { $_ -replace '\"src\": \"/', '\"src\": \"/wizmetria-web/' } | Set-Content -Path 'site.webmanifest' -Force"
  )
)

REM Create js directory if it doesn't exist
if not exist js mkdir js
REM Copy JS files
xcopy /E /Y /I public\js\* js\ > nul 2>&1

REM Copy image files if they exist
if exist public\img (
  if not exist img mkdir img
  xcopy /E /Y /I public\img\* img\ > nul 2>&1
)

REM Add only specific updated files to git
echo Adding updated files to git...
git add index.html .gitignore
if exist site.webmanifest git add site.webmanifest
if exist js\main.js git add js/main.js
if exist js\manifest.edn git add js/manifest.edn
if exist img git add img/

REM Prepare timestamp for commit message
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set dt=%%a
set YYYY=!dt:~0,4!
set MM=!dt:~4,2!
set DD=!dt:~6,2!
set HH=!dt:~8,2!
set Min=!dt:~10,2!
set Sec=!dt:~12,2!

REM Commit changes with date stamp (using delayed expansion)
echo Committing changes...
git commit -m "Deploy: !YYYY!-!MM!-!DD! !HH!:!Min!:!Sec!" --allow-empty

REM Push to remote gh-pages branch
echo Pushing to remote gh-pages branch...
git push origin gh-pages

:cleanup
REM Return to original branch
echo Switching back to %CURRENT_BRANCH% branch...
git checkout %CURRENT_BRANCH%

REM Restore deploy script from backup
copy deploy.bat.bak deploy.bat
del deploy.bat.bak

REM Apply stashed changes if any exist
git stash list | findstr "Stashed changes before deployment" > nul
if %ERRORLEVEL% EQU 0 (
  echo Restoring stashed changes...
  git stash pop
) else (
  echo No stashed changes to restore.
)

echo Deployment complete! Site should update at https://tok.github.io/wizmetria-web/ shortly.
endlocal 