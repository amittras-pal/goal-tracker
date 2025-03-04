import { readFileSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom"

console.log("====\nTransforming Content for Publish...\n====");

const app = "./dist/index.html";

const content = readFileSync(app, { encoding: 'utf-8' });
const domObj = new JSDOM(content);
const doc = domObj.window.document;

const script = doc.querySelector('script');
const style = doc.querySelector('link[rel="stylesheet"]');
const icon = doc.querySelector('link[rel="icon"]');


script.setAttribute('src', "." + script.getAttribute('src'));
style.setAttribute('href', "." + style.getAttribute('href'));
icon.setAttribute('href', "." + icon.getAttribute('href'));

writeFileSync(app, domObj.serialize(), { encoding: 'utf-8' });

console.log("====\n'dist' folder ready for publishing...\n====");


