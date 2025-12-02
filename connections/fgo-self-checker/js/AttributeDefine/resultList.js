const servantContainer =      document.querySelector('.servant-info-accordion');
const resultList =            document.querySelectorAll('.servant-icon');
const classFilterImgs = {
  'saberClassIcon'      : document.querySelector('.class-icons-saber'),
  'lancerClassIcon'     : document.querySelector('.class-icons-lancer'),
  'archerClassIcon'     : document.querySelector('.class-icons-archer'),
  'riderClassIcon'      : document.querySelector('.class-icons-rider'),
  'casterClassIcon'     : document.querySelector('.class-icons-caster'),
  'assassinClassIcon'   : document.querySelector('.class-icons-assassin'),
  'berserkerClassIcon'  : document.querySelector('.class-icons-berserker'),
  'rulerClassIcon'      : document.querySelector('.class-icons-ruler'),
  'avengerClassIcon'    : document.querySelector('.class-icons-avenger'),
  'alteregoClassIcon'   : document.querySelector('.class-icons-alterego'),
  'mooncancerClassIcon' : document.querySelector('.class-icons-mooncancer'),
  'foreignerClassIcon'  : document.querySelector('.class-icons-foreigner'),
  'pretenderClassIcon'  : document.querySelector('.class-icons-pretender'),
}
var classFilter = {
  'Saber': false,
  'Lancer': false,
  'Archer': false,
  'Rider': false,
  'Caster': false,
  'Assassin': false,
  'Berserker': false,
  'Ruler': false,
  'Avenger': false,
  'Alterego': false,
  'MoonCancer': false,
  'Foreigner': false,
  'Pretender': false,
}
var classFiltering = false;

/**
 * @description When clicking an icon in result list, set the fields in servant info by its object
 * then move to the top of the webpage and open the servant info container if it is closed
 *
 * @param {any} element The icon that user tabbed
 * @memberOf resultList.js
 */
function goToServantInfo(id) {
  resetInfo();
  /**
   * after read the triggered icon, use its id value to find the corresponding servant in the list
   * then set the fields
   */
  loadInfo(id);
  servantContainer.classList.replace('hide', 'show');
  servantContainer.scrollIntoView({behavior: 'smooth'});
}

/**
 * @description When user click on the golden all class icon, select all classes below and do a query
 * @memberOf resultList.js
 */
function selectAllClasses() {
  for(let cls in classFilter) {
    classFilter[cls] = true;
  }
  for(let icon in classFilterImgs) {
    changeClassIcon(classFilterImgs[icon]);
  }
  classFiltering = true;
  adjustResultListByFilter();
}

/**
 * @description When user click on the bronze all class icon, undo select all classes below and reset result list
 * @memberOf resultList.js
 */
function removeAllClasses() {
  for(let cls in classFilter) {
    classFilter[cls] = false;
  }
  for(let icon in classFilterImgs) {
    changeClassIcon(classFilterImgs[icon]);
  }
  classFiltering = false;
  adjustResultListByFilter();
}

/**
 * @description When user click on the bronze all class icon, switch this class below and query result list
 * @param {*} element target class icon
 * @memberOf resultList.js
 */
function selectThisClass(element) {
  classFilter[element.alt] = !classFilter[element.alt];
  changeClassIcon(element);
  let filteringFlag = false;
  for(let cls in classFilter) {
    if (classFilter[cls]) {
      filteringFlag = true;
      break;
    }
  }
  classFiltering = filteringFlag;
  adjustResultListByFilter();
}

/**
 * @description Switch the icon source from gold to bronze or vise versa
 * @param {*} element target class icon image
 * @memberOf resultList.js
 */
function changeClassIcon(element) {
  let sourceAddress = './source/classIcons/';
  let gold = '金卡';
  let bronze = '铜卡'
  if (classFilter[element.alt]) {
    element.src = sourceAddress + gold + (element.alt) + '.png';
  } else {
    element.src = sourceAddress + bronze + (element.alt) + '.png';
  }
}

/**
 * @description query the result list by adding/removing element class based on the current filter choice
 * @memberOf resultList.js
 */
function adjustResultListByFilter() {
  if (classFiltering) {
    resultList.forEach(result => {
      if (!classFilter[servantList[(result.alt).slice(-3)].class]) {
        result.classList.toggle('out-of-filter', true);
      } else {
        result.classList.toggle('out-of-filter', false);
      }
    });
  } else {
    let restoreList = document.querySelectorAll('.out-of-filter');
    restoreList.forEach(result => {
      result.classList.toggle('out-of-filter', false);
    });
  }
}