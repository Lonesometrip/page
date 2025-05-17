/**
 * Script to update the lastmod date in sitemap.xml
 * Run this script before building the website
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Path to sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

try {
  // Read the sitemap.xml file
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Replace all lastmod dates with today's date
  sitemapContent = sitemapContent.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

  // Write the updated sitemap.xml file
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  console.log(`✅ Updated sitemap.xml with lastmod date: ${today}`);
} catch (error) {
  console.error('❌ Error updating sitemap.xml:', error);
}
