import fs from 'fs';
import path from 'path';

const srcDir = './src';
const imageExtensions = ['.png', '.jpg', '.jpeg'];

function updateImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    imageExtensions.forEach(ext => {
      const regex = new RegExp(`from\\s+["']([^"']*${ext})["']`, 'gi');
      const newContent = content.replace(regex, (match, imagePath) => {
        const webpPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
        updated = true;
        return match.replace(imagePath, webpPath);
      });
      content = newContent;
    });

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let totalUpdated = 0;

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      totalUpdated += walkDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      if (updateImportsInFile(fullPath)) {
        totalUpdated++;
      }
    }
  });

  return totalUpdated;
}

console.log('Updating image imports to WebP...');
const updatedFiles = walkDirectory(srcDir);
console.log(`\nUpdate complete! ${updatedFiles} files updated.`);