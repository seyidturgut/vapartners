const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceFile = '/Users/seyidturgut/Works/My Work/vapartners.com.tr/vapartnersweb2026/eski-icerik/referanslar.html';
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'references.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Main execution
try {
    const fileContent = fs.readFileSync(sourceFile, 'utf8');
    const $ = cheerio.load(fileContent);
    const references = [];
    const items = $('.portfolio-item');
    console.log(`Found ${items.length} items`);

    items.each((index, element) => {
        let title = $(element).find('.portfolio-title').text().trim();
        let imgElement = $(element).find('img');
        let image = imgElement.attr('src');

        console.log(`Item ${index}: Title="${title}", Image="${image}"`);

        if (image) {
            // Normalize URLs
            if (image.startsWith('http')) {
                image = image.replace(/https?:\/\/vapartners\.com\.tr\//, '/');
            }
            if (image.includes('../upload/')) {
                image = image.replace('../upload/', '/upload/');
            } else if (image.startsWith('upload/')) {
                image = '/' + image;
            }
            // Also checking specifically for what we saw in logs
            if (image.startsWith('/upload/')) {
                // already good
            }
        } else {
            image = '';
        }

        if (title || image) {
            references.push({
                id: index,
                title: title,
                image: image
            });
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(references, null, 2));
    console.log(`Successfully extracted ${references.length} references to ${outputFile}`);

} catch (err) {
    console.error('Error:', err);
}
