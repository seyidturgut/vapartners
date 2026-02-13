const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = '/Users/seyidturgut/Works/My Work/vapartners.com.tr/vapartnersweb2026/eski-icerik/hizmetlerimiz';
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'services.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to clean up content
function cleanContent(html) {
    if (!html) return '';
    // Replace relative image paths
    // The old site used "../upload/..." or "upload/..."
    // We want "/upload/..."

    // Fix image path
    // Remove domain
    let content = html.replace(/src="https?:\/\/vapartners\.com\.tr\/upload\//g, 'src="/upload/')
        .replace(/src="http:\/\/vapartners\.com\.tr\/themes\//g, 'src="/themes/')
        .replace(/src="https:\/\/vapartners\.com\.tr\/themes\//g, 'src="/themes/')
        .replace(/\.\.\/upload\//g, '/upload/')
        .replace(/src="upload\//g, 'src="/upload/')
        .replace(/src="themes\//g, 'src="/themes/'); // Also handle themes if present

    // Fix internal links
    // ../index.html -> /
    // ../hakkimizda.html -> /hakkimizda
    // ../iletisim.html -> /iletisim
    // ../kariyer.html -> /kariyer
    // ../referanslar.html -> /referanslar
    // foo.html -> /hizmetlerimiz/foo (assuming we are in hizmetlerimiz)

    content = content.replace(/href="\.\.\/index\.html"/g, 'href="/"')
        .replace(/href="index\.html"/g, 'href="/"')
        .replace(/href="\.\.\/hakkimizda\.html"/g, 'href="/hakkimizda"')
        .replace(/href="\.\.\/iletisim\.html"/g, 'href="/iletisim"')
        .replace(/href="\.\.\/kariyer\.html"/g, 'href="/kariyer"')
        .replace(/href="\.\.\/referanslar\.html"/g, 'href="/referanslar"');

    // Replace remaining .html links with /hizmetlerimiz/slug
    // This is a bit aggressive but should cover specialized service links
    content = content.replace(/href="([^"]+)\.html"/g, (match, slug) => {
        if (slug.includes('/')) return match; // Skip if it already has path or is external
        return `href="/hizmetlerimiz/${slug}"`;
    });

    // Remove empty paragraphs or inline styles if needed (optional)
    return content;
}

// Function to process a single file
function processFile(filename) {
    const filePath = path.join(sourceDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(fileContent);

    const slug = filename.replace('.html', '');

    // Extract Title
    let title = $('.page-title-heading').text().trim();
    if (!title) {
        title = $('.blog-details-heading').text().trim();
    }
    if (!title) {
        title = $('title').text().split('-')[0].trim();
    }

    // Extract Description (Main Content)
    // The content seems to be inside .blog-details-description
    // Or sometimes just .blog-details-content excluding the image and form
    let contentContainer = $('.blog-details-description');
    let content = '';

    if (contentContainer.length > 0) {
        content = cleanContent(contentContainer.html());
    } else {
        // Fallback if structure is different
        content = cleanContent($('.blog-details-content').html());
    }

    // Extract Main Image
    let image = $('.single-image').attr('src');
    if (image) {
        // Fix image path
        if (image.startsWith('http')) {
            image = image.replace(/https?:\/\/vapartners\.com\.tr\//, '/');
        }
        if (image.includes('../upload/')) {
            image = image.replace('../upload/', '/upload/');
        } else if (image.startsWith('upload/')) {
            image = '/' + image;
        }
    } else {
        image = ''; // Fallback placeholder
    }

    // Extract Meta Data
    const metaTitle = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';

    return {
        id: slug,
        slug: slug,
        title: title,
        image: image,
        content: content,
        metaTitle: metaTitle,
        metaDescription: metaDescription
    };
}

// Main execution
try {
    const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.html'));
    const services = [];

    console.log(`Found ${files.length} HTML files.`);

    files.forEach(file => {
        try {
            const serviceData = processFile(file);
            services.push(serviceData);
            console.log(`Processed: ${file} -> ${serviceData.title}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(services, null, 2));
    console.log(`Successfully extracted ${services.length} services to ${outputFile}`);

} catch (err) {
    console.error('Error reading source directory:', err);
}
