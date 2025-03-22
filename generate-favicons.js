// This script uses Sharp to convert SVG to PNG favicons
// To run: npm install sharp && node generate-favicons.js

const fs = require('fs');
const sharp = require('sharp');

// Input SVG file
const svgPath = 'public/img/favicon.svg';
const svgBuffer = fs.readFileSync(svgPath);

// Output sizes for favicons
const sizes = [16, 32, 64, 128, 192];

async function generateFavicons() {
  console.log('Generating favicon PNGs from SVG...');
  
  for (const size of sizes) {
    const outputPath = `public/img/favicon-${size}x${size}.png`;
    
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
      
    console.log(`Created ${outputPath}`);
  }
  
  // Create ICO file (using 16x16, 32x32, and 64x64 versions)
  // Note: For a proper ICO file, you might need a dedicated library like png-to-ico
  // This is just copying the 32x32 PNG as a placeholder
  fs.copyFileSync('public/img/favicon-32x32.png', 'public/img/favicon.ico');
  console.log('Created favicon.ico (placeholder)');
  
  console.log('Done! All favicon files generated.');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
}); 