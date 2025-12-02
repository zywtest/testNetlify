/**
 * Transform a value with unit k, m or b
 * @param {*} text An input string with full numbers
 */
function shortenNumberEN(text) {
  let num = parseInt(text);
  let infix = 0;
  while (num > 1000) {
    infix++;
    num /= 1000;
  }
  return num.toFixed(3) + unitFindEN(infix);
}
/**
 * Determine which unit is fitting
 * @param {*} infix 
 */
function unitFindEN(infix) {
  switch(infix) {
    default: return ''; break;
    case 1: return 'K'; break;
    case 2: return 'M'; break;
    case 3: return 'B'; break;
  }
}
/**
 * Transform a value with unit 万, 亿
 * @param {*} text An input string with full numbers
 */
function shortenNumberCN(text) {
  let num = parseInt(text);
  let infix = 0;
  while (num > 10000) {
    infix++;
    num /= 10000;
  }
  return num.toFixed(2) + unitFindCN(infix);
}
/**
 * Determine which unit is fitting
 * @param {*} infix 
 */
function unitFindCN(infix) {
  switch(infix) {
    default: return ''; break;
    case 1: return '万'; break;
    case 2: return '亿'; break;
  }
}