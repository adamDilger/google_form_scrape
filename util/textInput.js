const getInputType = (description = '') => {
  const lower = description.toLowerCase();

  if (lower.includes('email'))
    return 'email';

  if (lower.includes('phone'))
    return 'phone';

  return 'text';
}

module.exports = ($gForm) => {
  let inputs = []

  $gForm('input').each((i, d) => {
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
      label: describedByText,
      entryId: a.attr('name'),
      type: getInputType(describedByText),
    })
  })

  return inputs
}
