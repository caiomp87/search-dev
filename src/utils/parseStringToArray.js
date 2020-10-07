module.exports = function parseStringToArray(stringToConvert) {
  const techsArray = stringToConvert.split(',').map(t => t.trim());
  return techsArray;
}