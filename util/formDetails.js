module.exports = ($gForm) => {
  let action = $gForm('form').attr('action');
  const title = $gForm(`div[aria-level=1]`).text();

  return ({
    action,
    title
  })
}
