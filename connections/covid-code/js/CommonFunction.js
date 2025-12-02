/**
 * @description shorthand for document.querySelector()
 * @param {any} element Anything
 * @returns {element} element that return from document.querySelector()
 * @memberof CommonFunction.js
 */
 function $(element) {
  return document.querySelector(element);
}
/**
 * @description shorthand for document.querySelectorAll()
 * @param {any} element Anything
 * @returns {list} element list that return from document.querySelectorAll()
 * @memberof CommonFunction.js
 */
 function $All(element) {
  return document.querySelectorAll(element);
}
/**
 * @description shorthand for document.getElementById()
 * @param {any} element Anything
 * @returns {element} element that return from document.getElementById()
 * @memberof CommonFunction.js
 */
 function $id(element) {
  return document.getElementById(element);
}
/**
 * @description clear all children in an element
 * @param {element} element A HTML Element
 * @memberof CommonFunction.js
 */
 function removeAllChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.lastChild);
  }
}
/**
 * @description return a string is full or partial present in an array or not
 * e.g. list = [abc, def]; string = a, return true; string = z return false;
 * @param {list} list a *string* array or just a string
 * @param {string} string a string
 * @returns true if string is full or partial exist in the list, otherwise, return false
 * @memberof CommonFunction.js
 */
 function Array_Contains_Includes (list, string) {
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return false;
    }
    for(let idx in list) {
      if (list[idx].includes(string)) {
        return true;
      }
    }
    return false;
  } else {
    return list.includes(string);
  }
}

/**
 * Alter the class 'hide' of a given HTML element, 'hide' should be the last class in the classList
 * @param {element} element a HTML element
 * @memberof CommonFunction.js
 */
function hideThis(element) {
  if(element.classList[element.classList.length - 1] === 'hide') {
    element.classList.toggle('hide', false);
  }
  else {
    element.classList.toggle('hide', true);
  }
}

/**
 * Get value if it is not null or empty, return res1, else, return res2 || test.
 * @param {*} test test value
 * @param {*} res1 result 1
 * @param {*} res2 result 2
 * @returns  if value is not null or empty, return res1, else, return res2 || test.
 * @memberof CommonFunction.js
 */
function nullHandler(test, res1, res2) {
  if(test === '' || test === undefined || test === null) {
    return res1;
  }
  if(res2 !== '' && res2 !== undefined && res2 !== null) {
    return res2;
  }
  return test;
}