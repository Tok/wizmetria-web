# PowerShell deployment script for GitHub Pages

Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Store the current branch name
$CURRENT_BRANCH = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $CURRENT_BRANCH" -ForegroundColor Cyan

# Save working directory changes (if any)
Write-Host "Saving any uncommitted changes..." -ForegroundColor Cyan
git stash push -m "Stashed changes before deployment"

# Build the project
Write-Host "Building project..." -ForegroundColor Cyan
npx shadow-cljs release app

# Make sure we can cleanly checkout gh-pages
git fetch origin

# Switch to gh-pages branch
Write-Host "Switching to gh-pages branch..." -ForegroundColor Cyan
try {
    git checkout gh-pages
} catch {
    Write-Host "Creating gh-pages branch..." -ForegroundColor Yellow
    git checkout -b gh-pages origin/gh-pages
}

# Copy the built files from public/ directory
Write-Host "Copying built files..." -ForegroundColor Cyan
git checkout $CURRENT_BRANCH -- public/

# Check if public directory exists
if (-not (Test-Path -Path "public" -PathType Container)) {
    Write-Host "ERROR: public directory not found" -ForegroundColor Red
    git checkout $CURRENT_BRANCH
    exit 1
}

# Create .gitignore to ignore node_modules
Write-Host "Setting up .gitignore for gh-pages..." -ForegroundColor Cyan
@"
node_modules/
.shadow-cljs/
public/
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8 -Force

# Update only HTML and JS files in the root (for GitHub Pages)
Write-Host "Updating HTML and JS files for GitHub Pages..." -ForegroundColor Cyan
# HTML files
Copy-Item -Path "public\*.html" -Destination "." -Force
# JS files
if (-not (Test-Path -Path "js" -PathType Container)) {
    New-Item -Path "js" -ItemType Directory -Force | Out-Null
}
if (Test-Path -Path "public\js") {
    Copy-Item -Path "public\js\*" -Destination "js\" -Recurse -Force
} else {
    Write-Host "WARNING: public\js directory not found. Continuing anyway..." -ForegroundColor Yellow
}

# Add only the specific updated files to git
Write-Host "Adding updated files to git..." -ForegroundColor Cyan
git add index.html .gitignore
if (Test-Path -Path "js\main.js") {
    git add js/main.js
}
if (Test-Path -Path "js\manifest.edn") {
    git add js/manifest.edn
}

# Commit changes with timestamp
Write-Host "Committing changes..." -ForegroundColor Cyan
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

# Push to remote gh-pages branch
Write-Host "Pushing to remote gh-pages branch..." -ForegroundColor Cyan
git push origin gh-pages

# Return to original branch
Write-Host "Switching back to $CURRENT_BRANCH branch..." -ForegroundColor Cyan
git checkout $CURRENT_BRANCH

# Apply stashed changes if any exist
$stashList = git stash list
if ($stashList -match "Stashed changes before deployment") {
    Write-Host "Restoring stashed changes..." -ForegroundColor Cyan
    git stash pop
} else {
    Write-Host "No stashed changes to restore." -ForegroundColor Cyan
}

Write-Host "Deployment complete! Site should update at https://tok.github.io/wizmetria-web/ shortly." -ForegroundColor Green 