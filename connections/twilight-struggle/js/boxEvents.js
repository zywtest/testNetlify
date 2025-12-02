influenceBoxLabel = ['-blue-box', '-red-box'];
influencePointLabel = ['-blue-value', '-red-value'];
controllPoint = '-controll-point';
countryLabel = [
  'canada',
  'mexico',
  'guatemala',
  'cuba',
  'honduras',
  'nicaragua',
  'haiti',
  'dominican',
  'costarica',
  'panama',
  'colombia',
  'venezuela',
  'ecuador',
  'bolivia',
  'brazil',
  'peru',
  'paraguay',
  'uruguay',
  'chile',
  'uruguay',
  'argentina',
  'norway',
  'sweden',
  'finland',
  'uk',
  'germany',
  'poland',
  'baltic-states',
  'belarus',
  'west-europe',
  'austro-hungury',
  'ukraine',
  'se-europe',
  'morocco',
  'algeria',
  'libya',
  'egypt',
  'west-african-states',
  'saharan-states',
  'chad',
  'ivory-coast',
  'nigeria',
  'ethiopia',
  'sudan',
  'congo',
  'kenya',
  'angola',
  'zimbabwe',
  'se-african-states',
  'botswana',
  'south-africa',
  'south-caucasus',
  'turkey',
  'syria-iraq',
  'israel',
  'iran',
  'saudi-arabia',
  'middle-asian-states',
  'mongolia',
  'nkorea',
  'afghanistan',
  'skorea',
  'japan',
  'pakistan',
  'burma',
  'laos-cambodia',
  'taiwan',
  'india',
  'thailand',
  'vietnam',
  'philippines',
  'malaysia',
  'indonesia',
  'oceania-states',
  'australia',
  'newzealand',
];

/**
 * @description set onmousedown listener to all influence boxes and influence point labels
 */
function buildListener() {
  countryLabel.forEach(country => {
    influenceBoxLabel.forEach(boxLabel => {
      let box = document.getElementById(country + boxLabel);
      box.onmousedown = function(event) {
        let pointLabel = influencePointLabel[influenceBoxLabel.indexOf(boxLabel)];
        let val = document.getElementById(country + pointLabel);
        let curr = justifyClickEvent(event.which, parseInt(val.innerHTML));
        val.innerHTML = (curr) ? curr : '';
        adjustBoxColor(country);
      }
    });
    influencePointLabel.forEach(pointLabel => {
      let point = document.getElementById(country + pointLabel);
      point.onmousedown = function(event) {
        let curr = justifyClickEvent(event.which, parseInt(point.innerHTML));
        point.innerHTML = (curr) ? curr : '';
        adjustBoxColor(country);
      }
    });
  });
}

/**
 * @description Change the influence box's color based on its current status:
 *
 * if blue side controlls this country, let blue box's background be blue and the value text color be white
 *
 * if red side controlls this country, let red box's background be red and the value text color be white
 *
 * if both sides do not controll this country, their backgrounds are white, but text colors are in blue/red
 *
 * if any side does not have any influence point in this country, the background still demonstrate the continent's color, the value text does not show up.
 *
 * @param {String} country Target country
 *
 */
function adjustBoxColor(country) {
  let blueBox = document.getElementById(country + influenceBoxLabel[0]);
  let redBox = document.getElementById(country + influenceBoxLabel[1]);
  let blueValue = (document.getElementById(country + influencePointLabel[0]).innerHTML) ? parseInt(document.getElementById(country + influencePointLabel[0]).innerHTML) : 0;
  let redValue = (document.getElementById(country + influencePointLabel[1]).innerHTML) ? parseInt(document.getElementById(country + influencePointLabel[1]).innerHTML) : 0;
  let ctrlPts = parseInt(document.getElementById(country + controllPoint).innerHTML);
  blueBox.classList.toggle('blue-present', false);
  blueBox.classList.toggle('blue-controlled', false);
  redBox.classList.toggle('red-present', false);
  redBox.classList.toggle('red-controlled', false);
  if (blueValue - redValue >= ctrlPts) {
    blueBox.classList.toggle('blue-controlled', true);
  } else if (blueValue > 0) {
    blueBox.classList.toggle('blue-present', true);
  }
  if (redValue - blueValue >= ctrlPts) {
    redBox.classList.toggle('red-controlled', true);
  } else if (redValue > 0) {
    redBox.classList.toggle('red-present', true);
  }
}

/**
 * @description Adjust the influence point value based on the event is left click or right click
 *
 * If it is left click, add 1 point to curr
 *
 * Else, remove 1 point from curr, curr has a minium value of 0
 *
 * @param {String} event the onmousedown event result
 * @param {String} curr current influence point value
 *
 * @returns (int) adjusted curr value
 */
function justifyClickEvent(event, curr) {
  if (event == 1) {
    if (!curr) {
      curr = 1;
    } else {
      curr++;
    }
  }
  if (event == 3) {
    if (curr) {
      curr--;
    }
    if (curr === 0) {
      curr = '';
    }
  }
  return curr;
}
