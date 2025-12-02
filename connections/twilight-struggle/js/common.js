/**
 * Return the opposite side value
 * @param {String} side A String with value in either 'red' or 'blue'
 * @returns 'red' if side is 'blue', 'blue' if side is 'red'
 */
function getOppositeSide(side) {
  return side === 'red' ? 'blue' : 'red';
}

/**
 * Return the side's country name
 * @param {*} side A String with value in either 'red' or 'blue'
 * @returns  'United States' if side is 'blue', 'China' if side is 'red'
 */
function getPlayerByColor(side) {
  return side === 'red' ? 'China' : 'United States';
}
/**
 * @description Add on one side's influence point in a country by the amount of point
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {Number} point The amount of influence point
 * @param {String} country Target country
 */
function addInfluenceToThisCountry(side, point, country) {
  let target = document.getElementById(country + '-' + side + '-value');
  let curr = parseInt(target.innerHTML) ? parseInt(target.innerHTML) : 0;
  target.innerHTML = curr + point;
  adjustBoxColor(country);
}

/**
 * @description Remove one side's influence point in a country by the amount of point
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {Number} point The amount of influence point
 * @param {String} country Target country
 */
function removeInfluenceFromThisCountry(side, point, country) {
  let target = document.getElementById(country + '-' + side + '-value');
  let curr = parseInt(target.innerHTML) ? parseInt(target.innerHTML) : 0;
  target.innerHTML = (curr - point) <= 0 ? '' : (curr - point);
  adjustBoxColor(country);
}

/**
 * @description Set one side's influence point in a country to a specific value
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {Number} point The amount of influence point
 * @param {String} country Target country
 */
function setInfluenceOfThisCountry(side, point, country) {
  let target = document.getElementById(country + '-' + side + '-value');
  target.innerHTML = (point) <= 0 ? '' : (point);
  adjustBoxColor(country);
}

/**
 * @description Set one side's influence point in a country to a minium value,
 * such that this side can controll this country.
 *
 * Note that if this side already has enough influence point to controll this country, we will not change it.
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 */
function controllThisCountry(side, country) {
  let target = document.getElementById(country + '-' + side + '-value');
  let opponent = document.getElementById(country + '-' + getOppositeSide(side) + '-value');
  opCurr = parseInt(opponent.innerHTML) ? parseInt(opponent.innerHTML) : 0;
  result = (parseInt(document.getElementById(country + '-controll-point').innerHTML) + opCurr) < parseInt(target.innerHTML) ?
            parseInt(target.innerHTML) : parseInt(document.getElementById(country + '-controll-point').innerHTML) + opCurr;
  setInfluenceOfThisCountry(side, result, country);
  adjustBoxColor(country);
}

/**
 * @description Remove all influence point in a country
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 */
function removeAllInfluenceFromThisCountry(side, country) {
  setInfluenceOfThisCountry(side, 0, country);
  adjustBoxColor(country);
}

/**
 * @description Roll a dice and adjust its value based on the neibor of the target country
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 *
 * @returns adjusted dice result
 */
function warByOneSide(side, country) {
  let defer = 0;
  Connections[country].forEach(neibor => {
    if (isNotSuperPower(neibor)) {
      if (controllingThisCountry(getOppositeSide(side), neibor)) {
        defer++;
      }
    }
  });
  let playerResult = roll();
  return playerResult - defer;
}

/**
 * @description Roll a dice and adjust its value based on the neibor of the target country
 * @param {String} side A String with value in either 'red' or 'blue'
 * @param {String} country Target country
 *
 * @returns win player's side or empty if it is tie
 */
function WarByTwoSide(side, country) {
  let defer1 = 0;
  let defer2 = 0;
  Connections[country].forEach(neibor => {
    if (isNotSuperPower(neibor)) {
      if (controllingThisCountry(getOppositeSide(side), neibor)) {
        defer1++;
      } else if (controllingThisCountry(side, neibor)) {
        defer2++;
      }
    }
  });
  let player1Result = roll();
  let player2Result = roll();
  if ((player1Result - defer1) > (player2Result - defer2)) {
    return getOppositeSide(side);
  } else if ((player1Result - defer1) < (player2Result - defer2)) {
    return side;
  }
  return '';
}

/**
 * 
 * @param {*} side 
 * @param {*} targetList 
 * @param {*} totalPoint 
 * @param {*} threshold 
 */
function placeInfluenceInArea(side, targetList, totalPoint, threshold) {

}

/**
 * 
 * @param {*} side 
 * @param {*} targetList 
 * @param {*} totalPoint 
 * @param {*} threshold 
 */
function removeInfluenceFromArea(side, targetList, totalPoint, threshold) {

}