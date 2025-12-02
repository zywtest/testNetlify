// Define the `phonecatApp` module
var app = window.angular.module('app', []);
const author_URL = 'https://www.notion.so/Twilight-Struggle-II-Wiki-89e5242a2a7c41e2b39dd06e47f4080e';
/**
 * @description loading files
 */
window.addEventListener('load', function() {
  // startMessage();
  const cssFileArray = [
    './css/boxEvents.css',
    './css/connection.css',
    './css/defcon-box.css',
    './css/info-box.css',
    './css/military-box.css',
    './css/region.css',
    './css/score-box.css',
    './css/stats-box.css',
    './css/style.css',
  ];
  const jsFileArray = [
    './js/CardEvents.js',
    './js/CustomLabels.js',
    './js/defcon-box.js',
    './js/helper.js',
    './js/military-box.js',
    './js/VP-calculator.js',
  ];
  const staticFileArray = [
    // './source/servant_obj.js',
    // './source/CONST_VALUE.js',
  ];

  head = document.getElementsByTagName('HEAD')[0];

  cssFileArray.forEach(css => {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = css;
    head.appendChild(link);
  });
  jsFileArray.forEach(js => {
    link = document.createElement('script');
    link.src = js;
    head.appendChild(link);
  });
  staticFileArray.forEach(js => {
    link = document.createElement('script');
    link.src = js;
    head.appendChild(link);
  });
  // after all files imported, initial the result list (full list)

  // stop text selection event
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
  // stop right click menu event
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  window.scrollTo(document.body.scrollWidth, 0);
  // checkForScreenWidth();
});

/**
 * @description loading listeners
 */
function loadListeners() {
  buildListener();
  buildNeiborhoodCountryConnection().then(() => {
    US_Start();
    CN_Start();
  });
}

function US_Start() {
  setInfluenceOfThisCountry('blue', 2, 'taiwan');
  setInfluenceOfThisCountry('blue', 1, 'philippines');
  setInfluenceOfThisCountry('blue', 1, 'pakistan');
  setInfluenceOfThisCountry('blue', 1, 'turkey');
  setInfluenceOfThisCountry('blue', 1, 'south-africa');
  setInfluenceOfThisCountry('blue', 2, 'israel');
  controllThisCountry('blue', 'australia');
  controllThisCountry('blue', 'newzealand');
  controllThisCountry('blue', 'canada');
  controllThisCountry('blue', 'west-europe');
  controllThisCountry('blue', 'uk');
  controllThisCountry('blue', 'germany');
  controllThisCountry('blue', 'norway');
  controllThisCountry('blue', 'japan');
  controllThisCountry('blue', 'skorea');
}

function CN_Start() {
  setInfluenceOfThisCountry('red', 4, 'mongolia');
  setInfluenceOfThisCountry('red', 3, 'nkorea');
  setInfluenceOfThisCountry('red', 3, 'cuba');
  setInfluenceOfThisCountry('red', 2, 'laos-cambodia');
  setInfluenceOfThisCountry('red', 2, 'pakistan');
  setInfluenceOfThisCountry('red', 2, 'belarus');
  setInfluenceOfThisCountry('red', 2, 'ukraine');
  setInfluenceOfThisCountry('red', 2, 'middle-asian-states');
  setInfluenceOfThisCountry('red', 2, 'south-caucasus');
  setInfluenceOfThisCountry('red', 1, 'vietnam');
}

function checkForScreenWidth() {
  if (window.screen.width <= 1600 || window.screen.height <= 900) {

  } else {
    document.getElementsByTagName('body')[0].classList.toggle('stop-scrolling');
  }
}

function startMessage() {
  swal({
    title: "Welcome to Twilight Struggle II!",
    text: "Would you like to preview info of the game before start?",
    icon: "info",
    buttons: ["No thanks", "Sure"],
    dangerMode: true,
  })
  .then((OK) => {
    if (OK) {
      window.open(author_URL);
    } else {
      swal("Enjoy your play", { icon: "success", });
    }
  });
}