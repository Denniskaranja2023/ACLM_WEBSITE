import fs from 'fs';
import path from 'path';

const imagesDir = './src/images';
const supportedFormats = ['.png', '.jpg', '.jpeg'];

function cleanupOriginalImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
      supportedFormats.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} original images to remove...`);
    console.log('⚠️  WARNING: This will permanently delete the original images!');
    console.log('Make sure your WebP conversion was successful before running this.');
    console.log('\nTo proceed, uncomment the deletion code in cleanup-originals.js\n');

    // Uncomment the lines below to actually delete the files
    /*
    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file);
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted: ${file}`);
    }
    console.log('\nCleanup complete!');
    */

    console.log('Files that would be deleted:');
    imageFiles.forEach(file => console.log(`  - ${file}`));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

cleanupOriginalImages();