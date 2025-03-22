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

REM Copy the built files from public/ directory
echo Copying built files...
git checkout %CURRENT_BRANCH% -- public/

REM Update files in the root (for GitHub Pages)
echo Updating files for GitHub Pages...
if not exist public (
  echo ERROR: public directory not found
  goto cleanup
)
xcopy /E /Y /I public\* . > nul

REM Add all changes to git
echo Adding changes to git...
git add -A

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
git commit -m "Deploy: !YYYY!-!MM!-!DD! !HH!:!Min!:!Sec!"

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