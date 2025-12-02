/**
 * make a Link using js to access CSS files
 */
function makeCSSLink(css) {
  var cssId = css + 'CSS';
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = './css/ButtonFuntion/' + css + '.css';
  return { cssId, head, link };
}
/** we will have a rule that only one imported css style may stay at one time
  * based on this, we just find though all includes and remove any that present
  */
function removeCSS() {
  clearSearch();
  let cssID = '';
  if (document.getElementById('coldWarCSS')) {
    cssID = 'coldWarCSS';
    document.getElementById('introduction').innerHTML = "World Map (present)";
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('coldWar').innerHTML = "Set Cold War";
    document.getElementById('coldWar').style.color = "lightsteelblue";
    removeSovietAndYugoslavia();
  } else if (document.getElementById('hybridWarCSS')) {
    cssID = 'hybridWarCSS';
    document.getElementById('introduction').innerHTML = "World Map (present)";
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('hybridWar').innerHTML = "Set Current Alignment";
    document.getElementById('hybridWar').style.color = "lightsteelblue";

  } else if (document.getElementById('colonialAgeCSS')) {
    cssID = 'colonialAgeCSS';
    document.getElementById('introduction').innerHTML = "World Map (present)";
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('Colonial').innerHTML = "Set Great Britannia and France";
    document.getElementById('Colonial').style.color = "dimgrey";

  } else if (document.getElementById('WWIICSS')) {
    cssID = 'WWIICSS';
    document.getElementById('introduction').innerHTML = "World Map (present)";
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('WWII').innerHTML = "Set World War Map 1942";
    document.getElementById('WWII').style.color = "black";
    removeSovietAndYugoslavia();
    document.getElementById('ukText').innerHTML = "UK";

  } else if (document.getElementById('BritishCommonwealthCSS')) {
    cssID = 'BritishCommonwealthCSS';
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('BritishFed').innerHTML = "Set This Federation";
    document.getElementById('BritishFed').style.color = "black";

  } else if (document.getElementById('CISCSS')) {
    cssID = 'CISCSS';
    var sheet = document.getElementById(cssID);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
    document.getElementById('RussianFed').innerHTML = "Set This Federation";
    document.getElementById('RussianFed').style.color = "black";

  }
}

/**
 * Static source for Soviet Union and Yugoslavia transformation
 */
const sovietUnionList = ["russia", "ukraine", "belarus", "uzbekistan", "kazakhstan", "tajikistan", "kirgizstan", "turkmenistan", "azerbaijan", "georgia", "armenia", "latvia", "estonia", "lithuania", "moldova"];
const sovietUnionCNList = ["俄罗斯", "乌克兰", "白俄罗斯", "乌兹别克斯坦", "哈萨克斯坦", "塔吉克斯坦", "吉尔吉斯斯坦", "土库曼斯坦", "阿塞拜疆", "格鲁吉亚", "亚美尼亚", "拉脱维亚", "爱沙尼亚", "立陶宛", "摩尔多瓦"];
const yugoslaviaUnionList = ["bosnia", "croatia", "montenegro", "macedonia", "serbia", "slovenia"];
const yugoslaviaUnionCNList = ["波斯尼亚", "克罗地亚", "黑山", "马其顿", "塞尔维亚", "斯洛文尼亚"];

/* add Soviet Union and Yugoslavia when cold war topic starts*/
function addSovietAndYugoslavia() {
  sovietUnionList.forEach(union => {
    const accordionItems = [...document.getElementsByClassName(union)];
    accordionItems.forEach(accordionItem => {
      accordionItem.classList.replace(union,'soviet');
    });
  });
  yugoslaviaUnionList.forEach(union => {
    const accordionItems = [...document.getElementsByClassName(union)];
    accordionItems.forEach(accordionItem => {
      accordionItem.classList.replace(union, 'yugoslavia');
    });
  });
  document.getElementById('russiaText').innerHTML = "Soviet Union";
}

/* remove Soviet Union and Yugoslavia when cold war topic ends*/
function removeSovietAndYugoslavia() {
  let index = 0;
  sovietUnionCNList.forEach(union => {
    const accordionItems = [...document.getElementsByClassName(union)];
    accordionItems.forEach(accordionItem => {
      accordionItem.classList.replace('soviet', sovietUnionList[index]);
    });
    index++;
  });
  document.getElementById('russiaText').innerHTML = "Russia";
  index = 0;
  yugoslaviaUnionCNList.forEach(union => {
    const accordionItems = [...document.getElementsByClassName(union)];
    accordionItems.forEach(accordionItem => {
      accordionItem.classList.replace('yugoslavia', yugoslaviaUnionList[index]);
    });
    index++;
  });
  document.getElementById('russiaText').innerHTML = "Russia";
}

function closeDIYMode() {
  DIY.mode = 0;
  DIY.clearAllDIYData();
}