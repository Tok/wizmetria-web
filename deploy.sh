#!/bin/bash
set -e

echo "Starting deployment process..."

# Store the current branch name
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Create a backup of the deploy script
cp deploy.sh deploy.sh.bak

# Save working directory changes (if any)
echo "Saving any uncommitted changes..."
git stash save "Stashed changes before deployment"

# Build the project using npx to ensure shadow-cljs is found
echo "Building project..."
npx shadow-cljs release app

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages

# Copy the built files from public/ directory
echo "Copying built files..."
git checkout $CURRENT_BRANCH -- public/

# Update files in the root (for GitHub Pages)
echo "Updating files for GitHub Pages..."
cp -r public/* .

# Add all changes to git
echo "Adding changes to git..."
git add -A

# Commit changes with date stamp
echo "Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to remote gh-pages branch
echo "Pushing to remote gh-pages branch..."
git push origin gh-pages

# Return to original branch
echo "Switching back to $CURRENT_BRANCH branch..."
git checkout $CURRENT_BRANCH

# Restore the deploy script
cp deploy.sh.bak deploy.sh
rm deploy.sh.bak

# Check for stashed changes
STASH_COUNT=$(git stash list | grep "Stashed changes before deployment" | wc -l)
if [ "$STASH_COUNT" -gt 0 ]; then
  echo "Restoring stashed changes..."
  git stash pop
else
  echo "No stashed changes to restore."
fi

echo "Deployment complete! Site should update at https://tok.github.io/wizmetria-web/ shortly." 