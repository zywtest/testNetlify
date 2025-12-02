
const DEFCON_LEVEL_TABLE = {
  'lv5': document.querySelector('.DEFCON-LEVEL-5'),
  'lv4': document.querySelector('.DEFCON-LEVEL-4'),
  'lv3': document.querySelector('.DEFCON-LEVEL-3'),
  'lv2': document.querySelector('.DEFCON-LEVEL-2'),
  'lv1': document.querySelector('.DEFCON-LEVEL-1'),
};

var DEFCON_LEVEL = 5;
/**
 * @description Increase the DEFCON level, max to 5
 * @param {*} value changing value
 * @param {*} player reduntant parameter
 */
function increaseDefconLevel(value, player) {
  DEFCON_LEVEL += value;
  if (DEFCON_LEVEL > 5) {
    DEFCON_LEVEL = 5;
  }
  reactDefconOnPage();
}

/**
 * @description Decrease the DEFCON level, min to 1
 * if reaches level 1, call to end the game
 * @param {*} value changing value
 * @param {*} player player who do this event
 */
function decreaseDefconLevel(value, player) {
  DEFCON_LEVEL -= value;
  if (DEFCON_LEVEL <= 1) {
    DEFCON_LEVEL = 1;
    reactDefconOnPage();
    toggleOnDEFCONFlag(player);
  }
  reactDefconOnPage();
}

/**
 * @description Set the DEFCON level to a specific level
 * @param {*} value target value
 * @param {*} player reduntant parameter
 */
function setDefconLevel(value, player) {
  DEFCON_LEVEL = value;
  reactDefconOnPage();
}

/**
 * @description After DEFCON level changes, demonstrate on the page
 */
function reactDefconOnPage() {
  for(let key in DEFCON_LEVEL_TABLE) {
    DEFCON_LEVEL_TABLE[key].classList.toggle('toggle-on', false);
  }
  DEFCON_LEVEL_TABLE['lv' + DEFCON_LEVEL].classList.toggle('toggle-on', true);
}

/**
 * @description Game ends, the player who causes this happen loss.
 * @param {*} player player who causes this flag
 */
function toggleOnDEFCONFlag(player) {
  alert('nuclear war starts, ' + getPlayerByColor(player) + ' loss.');
  document.location.reload();
}