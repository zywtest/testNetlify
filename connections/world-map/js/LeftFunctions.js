/**
 * function search country:
 *
 * After typing and clicking on the button, the target zone will be shown in purple in the map.
 * Note that part of the correct text will not be accepted.
 *
 * E.g.
 *
 * China 中国 => accepted
 * China => NOT accepted
 */
let currentSearching = '';
function searchCountry() {
  var search = document.getElementById('search-box-input').value;
  for(var country in relativeHintList) {
    if(relativeHintList[country] === search) {
      currentSearching = country;
      const accordionItems = [...document.getElementsByClassName(currentSearching)];

      accordionItems.forEach(accordionItem => {
        accordionItem.classList.add('searchOver');
      });
    }
  };
}
/**
 * Remove the styling class and reset the searching text
 */
function clearSearch() {
  const accordionItems = [...document.getElementsByClassName(currentSearching)];

  accordionItems.forEach(accordionItem => {
    accordionItem.classList.remove('searchOver');
  });
  currentSearching = '';
}

// British Commonwealth
function setBritishFed() {
  let obj = makeCSSLink('BritishCommonwealth');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* import css and change text */
    obj.head.appendChild(obj.link);
    document.getElementById('BritishFed').innerHTML = "Remove This Federation";
    document.getElementById('BritishFed').style.color = "maroon";
  } else {
    removeCSS();
  }
}
// Commonwealth of Independent States
function setRussianFed() {
  let obj = makeCSSLink('CIS');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* import css and change text */
    obj.head.appendChild(obj.link);
    document.getElementById('RussianFed').innerHTML = "Remove This Federation";
    document.getElementById('RussianFed').style.color = "maroon";
  } else {
    removeCSS();
  }
}
