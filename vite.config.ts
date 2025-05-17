import { defineConfig, loadEnv } from "vite";




//@ts-ignore
import path from 'path';
//@ts-ignore
import fs from 'fs';

function getHtmlEntries() {
    //@ts-ignore
    const pagesDir = path.resolve(__dirname, "");
    const entries = {};

    // Read all files in the directory
    const files = fs.readdirSync(pagesDir);

    // Filter out HTML files
    const htmlFiles = files.filter((file) => file.endsWith(".html"));

    // Create entries for each HTML file
    htmlFiles.forEach((file) => {
        const name = path.basename(file, ".html");
        entries[name] = path.resolve(pagesDir, file);
    });

    return entries;
}
export default defineConfig({
    build: {
        rollupOptions: {
            input: getHtmlEntries()
        }
    }
})