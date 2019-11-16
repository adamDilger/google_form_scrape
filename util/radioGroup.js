module.exports = ($gForm) => {
  const radioGroups = [];

  $gForm('div[role=radiogroup]').each((i, d) => {
    let radiogroup = $gForm(d);

    let describedById = radiogroup.attr('aria-describedby');
    describedById = describedById.split(' ')[0];
    const describedByText = $gForm(`div[aria-describedby='${describedById}']`).text();

    const radioValues = [];

    let radio = $gForm('div[role=radio]', d).each((j, e) => {
      const radioValue = $gForm(e).attr('aria-label');
      radioValues.push(radioValue);
    });

    radioGroups.push({
      label: describedByText,
      values: radioValues
    });
  })

  return radioGroups;
}
