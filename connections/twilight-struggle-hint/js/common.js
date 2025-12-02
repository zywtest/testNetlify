Element.prototype.insertChildAtIndex = function(child, index) {
  if (!index) {
    index = 0;
  }
  // if list is empty, append at the end
  if (this.children.length == 0) {
    this.appendChild(child);
  }
  // if the target war stage is larger than any element in the list, append at the end
  else if (compareStage(child.war, this.children[this.children.length - 1].war) > 0) {
    this.appendChild(child);
  }
  // if the target war stage is the same, compare the id, if larger, append at the end
  else if (compareStage(child.war, this.children[this.children.length - 1].war) == 0 && (parseInt(child.id) > parseInt(this.children[this.children.length - 1].id))) {
    this.appendChild(child);
  }
  // loop through and find a position to insert
  else {
    for (var i = 0; i <= index; i++) {
      if (validInsert(child, this.children[i])) {
        this.insertBefore(child, this.children[i]);
        return;
      }
    }
  }
}

/**
 * @description Return true or false based on the next 2 element input, if true is returned, the source element should append before the target element
 * @param {*} source the element you want to append into the list
 * @param {*} target any element in the list
 * @abstract source => Card#1 'Asia Scoring' an early war card, target => #3 'Middle East Scoring' a early war card, return true;
 * @abstract source => Card#103 'Defectors' an early war card, target => #36 'Brush War' a mid war card, return true;
 * @abstract source => Card#102 'Iran-Iraq War*' an late war card, target => #103 'Defectors' an early war card, return false;
 */
function validInsert(source, target) {
  if (compareStage(source.war, target.war) < 0) {
    return true;
  } if (compareStage(source.war, target.war) == 0) {
    return parseInt(source.id) < parseInt(target.id);
  } else {
    return false;
  }
}

function compareStage(stg1, stg2) {
  const transformValue = {
    'early': 1,
    'mid': 2,
    'late': 3,
  }
  if (transformValue[stg1] < transformValue[stg2]) {
    return -1;
  } else if (transformValue[stg1] == transformValue[stg2]) {
    return 0;
  } else {
    return 1;
  }
}
/** ------------------------------------------------------------------------------
 * Drag and Drop functions
 * ------------------------------------------------------------------------------*/

function drag(ev) {
  ev.dataTransfer.setData('Text', ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * @description dropToDraw function
 * @param {*} ev
 */
function dropToDraw(ev) {
  const drawPool = document.getElementById('draw-pool');
  ev.preventDefault();
  var data = ev.dataTransfer.getData('Text');
  drawPool.insertChildAtIndex(document.getElementById(data), data - 1);
  ev.preventDefault();
  ev.dataTransfer.clearData();
  recount();
}

/**
 * @description dropToDiscard function
 * @param {*} ev
 */
function dropToDiscard(ev) {
  const discardPool = document.getElementById('discard-pool');
  ev.preventDefault();
  var data=ev.dataTransfer.getData('Text');
  discardPool.insertChildAtIndex(document.getElementById(data), data - 1);
  ev.preventDefault();
  ev.dataTransfer.clearData();
  recount();
}

/**
 * @description dropToRemove function
 * @param {*} ev
 */
function dropToRemove(ev) {
  const removePool = document.getElementById('remove-pool');
  ev.preventDefault();
  var data=ev.dataTransfer.getData('Text');
  removePool.insertChildAtIndex(document.getElementById(data), data - 1);
  ev.preventDefault();
  ev.dataTransfer.clearData();
  recount();
}

/** ------------------------------------------------------------------------------
 * Recount functions
 * ------------------------------------------------------------------------------*/

function recount() {
  const drawPool = document.getElementById('draw-pool');
  const result = drawPool.children.length;
  const placeholder = document.getElementById('counter');
  placeholder.innerHTML = 'Remains: ' + result;
}