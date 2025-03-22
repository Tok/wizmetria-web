@echo off
echo Starting deployment process...

REM Store the current branch name
for /f "tokens=*" %%a in ('git symbolic-ref --short HEAD') do set CURRENT_BRANCH=%%a
echo Current branch: %CURRENT_BRANCH%

REM Create a copy of the deploy script for later restoration
copy deploy.bat deploy.bat.bak

REM Save working directory changes (if any)
echo Saving any uncommitted changes...
git stash save "Stashed changes before deployment"

REM Build the project using npx to ensure shadow-cljs is found
echo Building project...
call npx shadow-cljs release app

REM Switch to gh-pages branch
echo Switching to gh-pages branch...
git checkout gh-pages

REM Copy the built files from public/ directory
echo Copying built files...
git checkout %CURRENT_BRANCH% -- public/

REM Update files in the root (for GitHub Pages)
echo Updating files for GitHub Pages...
xcopy /E /Y public\* .

REM Add all changes to git
echo Adding changes to git...
git add -A

REM Commit changes with date stamp
echo Committing changes...
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set dt=%%a
set YYYY=%dt:~0,4%
set MM=%dt:~4,2%
set DD=%dt:~6,2%
set HH=%dt:~8,2%
set Min=%dt:~10,2%
set Sec=%dt:~12,2%
git commit -m "Deploy: %YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"

REM Push to remote gh-pages branch
echo Pushing to remote gh-pages branch...
git push origin gh-pages

REM Return to original branch
echo Switching back to %CURRENT_BRANCH% branch...
git checkout %CURRENT_BRANCH%

REM Restore deploy script from backup
copy deploy.bat.bak deploy.bat
del deploy.bat.bak

REM Apply stashed changes if any exist
echo Checking for stashed changes...
git stash list | findstr "Stashed changes before deployment" > nul
if %ERRORLEVEL% EQU 0 (
  echo Restoring stashed changes...
  git stash pop
) else (
  echo No stashed changes to restore.
)

echo Deployment complete! Site should update at https://tok.github.io/wizmetria-web/ shortly. 