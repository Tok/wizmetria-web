#!/bin/bash
set -e

echo "Starting deployment process..."

# Store the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Create a backup of the deploy script
cp deploy.sh deploy.sh.bak

# Save working directory changes (if any)
echo "Saving any uncommitted changes..."
git stash push -m "Stashed changes before deployment"

# Build the project using npx to ensure shadow-cljs is found
echo "Building project..."
npx shadow-cljs release app

# Make sure we can cleanly checkout gh-pages
git fetch origin

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages || git checkout -b gh-pages origin/gh-pages

# Create .gitignore to ignore node_modules
echo "Setting up .gitignore for gh-pages..."
cat > .gitignore << EOF
node_modules/
.shadow-cljs/
public/
EOF

# Clean any untracked files (like node_modules)
echo "Cleaning untracked files from gh-pages branch..."
git add .gitignore
git commit -m "Add .gitignore for clean deployment" --allow-empty
git rm -r --cached node_modules 2>/dev/null || true
git rm -r --cached .shadow-cljs 2>/dev/null || true

# Copy the built files from public/ directory
echo "Copying built files..."
git checkout $CURRENT_BRANCH -- public/

# Check if public directory exists
if [ ! -d "public" ]; then
  echo "ERROR: public directory not found"
  git checkout $CURRENT_BRANCH
  exit 1
fi

# Update only HTML and JS files in the root (for GitHub Pages)
echo "Updating HTML and JS files for GitHub Pages..."
# Copy HTML files
cp -f public/*.html .

# Create js directory if it doesn't exist
mkdir -p js
# Copy JS files
if [ -d "public/js" ]; then
  cp -rf public/js/* js/ 2>/dev/null || true
else
  echo "WARNING: public/js directory not found. Continuing anyway..."
fi

# Add only specific updated files to git
echo "Adding specific updated files to git..."
git add index.html .gitignore
[ -f "js/main.js" ] && git add js/main.js
[ -f "js/manifest.edn" ] && git add js/manifest.edn

# Commit changes with date stamp
echo "Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" --allow-empty

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