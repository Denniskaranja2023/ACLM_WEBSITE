import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './src/images';
const supportedFormats = ['.png', '.jpg', '.jpeg'];

async function convertToWebP() {
  try {
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
      supportedFormats.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to convert...`);

    for (const file of imageFiles) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, path.parse(file).name + '.webp');
      
      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        
        console.log(`✓ Converted: ${file} → ${path.parse(file).name}.webp`);
      } catch (error) {
        console.error(`✗ Failed to convert ${file}:`, error.message);
      }
    }

    console.log('\nConversion complete!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

convertToWebP();