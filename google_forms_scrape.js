const cheerio = require('cheerio');
const util = require('./util');

const parseGoogleFormHtml = html => {
  const $gForm = cheerio.load(html);

  const details = util.getFormDetails($gForm);
  const inputs = util.getTextInputs($gForm);
  const radioGroups = util.getRadioGroups($gForm);

  return ({
    details,
    inputs,
    radioGroups,
  })
}

module.exports = parseGoogleFormHtml
