/**
 * @description add the early war cards into the draw pool
 */
function addEarlyWarCards() {
  const pool = document.getElementById('draw-pool');
  const remove = document.getElementById('remove-pool');
  const cardList = cards.earlyWar;
  for(var key in cardList) {
    var img = document.createElement('img');
    img.id = key;
    img.src = './source/cards/' + cardList[key].src + '.jpg';
    img.alt = cardList[key].src;
    img.title = cardList[key].src;
    img.ops = cardList[key].ops;
    img.cardSide = cardList[key].cardSide;
    img.isEvent = cardList[key].isEvent;
    img.removeInLate = cardList[key].removeInLate;
    img.war = 'early';
    img.ondragstart = () => {
      drag(event);
    }
    img.draggable = true;
    if (lateWarStart && img.removeInLate) {
      remove.appendChild(img);
    } else {
      pool.appendChild(img);
    }
  }
  if(withOptional) {
    const optionals = cards.optional.earlyWar;
    for(var key in optionals) {
      var img = document.createElement('img');
      img.id = key;
      img.classList.toggle('optional', true);
      img.src = './source/cards/' + optionals[key].src + '.jpg';
      img.alt = optionals[key].src;
      img.title = optionals[key].src;
      img.ops = optionals[key].ops;
      img.cardSide = optionals[key].cardSide;
      img.isEvent = optionals[key].isEvent;
      img.removeInLate = optionals[key].removeInLate;
      img.war = 'early';
      img.ondragstart = () => {
        drag(event);
      }
      img.draggable = true;
      if (lateWarStart && img.removeInLate) {
        remove.appendChild(img);
      } else {
        pool.appendChild(img);
      }
    }
  }
  recount();
  resetFilters();
  setBodyCurrentStage(1);
}

/**
 * @description add the mid war cards into the draw pool
 */
function addMidWarCards() {
  const pool = document.getElementById('draw-pool');
  const remove = document.getElementById('remove-pool');
  const cardList = cards.midWar;
  for(var key in cardList) {
    var img = document.createElement('img');
    img.id = key;
    img.src = './source/cards/' + cardList[key].src + '.jpg';
    img.alt = cardList[key].src;
    img.title = cardList[key].src;
    img.ops = cardList[key].ops;
    img.cardSide = cardList[key].cardSide;
    img.isEvent = cardList[key].isEvent;
    img.removeInLate = cardList[key].removeInLate;
    img.war = 'mid';
    img.ondragstart = () => {
      drag(event);
    }
    img.draggable = true;
    if (lateWarStart && img.removeInLate) {
      remove.appendChild(img);
    } else {
      pool.appendChild(img);
    }
  }
  if(withOptional) {
    const optionals = cards.optional.midWar;
    for(var key in optionals) {
      var img = document.createElement('img');
      img.id = key;
      img.classList.toggle('optional', true);
      img.src = './source/cards/' + optionals[key].src + '.jpg';
      img.alt = optionals[key].src;
      img.title = optionals[key].src;
      img.ops = optionals[key].ops;
      img.cardSide = optionals[key].cardSide;
      img.isEvent = optionals[key].isEvent;
      img.removeInLate = optionals[key].removeInLate;
      img.war = 'mid';
      img.ondragstart = () => {
        drag(event);
      }
      img.draggable = true;
      if (lateWarStart && img.removeInLate) {
        remove.appendChild(img);
      } else {
        pool.appendChild(img);
      }
    }
  }
  recount();
  resetFilters();
  setBodyCurrentStage(2);
}

/**
 * @description add the late war cards into the draw pool
 */
function addLateWarCards() {
  const pool = document.getElementById('draw-pool');
  const cardList = cards.lateWar;
  for(var key in cardList) {
    var img = document.createElement('img');
    img.id = key;
    img.src = './source/cards/' + cardList[key].src + '.jpg';
    img.alt = cardList[key].src;
    img.title = cardList[key].src;
    img.ops = cardList[key].ops;
    img.cardSide = cardList[key].cardSide;
    img.isEvent = cardList[key].isEvent;
    img.war = 'late';
    img.ondragstart = () => {
      drag(event);
    }
    img.draggable = true;
    pool.appendChild(img);
  }
  if(withOptional) {
    const optionals = cards.optional.lateWar;
    for(var key in optionals) {
      var img = document.createElement('img');
      img.id = key;
      img.classList.toggle('optional', true);
      img.src = './source/cards/' + optionals[key].src + '.jpg';
      img.alt = optionals[key].src;
      img.title = optionals[key].src;
      img.ops = optionals[key].ops;
      img.cardSide = optionals[key].cardSide;
      img.isEvent = optionals[key].isEvent;
      img.war = 'late';
      img.ondragstart = () => {
        drag(event);
      }
      img.draggable = true;
      pool.appendChild(img);
    }
  }
  recount();
  resetFilters();
  setBodyCurrentStage(3);
}

/**
 * @description return all cards in the discard pool back into draw pool
 */
function shuffle() {
  const discardPool = document.getElementById('discard-pool');
  const drawPool = document.getElementById('draw-pool');
  if (discardPool.children.length == 0) {
    return;
  }
  while(discardPool.children.length > 0) {
    drawPool.insertChildAtIndex(discardPool.children[0], discardPool.children[0].id);
  }
  recount();
  resetFilters();
}

/**
 * @description disable a HTML Element
 * @param {HTML Element} el the target HTML Element
 */
function disableThis(el) {
  if (!el) {
    return;
  }
  el.disabled = true;
}

/**
 * @description Change the visibility of buttons based on the value flag
 * @param {int} flag the input case
 */
function setVisibleButtons(flag) {
  const midWar = document.getElementById('MidWar');
  const lateWar = document.getElementById('LateWar');
  if (flag == 0) {
    midWar.classList.toggle('hide', true);
    lateWar.classList.toggle('hide', true);
  } else if (flag == 1) {
    midWar.classList.toggle('hide', false);
    lateWar.classList.toggle('hide', true);
  } else if (flag == 2) {
    lateWar.classList.toggle('hide', false);
  }
}

/**
 * Set current Stage variable to a global element
 * @param {*} flag value
 */
function setBodyCurrentStage(flag) {
  const el = document.getElementsByTagName('body')[0];
  if(flag == 1) {
    el.accessKey = 'early';
  } else if (flag == 2) {
    el.accessKey = 'mid';
  } else {
    el.accessKey = 'late';
  }
}