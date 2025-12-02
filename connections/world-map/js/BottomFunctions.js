// Present            1991 ~ now
function setHybridWar() {
  let obj = makeCSSLink('hybridWar');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* import css and change text */
    obj.head.appendChild(obj.link);
    document.getElementById('introduction').innerHTML = "World Map (present)"
    document.getElementById('hybridWar').innerHTML = "Remove Current Alignment";
    document.getElementById('hybridWar').style.color = "lightgreen";
  } else {
    removeCSS();
  }
}
// Cold War           1945 ~ 1989
function setColdwar() {
  let obj = makeCSSLink('coldWar');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* build Soviet Union and Yugoslavia when first cold war was set*/
    addSovietAndYugoslavia();
    document.getElementById('introduction').innerHTML = "Cold War (1945 ~ 1989)"
    obj.head.appendChild(obj.link);
    document.getElementById('coldWar').innerHTML = "Remove Cold War";
    document.getElementById('coldWar').style.color = "lightgreen";

  } else {
    removeCSS();
  }
}
// World War II       1939 ~ 1945
function setWWII() {
  let obj = makeCSSLink('WWII');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* import css and change text */
    addSovietAndYugoslavia();
    document.getElementById('ukText').innerHTML = "British Empire";
    obj.head.appendChild(obj.link);
    document.getElementById('introduction').innerHTML = "World War II Map (1942)"
    document.getElementById('WWII').innerHTML = "Remove World War II Alignment";
    document.getElementById('WWII').style.color = "greenyellow";
  } else {
    removeCSS();
  }
}
// Late Colonial Age  1858 ~ 1947
function setColonialAge() {
  let obj = makeCSSLink('colonialAge');
  if (!document.getElementById(obj.cssId)) {
    /* remove before any action */
    closeDIYMode();
    removeCSS();
    /* import css and change text */
    document.getElementById('introduction').innerHTML = "Late Colonial Age at 1920"
    obj.head.appendChild(obj.link);
    document.getElementById('Colonial').innerHTML = "Remove Colonial Empires";
    document.getElementById('Colonial').style.color = "maroon";
  } else {
    removeCSS();
  }
}

