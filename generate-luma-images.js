import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateImages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Generate header (1400x400)
    console.log('Generating header image...');
    const headerPage = await browser.newPage();
    await headerPage.setViewport({ width: 1400, height: 400, deviceScaleFactor: 2 });
    await headerPage.goto(`file://${path.join(__dirname, 'public/luma-assets/generate-header.html')}`, {
      waitUntil: 'networkidle0'
    });
    await headerPage.screenshot({
      path: 'public/luma-assets/luma-header.png',
      fullPage: false
    });
    console.log('✓ Header saved: public/luma-assets/luma-header.png');

    // Generate logo (512x512)
    console.log('Generating logo image...');
    const logoPage = await browser.newPage();
    await logoPage.setViewport({ width: 512, height: 512, deviceScaleFactor: 2 });
    await logoPage.goto(`file://${path.join(__dirname, 'public/luma-assets/generate-logo.html')}`, {
      waitUntil: 'networkidle0'
    });
    await logoPage.screenshot({
      path: 'public/luma-assets/luma-logo.png',
      fullPage: false
    });
    console.log('✓ Logo saved: public/luma-assets/luma-logo.png');

    // Generate sharing image (1200x630)
    console.log('Generating sharing image...');
    const sharingPage = await browser.newPage();
    await sharingPage.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await sharingPage.goto(`file://${path.join(__dirname, 'public/luma-assets/generate-sharing.html')}`, {
      waitUntil: 'networkidle0'
    });
    await sharingPage.screenshot({
      path: 'public/luma-assets/luma-sharing.png',
      fullPage: false
    });
    console.log('✓ Sharing image saved: public/luma-assets/luma-sharing.png');

    // Generate Twitter header (1500x500)
    console.log('Generating Twitter header...');
    const twitterPage = await browser.newPage();
    await twitterPage.setViewport({ width: 1500, height: 500, deviceScaleFactor: 2 });
    await twitterPage.goto(`file://${path.join(__dirname, 'public/luma-assets/generate-twitter-header.html')}`, {
      waitUntil: 'networkidle0'
    });
    await twitterPage.screenshot({
      path: 'public/luma-assets/twitter-header.png',
      fullPage: false
    });
    console.log('✓ Twitter header saved: public/luma-assets/twitter-header.png');

    console.log('\n✅ All images generated successfully!');
    console.log('\nFiles created:');
    console.log('  - public/luma-assets/luma-header.png (1400x400 - Luma header banner)');
    console.log('  - public/luma-assets/luma-logo.png (512x512 - Luma profile picture)');
    console.log('  - public/luma-assets/luma-sharing.png (1200x630 - Social sharing OG image)');
    console.log('  - public/luma-assets/twitter-header.png (1500x500 - Twitter/X header banner)');

  } catch (error) {
    console.error('Error generating images:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generateImages().catch(console.error);
