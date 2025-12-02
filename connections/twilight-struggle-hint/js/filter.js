/**
 * @description close visibility of a type of card which  operation points equals to the value
 * @param {*} value Ops value from 0 to 4
 * @param {*} element target clicked icon element
 */
function opsFilter(value, element) {
  const selected = element.classList.contains('selected');
  if (selected) {
    element.classList.toggle('selected', false);
  } else {
    element.classList.toggle('selected', true);
  }
  const cards = document.getElementById('draw-pool').children;
  for(index in cards) {
    if (cards[index].ops === value) {
      if (selected) {
        cards[index].classList.toggle('ops-filter', true);
      } else {
        cards[index].classList.toggle('ops-filter', false);
      }
    }
  }
}

/**
 * @description close visibility of a type of card which side equals to the value
 * @param {*} value Side value US/Neutral/USSR
 * @param {*} element target clicked icon element
 */
function sideFilter(value, element) {
  const checked = !element.checked;
  const cards = document.getElementById('draw-pool').children;
  for(index in cards) {
    if (cards[index].cardSide === value) {
      if (checked) {
        cards[index].classList.toggle('side-filter', true);
      } else {
        cards[index].classList.toggle('side-filter', false);
      }
    }
  }
}

/**
 * @description close visibility of a type of card which stage equals to the value
 * @param {*} value Side value US/Neutral/USSR
 * @param {*} element target clicked icon element
 */
function stageFilter(value, element) {
  const checked = !element.checked;
  const cards = document.getElementById('draw-pool').children;
  for(index in cards) {
    if (cards[index].war === value) {
      if (checked) {
        cards[index].classList.toggle('stage-filter', true);
      } else {
        cards[index].classList.toggle('stage-filter', false);
      }
    }
  }
}

/**
 * @description general function for deck refresh by shuffling or new stage card adding
 */
function resetFilters () {
  resetOpsFilter();
  resetSideFilter();
  resetStageFilter();
}

/**
 * @description reset all ops icon status
 */
function resetOpsFilter() {
  const opsFilters = document.getElementById('card-ops-filter').children;
  for(var index = 0; index < opsFilters.length; index++) {
    var icon = opsFilters[index]
    icon.classList.toggle('selected', true);
  }
  const cards = document.getElementById('draw-pool').children;
  for(var index = 0; index < cards.length; index++) {
    var cardImg = cards[index];
    cardImg.classList.toggle('ops-filter', false);
  }
}

/**
 * @description reset all side icon status
 */
function resetSideFilter() {
  const arr = [
    document.getElementById('filter-US'),
    document.getElementById('filter-Neutral'),
    document.getElementById('filter-USSR')
  ];
  for(var index = 0; index < arr.length; index++) {
    arr[index].checked = true;
  }
  const cards = document.getElementById('draw-pool').children;
  for(var index = 0; index < cards.length; index++) {
    var cardImg = cards[index];
    cardImg.classList.toggle('side-filter', false);
  }
}

/**
 * @description reset all side icon status
 */
function resetStageFilter() {
  const arr = [
    document.getElementById('filter-Early'),
    document.getElementById('filter-Mid'),
    document.getElementById('filter-Late')
  ];
  for(var index = 0; index < arr.length; index++) {
    arr[index].checked = true;
  }
  const cards = document.getElementById('draw-pool').children;
  for(var index = 0; index < cards.length; index++) {
    var cardImg = cards[index];
    cardImg.classList.toggle('stage-filter', false);
  }
}