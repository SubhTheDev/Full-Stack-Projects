//removes extra white spaces and uppercase the first letter of first & last name
function formatDisplayName(firstName, lastName) {
  const text = firstName + lastName;
  const formatName = text
    .trim()
    .toLowerCase()
    .replace(/(^|\s+)\S/g, (match) => match.toUpperCase())
    .replace(/\s+/g, " ");
  return formatName;
}

//outputs
console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
