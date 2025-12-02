const US_military_box = {
  'lv5': document.querySelector('.US-MILITARY-LEVEL-5'),
  'lv4': document.querySelector('.US-MILITARY-LEVEL-4'),
  'lv3': document.querySelector('.US-MILITARY-LEVEL-3'),
  'lv2': document.querySelector('.US-MILITARY-LEVEL-2'),
  'lv1': document.querySelector('.US-MILITARY-LEVEL-1'),
  'lv0': document.querySelector('.US-MILITARY-LEVEL-0'),
};

const CN_military_box = {
  'lv5': document.querySelector('.CN-MILITARY-LEVEL-5'),
  'lv4': document.querySelector('.CN-MILITARY-LEVEL-4'),
  'lv3': document.querySelector('.CN-MILITARY-LEVEL-3'),
  'lv2': document.querySelector('.CN-MILITARY-LEVEL-2'),
  'lv1': document.querySelector('.CN-MILITARY-LEVEL-1'),
  'lv0': document.querySelector('.CN-MILITARY-LEVEL-0'),
};

var US_military_point = 5;
var CN_military_point = 5;

/**
 * @description Move one side's military status to the right by the parameter
 * @param {*} side A String with value in either 'red' or 'blue'
 * @param {*} value forwarding value
 */
function moveForwardOnMilitaryStatus(side, value) {
  if (side === 'red') {
    CN_military_point -= value;
    CN_military_point = CN_military_point < 0 ? 0 : CN_military_point;
  } else {
    US_military_point -= value;
    US_military_point = US_military_point < 0 ? 0 : US_military_point;
  }
  reactMilitaryOnPage();
}

/**
 * @description Set one side's military status to a specific value
 * @param {*} side A String with value in either 'red' or 'blue'
 * @param {*} value target value
 */
function setOneSideMilitaryStatus(side, value) {
  if (side === 'red') {
    CN_military_point = value;
  } else {
    US_military_point = value;
  }
  reactMilitaryOnPage();
}

/**
 * @description Set both sides' military status to a specific value
 * @param {*} value target value
 */
function setBothSideMilitaryStatus(value) {
  CN_military_point = value;
  US_military_point = value;
  reactMilitaryOnPage();
}

/**
 * @description After the military status changed, demonstrate it on the page
 */
function reactMilitaryOnPage() {
  for(let key in CN_military_box) {
    US_military_box[key].classList.toggle('toggle-on', false);
    CN_military_box[key].classList.toggle('toggle-on', false);
  }
  US_military_box['lv' + US_military_point].classList.toggle('toggle-on', true);
  CN_military_box['lv' + CN_military_point].classList.toggle('toggle-on', true);
}