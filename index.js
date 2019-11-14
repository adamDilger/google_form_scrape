const fs = require('fs');
const parseGoogleFormHtml = require('./google_forms_scrape');

const file = fs.readFileSync('form.html', 'utf8');

const data = parseGoogleFormHtml(file);

console.log(data);
