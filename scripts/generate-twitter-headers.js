import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateHeader(variant) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to exact Twitter header dimensions
  await page.setViewport({
    width: 1500,
    height: 500,
    deviceScaleFactor: 2 // 2x for retina quality
  });

  // Load the HTML file
  const htmlPath = path.join(__dirname, `../public/luma-assets/generate-twitter-header-v${variant}.html`);
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Take screenshot
  const outputPath = path.join(__dirname, `../public/luma-assets/twitter-header-v${variant}.png`);
  await page.screenshot({
    path: outputPath,
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 1500,
      height: 500
    }
  });

  await browser.close();
  console.log(`Generated: twitter-header-v${variant}.png`);
}

async function generateAllHeaders() {
  console.log('Generating Twitter header variants...');

  for (let i = 1; i <= 4; i++) {
    await generateHeader(i);
  }

  console.log('All variants generated!');
}

generateAllHeaders().catch(console.error);
