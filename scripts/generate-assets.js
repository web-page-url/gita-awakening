const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/gita-awakening-1.0.jpg');
const outputDir = path.join(__dirname, '../public/assets');
const MAX_SIZE_KB = 110;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
    { name: 'og-image', width: 1200, height: 630, format: 'jpg' },
    { name: 'twitter-card', width: 1200, height: 600, format: 'jpg' },
    { name: 'instagram-post', width: 1080, height: 1080, format: 'jpg' },
    { name: 'instagram-story', width: 1080, height: 1920, format: 'jpg' },
    { name: 'linkedin-post', width: 1200, height: 627, format: 'jpg' },
    { name: 'whatsapp-thumbnail', width: 400, height: 400, format: 'jpg' },
    { name: 'favicon-16', width: 16, height: 16, format: 'png' },
    { name: 'favicon-32', width: 32, height: 32, format: 'png' },
    { name: 'favicon-48', width: 48, height: 48, format: 'png' },
    { name: 'apple-touch-icon', width: 180, height: 180, format: 'png' },
    { name: 'thumbnail-small', width: 100, height: 100, format: 'jpg' },
    { name: 'thumbnail-medium', width: 300, height: 300, format: 'jpg' },
    { name: 'desktop-hd', width: 1920, height: 1080, format: 'jpg' },
    { name: 'tablet', width: 1024, height: 768, format: 'jpg' },
    { name: 'mobile', width: 750, height: 1334, format: 'jpg' },
    { name: 'pwa-192', width: 192, height: 192, format: 'png' },
    { name: 'pwa-512', width: 512, height: 512, format: 'png' }
];

async function generateImages() {
    console.log('🕉️ Starting Divine Image Generation (Target: < 110KB)...');

    for (const size of sizes) {
        try {
            let quality = 80;
            let finalSizeKb = 0;
            const outputName = `${size.name}.${size.format}`;
            const outputPath = path.join(outputDir, outputName);

            // Compression Loop for JPG
            if (size.format === 'jpg') {
                while (quality > 10) {
                    await sharp(inputImage)
                        .resize(size.width, size.height, { fit: 'cover', position: 'top' })
                        .jpeg({ quality: quality, mozjpeg: true })
                        .toFile(outputPath);

                    finalSizeKb = fs.statSync(outputPath).size / 1024;
                    if (finalSizeKb <= MAX_SIZE_KB) break;
                    quality -= 5;
                }
            } else if (size.format === 'png') {
                // For PNG, use palette optimization which is extremely effective for icons
                await sharp(inputImage)
                    .resize(size.width, size.height, { fit: 'cover', position: 'top' })
                    .png({ palette: true, compressionLevel: 9 })
                    .toFile(outputPath);

                finalSizeKb = fs.statSync(outputPath).size / 1024;

                // If PNG is still too big (rare for icons), we must lower resolution slightly
                if (finalSizeKb > MAX_SIZE_KB && size.width > 200) {
                    await sharp(inputImage)
                        .resize(Math.round(size.width * 0.7), Math.round(size.height * 0.7), { fit: 'cover', position: 'top' })
                        .png({ palette: true, compressionLevel: 9 })
                        .toFile(outputPath);
                    finalSizeKb = fs.statSync(outputPath).size / 1024;
                }
            }

            console.log(`✅ ${finalSizeKb <= MAX_SIZE_KB ? 'PERFECT' : '⚠️ LARGE'}: ${outputName} (${size.width}x${size.height}) - ${finalSizeKb.toFixed(2)} KB (Quality: ${quality})`);
        } catch (err) {
            console.error(`❌ Error generating ${size.name}:`, err);
        }
    }

    console.log('✨ All sacred assets generated successfully in /public/assets/');
}

generateImages();
