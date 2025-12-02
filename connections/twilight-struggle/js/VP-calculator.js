const VPS = [
  document.getElementsByClassName('VP-L20')[0],
  document.getElementsByClassName('VP-L19')[0],
  document.getElementsByClassName('VP-L18')[0],
  document.getElementsByClassName('VP-L17')[0],
  document.getElementsByClassName('VP-L16')[0],
  document.getElementsByClassName('VP-L15')[0],
  document.getElementsByClassName('VP-L14')[0],
  document.getElementsByClassName('VP-L13')[0],
  document.getElementsByClassName('VP-L12')[0],
  document.getElementsByClassName('VP-L11')[0],
  document.getElementsByClassName('VP-L10')[0],
  document.getElementsByClassName('VP-L9')[0],
  document.getElementsByClassName('VP-L8')[0],
  document.getElementsByClassName('VP-L7')[0],
  document.getElementsByClassName('VP-L6')[0],
  document.getElementsByClassName('VP-L5')[0],
  document.getElementsByClassName('VP-L4')[0],
  document.getElementsByClassName('VP-L3')[0],
  document.getElementsByClassName('VP-L3')[0],
  document.getElementsByClassName('VP-L1')[0],
  document.getElementsByClassName('VP-0')[0],
  document.getElementsByClassName('VP-R1')[0],
  document.getElementsByClassName('VP-R2')[0],
  document.getElementsByClassName('VP-R3')[0],
  document.getElementsByClassName('VP-R4')[0],
  document.getElementsByClassName('VP-R5')[0],
  document.getElementsByClassName('VP-R6')[0],
  document.getElementsByClassName('VP-R7')[0],
  document.getElementsByClassName('VP-R8')[0],
  document.getElementsByClassName('VP-R9')[0],
  document.getElementsByClassName('VP-R10')[0],
  document.getElementsByClassName('VP-R11')[0],
  document.getElementsByClassName('VP-R12')[0],
  document.getElementsByClassName('VP-R13')[0],
  document.getElementsByClassName('VP-R14')[0],
  document.getElementsByClassName('VP-R15')[0],
  document.getElementsByClassName('VP-R16')[0],
  document.getElementsByClassName('VP-R17')[0],
  document.getElementsByClassName('VP-R18')[0],
  document.getElementsByClassName('VP-R19')[0],
  document.getElementsByClassName('VP-R20')[0],
]
/**
 * Define that
 * if VP is negative then it means US VP is positive
 * else if VP is 0, it means tie
 * else it means CN VP is positive
 */
var preStepVP = 0;
var VP = 0;
var endingFlag = false;

/**
 * @description After VP point changes, call this to demonstrate on the page
 */
function recalculate() {
  if (Math.abs(VP) >= 20) {
    endingFlag = true;
    VP = VP < 0 ? -20 : 20;
  }
  VPS[VP + 20].classList.toggle('current', true);
  if (preStepVP < 20 && preStepVP > -20) {
    VPS[preStepVP + 20].classList.toggle('current', false);
  }
  if (endingFlag) {
    callGameEndByVP();
  }
}

/**
 * @description Add some victory point to the US side
 * @param {*} value adding value
 */
function add_US_VP(value) {
  preStepVP = VP;
  VP -= value;
  recalculate();
}

/**
 * @description Add some victory point to the CN side
 * @param {*} value adding value
 */
function add_CN_VP(value) {
  preStepVP = VP;
  VP += value;
  recalculate();
}

/**
 * @description Game end by any side gets 20 or more VP
 */
function callGameEndByVP() {
  swal({
    title: "Game Ended!",
    text: "Game End! Winner is "  + (VP === 20? 'China' : '') + (VP === -20? 'USA' : ''),
    icon: success,
    dangerMode: false,
  })
  .then(() => {
    document.location.reload();
  });
}