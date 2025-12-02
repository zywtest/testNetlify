/**
 * @description Open/Close an accordion
 * @param {any} element Accordion that triggered
 */
function hideThisContainer(element) {
  if (element.classList.contains('hide')) {
    element.classList.replace('hide', 'show');
  } else {
    element.classList.replace('show', 'hide');
  }
}
/**
 * @description Check if an element if on screen or not
 * @param {any} element a HTML element
 */
function isOnScreen(element)
{
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}