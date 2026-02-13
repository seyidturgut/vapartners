const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDirs = [
    '/Users/seyidturgut/Works/My Work/vapartners.com.tr/vapartnersweb2026/eski-icerik/duyurular',
    '/Users/seyidturgut/Works/My Work/vapartners.com.tr/vapartnersweb2026/eski-icerik/egitim-ve-etkinlikler'
];
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'news.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to clean up content
function cleanContent(html) {
    if (!html) return '';
    // Fix image path and remove domain
    let content = html.replace(/src="https?:\/\/vapartners\.com\.tr\/upload\//g, 'src="/upload/')
        .replace(/src="http:\/\/vapartners\.com\.tr\/themes\//g, 'src="/themes/')
        .replace(/src="https:\/\/vapartners\.com\.tr\/themes\//g, 'src="/themes/')
        .replace(/\.\.\/upload\//g, '/upload/')
        .replace(/src="upload\//g, 'src="/upload/')
        .replace(/src="\.\.\/upload\//g, 'src="/upload/') // Handle ../upload
        .replace(/src="themes\//g, 'src="/themes/');

    // Fix internal links
    content = content.replace(/href="\.\.\/index\.html"/g, 'href="/"')
        .replace(/href="index\.html"/g, 'href="/"')
        .replace(/href="\.\.\/hakkimizda\.html"/g, 'href="/hakkimizda"')
        .replace(/href="\.\.\/iletisim\.html"/g, 'href="/iletisim"')
        .replace(/href="\.\.\/kariyer\.html"/g, 'href="/kariyer"')
        .replace(/href="\.\.\/referanslar\.html"/g, 'href="/referanslar"');

    // Replace remaining .html links
    content = content.replace(/href="([^"]+)\.html"/g, (match, slug) => {
        if (slug.includes('/')) return match;
        return `href="/haberler/${slug}"`; // Assume internal links here might be other news
    });

    return content;
}

// Function to process a single file
function processFile(filePath, category) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(fileContent);
    const filename = path.basename(filePath);
    const slug = filename.replace('.html', '');

    let title = $('.page-title-heading').text().trim();
    if (!title) {
        title = $('.blog-details-heading').text().trim();
    }
    if (!title) {
        title = $('title').text().split('-')[0].trim();
    }

    let contentContainer = $('.blog-details-description');
    let content = '';

    if (contentContainer.length > 0) {
        content = cleanContent(contentContainer.html());
    } else {
        content = cleanContent($('.blog-details-content').html());
    }

    let image = $('.single-image').attr('src');
    if (image) {
        if (image.startsWith('http')) {
            image = image.replace(/https?:\/\/vapartners\.com\.tr\//, '/');
        }
        if (image.includes('../upload/')) {
            image = image.replace('../upload/', '/upload/');
        } else if (image.startsWith('upload/')) {
            image = '/' + image;
        } else if (image.startsWith('../upload/')) {
            image = image.replace('../upload/', '/upload/');
        }
    } else {
        image = '';
    }

    const metaTitle = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';

    // Attempt to parse date? Usually not easy from this HTML unless specifically tagged.
    // For now we skip date.

    return {
        id: slug,
        slug: slug,
        title: title,
        image: image,
        content: content,
        category: category,
        metaTitle: metaTitle,
        metaDescription: metaDescription
    };
}

// Main execution
try {
    const news = [];

    sourceDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            const category = path.basename(dir);
            const files = fs.readdirSync(dir).filter(file => file.endsWith('.html'));
            console.log(`Processing ${category}: Found ${files.length} HTML files.`);

            files.forEach(file => {
                try {
                    const filePath = path.join(dir, file);
                    const newsData = processFile(filePath, category);
                    news.push(newsData);
                    console.log(`Processed: ${file} -> ${newsData.title}`);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            });
        } else {
            console.warn(`Directory not found: ${dir}`);
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(news, null, 2));
    console.log(`Successfully extracted ${news.length} news items to ${outputFile}`);

} catch (err) {
    console.error('Error:', err);
}
