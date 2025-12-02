
/**
 * @description roll a normal dice
 * @returns an integer from 1 to 6
 */
function roll() {
  return Math.floor(Math.random() * 6);
}

/**
 * Check that on side can place influence point in this country or not
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 *
 * @returns (boolean) may place or not
 */
function mayPlaceInfluenceInThisCountry(side, country) {
  let target = document.getElementById(country + '-' + side + '-value');
  let currInfluencePoint = parseInt(target.innerHTML);
  // if this side has influence point in this country, return true directly
  if (currInfluencePoint > 0) {
    return true;
  }
  // otherwise, check all its neiborhood countries
  else {
    for(const neibor of Connections[country]) {
      if (isNotSuperPower(neibor)) {
        let neiborValue = document.getElementById(neibor + '-' + side + '-value').innerHTML;
        if (parseInt(neiborValue) > 0) {
          return true;
        }
      } else if ((side === 'red' && neibor === 'CHINA') || (side === 'blue' && neibor === 'USA')) {
        return true;
      }
    }
  }
  return false;
}

/**
 * return a boolean based on conditions:
 *
 * true: target side has influence point in this country
 *
 * false: otherwise
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 *
 * @returns (boolean) has influence point or not
 */
function hasInfluenceInThisCountry(side, country) {
  return parseInt(document.getElementById(country + '-' + side + '-value')) > 0;
}

/**
 * return a boolean based on conditions:
 *
 * true: target side has enough influence point in this country to controll it
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 *
 * @returns (boolean) controlls or not
 */
function controllingThisCountry(side, country) {
  let targetClass = side + '-controlled';
  return document.getElementById(country + '-' + side + '-box').classList.contains(targetClass);
}