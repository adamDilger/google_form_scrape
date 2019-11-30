module.exports = ($gForm) => {
  let textareas = []

  $gForm('textarea').each((i, d) => {
    const a = $gForm(d);

    const entryId = a.attr('name');

    if (!entryId || !entryId.includes('entry'))
      return;

    let describedById = a.attr('aria-describedby');
    let describedByText;

    if (describedById) {
      describedById = describedById.split(' ')[0];
      describedByText = $gForm(`div[aria-describedby='${describedById}']`).text();
    }

    textareas.push({
      label: describedByText,
      entryId: a.attr('name'),
    })
  })

  return textareas
}
