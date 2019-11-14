const cheerio = require('cheerio');

const getInputType = (description = '') => {
  const lower = description.toLowerCase();

  if (lower.includes('email'))
    return 'email';

  if (lower.includes('phone'))
    return 'phone';

  return 'text';
}

const parseGoogleFormHtml = html => {
  const $gForm = cheerio.load(html);


  let actionUrl = $gForm('form').attr('action');
  const title = $gForm(`div[aria-level=1]`).text();

  let inputNodes = $gForm('input');
  let inputs = []

  inputNodes.each((i, d) => {
    const a = $gForm(d);

    const entryId = a.attr('name');
    const hidden = a.attr('type') === 'hidden';

    if (hidden)
      return;

    if (!entryId || !entryId.includes('entry'))
      return;

    let describedById = a.attr('aria-describedby');
    let describedByText;

    if (describedById) {
      describedById = describedById.split(' ')[0];
      describedByText = $gForm(`div[aria-describedby='${describedById}']`).text();
    }

    inputs.push({
      description: describedByText,
      entryId: a.attr('name'),
      type: getInputType(describedByText),
    })
  })

  let radiogroup = $gForm('div[role=radiogroup]');
  let radio = $gForm('div[role=radio]');

  radio.each((i, d) => {
    console.log('===============\n', $gForm(d).html())
  })

  return ({
    title,
    inputs,
    action: actionUrl,
  })
}

module.exports = parseGoogleFormHtml
