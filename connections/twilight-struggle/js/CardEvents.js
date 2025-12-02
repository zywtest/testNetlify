/**
 * @description Enlargement of NATO
 * 仅当美国控制英国、西欧、德国时能够作为事件发生
 * 美国获得足以控制波兰、波罗的海、奥匈地区的影响力；
 * 在东南欧放置2点US影响力。
 *
 * 作为事件使用后，移出游戏
 * @function use variable.call() to trigger it
 */
var No001 = function () {
  const CardName = 'Card #001: Enlargement of NATO';
  // 仅当美国控制英国、西欧、德国时能够作为事件发生
  if ( !controllingThisCountry('blue', 'uk')
    || !controllingThisCountry('blue', 'west-europe')
    || !controllingThisCountry('blue', 'germany')) {
    swal ( "Error", eventCardCannotTriggerMessage, "error" );
  } else {
    // 美国获得足以控制波兰、波罗的海、奥匈地区的影响力；
    controllThisCountry('blue', 'poland');
    controllThisCountry('blue', 'austro-hungury');
    controllThisCountry('blue', 'baltic-states');
    // 在东南欧放置2点US影响力。
    setInfluenceOfThisCountry('blue', 2, 'se-europe');
    // display
    swal({
      text: CardName + eventCardTriggeredMessage,
      icon: success,
      button: Next,
    });

    No001 = function() {
      swal({
        text: CardName + eventCardTriggeredErrorMessage,
        icon: error,
        button: Next,
      });
    }
  }
}

var test = function () {
  add_US_VP(3);
}

var test2 = function () {
  add_CN_VP(10);
}