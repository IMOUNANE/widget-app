export function toCamel(string) {
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  const stringToCamel = string
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, " ")
    .split(" ")
    .reduce((result, word) => result + capitalize(word.toLowerCase()));
  return stringToCamel.charAt(0).toLowerCase() + stringToCamel.slice(1);
}

export function keysToCamel(object) {
  const n = {};

  Object.entries(object).map((items) => {
    if (items[0].includes("_")) n[toCamel(items[0])] = items[1];
    else n[items[0]] = items[1];
    return n;
  });

  return n;
}
