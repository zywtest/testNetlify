Continents = {
  NA : [
    'mexico',
    'guatemala',
    'cuba',
    'honduras',
    'nicaragua',
    'haiti',
    'dominican',
    'costarica',
    'panama',
  ],
  SA : [
    'colombia',
    'venezuela',
    'ecuador',
    'bolivia',
    'brazil',
    'peru',
    'paraguay',
    'uruguay',
    'chile',
    'argentina',
  ],
  EU : [
    'canada',
    'uk',
    'norway',
    'sweden',
    'finland',
    'germany',
    'poland',
    'baltic-states',
    'belarus',
    'west-europe',
    'austro-hungury',
    'ukraine',
    'se-europe',
  ],
  AF : [
    'morocco',
    'algeria',
    'west-african-states',
    'saharan-states',
    'chad',
    'ivory-coast',
    'nigeria',
    'sudan',
    'ethiopia',
    'congo',
    'kenya',
    'angola',
    'zimbabwe',
    'se-african-states',
    'botswana',
    'south-africa',
  ],
  ME : [
    'libya',
    'egypt',
    'south-caucasus',
    'turkey',
    'syria-iraq',
    'israel',
    'iran',
    'saudi-arabia',
  ],
  AS : [
    'middle-asian-states',
    'mongolia',
    'nkorea',
    'afghanistan',
    'skorea',
    'japan',
    'pakistan',,
    'india',
    'burma',
    'laos-cambodia',
    'taiwan',
    'thailand',
    'vietnam',
    'philippines',
    'malaysia',
    'indonesia',
  ],
  OC : [
    'oceania-states',
    'australia',
    'newzealand',
  ]
};

Connections = {
  'USA': ['canada', 'japan', 'mexico', 'cuba', ],
  'CHINA': ['nkorea', 'taiwan', 'laos-cambodia', 'burma', 'pakistan', 'middle-asian-states', 'mongolia', ],
  'RUSSIA': ['mongolia', 'middle-asian-states', 'south-caucasus', 'ukraine', 'belarus', 'baltic-states', 'finland', ],
  'canada': ['USA', 'uk'],
  'mexico': ['USA', 'guatemala', ],
  'guatemala': ['honduras', 'mexico', ],
  'cuba': ['USA', 'haiti', 'nicaragua', ],
  'honduras': ['costarica', 'guatemala', 'nicaragua', ],
  'nicaragua': ['costarica', 'honduras', 'cuba', ],
  'haiti': ['dominican', 'cuba', ],
  'dominican': ['haiti', ],
  'costarica': ['panama', 'honduras', 'nicaragua', ],
  'panama': ['colombia', 'costarica', ],
  'colombia': ['venezuela', 'ecuador', 'panama'],
  'venezuela': ['brazil', 'colombia', ],
  'ecuador': ['peru', 'colombia', ],
  'bolivia': ['paraguay', 'peru', ],
  'brazil': ['uruguay', 'venezuela', ],
  'peru': ['chile', 'ecuador', 'bolivia', ],
  'paraguay': ['uruguay', 'bolivia', ],
  'uruguay': ['argentina', 'paraguay', 'brazil', ],
  'chile': ['argentina', 'peru', ],
  'argentina': ['chile', 'uruguay', ],
  'uk': ['west-europe', 'canada', 'norway', ],
  'norway': ['uk', 'sweden', ],
  'sweden': ['norway', 'finland', ],
  'finland': ['RUSSIA', 'sweden', ],
  'germany': ['poland', 'austro-hungury', 'west-europe', ],
  'poland': ['belarus', 'austro-hungury', 'germany', 'baltic-states', ],
  'baltic-states': ['RUSSIA', 'belarus', 'poland', ],
  'belarus': ['RUSSIA', 'ukraine', 'poland', 'baltic-states', ],
  'west-europe': ['algeria', 'morocco', 'uk', 'germany', 'se-europe', ],
  'austro-hungury': ['se-europe', 'germany', 'poland', ],
  'ukraine': ['RUSSIA', 'se-europe', 'belarus', ],
  'se-europe': ['turkey', 'west-europe', 'austro-hungury', 'ukraine', ],
  'morocco': ['west-african-states', 'west-europe', 'algeria', ],
  'algeria': ['libya', 'saharan-states', 'morocco', 'west-europe', ],
  'libya': ['egypt', 'chad', 'algeria', ],
  'egypt': ['sudan', 'libya', 'israel', ],
  'west-african-states': ['ivory-coast', 'morocco', ],
  'saharan-states': ['nigeria', 'algeria', ],
  'chad': ['sudan', 'nigeria', 'libya', ],
  'ivory-coast': ['nigeria', 'west-african-states', ],
  'nigeria': ['ivory-coast', 'saharan-states', 'chad', ],
  'sudan': ['chad', 'egypt', 'ethiopia', 'congo', ],
  'ethiopia': ['kenya', 'sudan', ],
  'congo': ['angola', 'sudan', ],
  'kenya': ['se-african-states', 'ethiopia', ],
  'angola': ['south-africa', 'congo', 'botswana', ],
  'zimbabwe': ['botswana', 'se-african-states', ],
  'se-african-states': ['zimbabwe', 'kenya', ],
  'botswana': ['south-africa', 'angola', 'zimbabwe', ],
  'south-africa': ['botswana', 'angola', ],
  'south-caucasus': ['RUSSIA', 'syria-iraq', 'turkey', ],
  'turkey': ['south-caucasus', 'syria-iraq', 'se-europe', ],
  'syria-iraq': ['iran', 'south-caucasus', 'turkey', 'israel', 'saudi-arabia', ],
  'israel': ['saudi-arabia', 'syria-iraq', 'egypt', ],
  'iran': ['pakistan', 'afghanistan', 'syria-iraq', ],
  'saudi-arabia': ['syria-iraq', 'israel', ],
  'middle-asian-states': ['CHINA', 'RUSSIA', 'afghanistan', ],
  'nkorea': ['CHINA', 'skorea', ],
  'afghanistan': ['pakistan', 'middle-asian-states', 'iran', ],
  'skorea': ['japan', 'nkorea', 'taiwan', ],
  'japan': ['USA', 'skorea', 'taiwan', ],
  'pakistan': ['CHINA', 'india', 'afghanistan','iran', ],
  'india': ['burma', 'pakistan', ],
  'burma': ['CHINA', 'laos-cambodia', 'india', ],
  'laos-cambodia': ['CHINA', 'vietnam', 'thailand', 'burma', ],
  'taiwan': ['CHINA', 'philippines', 'japan', 'skorea', ],
  'thailand': ['malaysia', 'vietnam', 'laos-cambodia', ],
  'vietnam': ['thailand', 'laos-cambodia', ],
  'philippines': ['indonesia', 'taiwan', ],
  'malaysia': ['indonesia', 'thailand', ],
  'indonesia': ['australia', 'oceania-states', 'philippines', 'malaysia', ],
  'oceania-states': ['australia', 'indonesia', ],
  'australia': ['newzealand', 'oceania-states', 'indonesia', ],
  'newzealand': ['australia', ],
}

/**
 * @description set onmouseover listener to all country name label and super power areas
 */
function buildNeiborhoodCountryConnection () {
  let hoveringBackground = [...document.getElementsByClassName('info-box-background')];
  hoveringBackground.forEach(area => {
    let countryLabel = area.parentElement.classList[0].slice(14, );
    area.onmouseover = function() {
      ToggleOnClass(countryLabel);
    };
    area.onmouseout = function() {
      ToggleOffClass(countryLabel);
    };
  });
  let hoveringText = [...document.getElementsByClassName('state-label')];
  hoveringText.forEach(text => {
    let countryLabel = text.parentElement.classList[0].slice(14, );
    text.onmouseover = function() {
      ToggleOnClass(countryLabel);
    };
    text.onmouseout = function() {
      ToggleOffClass(countryLabel);
    };
  });
  let china = [...document.getElementsByClassName('中国')];
  china.forEach(part => {
    let label = 'CHINA';
    part.onmouseover = function() {
      ToggleOnClass(label);
    };
    part.onmouseout = function() {
      ToggleOffClass(label);
    };
  });
  let russia = [...document.getElementsByClassName('俄罗斯')];
  russia.forEach(part => {
    let label = 'RUSSIA';
    part.onmouseover = function() {
      ToggleOnClass(label);
    };
    part.onmouseout = function() {
      ToggleOffClass(label);
    };
  });
  let usa = [...document.getElementsByClassName('美国')];
  usa.forEach(part => {
    let label = 'USA';
    part.onmouseover = function() {
      ToggleOnClass(label);
    };
    part.onmouseout = function() {
      ToggleOffClass(label);
    };
  });
  let superPowerLabels = [
    document.getElementById('CHINA-super-power-label'),
    document.getElementById('RUSSIA-super-power-label'),
    document.getElementById('USA-super-power-label'),
  ];
  superPowerLabels.forEach(part => {
    let label = part.id.split('-')[0];
    part.onmouseover = function() {
      ToggleOnClass(label);
    };
    part.onmouseout = function() {
      ToggleOffClass(label);
    };
  });
  return Promise.resolve();
}

/**
 * @ignore inner function to handle a country is a super power or not
 * @param {String} country Target country
 */
function isNotSuperPower(country) {
  return country === country.toLowerCase();
}

/**
 * @description toggle on the neiborHighlight class on the given label
 * @param {String} label Target label
 */
function ToggleOnClass(label) {
  Connections[label].forEach(neiborhood => {
    if (isNotSuperPower(neiborhood)) {
      let thisNeibor = document.getElementsByClassName('influence-box-' + neiborhood)[0];
      thisNeibor.children[0].classList.toggle('neiborHighlight' , true);
    }
  });
}

/**
 * @description toggle off the neiborHighlight class on the given label
 * @param {String} label Target label
 */
function ToggleOffClass(label) {
  Connections[label].forEach(neiborhood => {
    if (isNotSuperPower(neiborhood)) {
      let thisNeibor = document.getElementsByClassName('influence-box-' + neiborhood)[0];
      thisNeibor.children[0].classList.toggle('neiborHighlight' , false);
    }
  });
}