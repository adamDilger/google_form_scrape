const fs = require('fs');
const parseGoogleFormHtml = require('../google_forms_scrape');

const file = fs.readFileSync('test_data/form.html', 'utf8');

const data = parseGoogleFormHtml(file);

console.log(data);
