var DIY = new DIYMode();

function startDIY() {
  removeCSS();
  DIY.clearAllDIYData();
  DIY.start();
}

function SetDIYColor(obj) {
  if (DIY.mode !== 1) {
    DIY.clearAllDIYData();
  } else {
    const countryClassString = obj.classList[1];
    const accordionItems = [...document.getElementsByClassName(countryClassString)];
    DIY.colorList[countryClassString] = (DIY.colorList[countryClassString] + 1) % 4;
    accordionItems.forEach(accordionItem => {
      accordionItem.classList.remove('red');
      accordionItem.classList.remove('blue');
      accordionItem.classList.remove('black');
      switch(DIY.colorList[countryClassString]) {
        case 1: accordionItem.classList.add('red'); break;
        case 2: accordionItem.classList.add('blue'); break;
        case 3: accordionItem.classList.add('black'); break;
        default: break;
      }
    });
    switch(DIY.colorList[countryClassString]) {
      case 1: DIY.addThisCountryIntoStage(countryClassString, 'red'); break;
      case 2: DIY.removeThisCountryFromStage(countryClassString, 'red'); DIY.addThisCountryIntoStage(countryClassString, 'blue');break;
      case 3: DIY.removeThisCountryFromStage(countryClassString, 'blue'); DIY.addThisCountryIntoStage(countryClassString, 'black');break;
      default: DIY.removeThisCountryFromStage(countryClassString, 'black');break;
    }
    bindingIntoHTML();
  }
}

function bindingIntoHTML() {
  document.getElementById('redPop').innerHTML = "Population: " + shortenNumberEN(DIY.redStage.pop) +
    "<br />" + (DIY.redStage.pop/DIY.totalPop*100.00).toFixed(2) + "% of world population";
  document.getElementById('redArea').innerHTML = "Area: " + shortenNumberEN(DIY.redStage.area) +
    "<br />" + (DIY.redStage.area/DIY.totalArea*100.00).toFixed(2) + "% of world Surface Area";
  document.getElementById('bluePop').innerHTML = "Population: " + shortenNumberEN(DIY.blueStage.pop) +
    "<br />" + (DIY.blueStage.pop/DIY.totalPop*100.00).toFixed(2) + "% of world population";
  document.getElementById('blueArea').innerHTML = "Area: " + shortenNumberEN(DIY.blueStage.area) +
    "<br />" + (DIY.blueStage.area/DIY.totalArea*100.00).toFixed(2) + "% of world Surface Area";
    document.getElementById('blackPop').innerHTML = "Population: " + shortenNumberEN(DIY.blackStage.pop) +
    "<br />" + (DIY.blackStage.pop/DIY.totalPop*100.00).toFixed(2) + "% of world population";
  document.getElementById('blackArea').innerHTML = "Area: " + shortenNumberEN(DIY.blackStage.area) +
    "<br />" + (DIY.blackStage.area/DIY.totalArea*100.00).toFixed(2) + "% of world Surface Area";
}

// Hide or show G20 Countries Text Label
let HideOrShow_G20_Label_Flag = true;

function HideOrShow_G20_Label() {
  [...document.getElementsByClassName("state-label")].forEach(state => {
    state.style.display = (HideOrShow_G20_Label_Flag) ? 'none' : 'block';
  });
  HideOrShow_G20_Label_Flag = !HideOrShow_G20_Label_Flag;
}