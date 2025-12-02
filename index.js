window.addEventListener('load', function() {
  const cssFileArray = [
    './css/style.css',
    './css/main.css',
    './css/music-player.css',
    './css/fit-device.css',
  ];
  const jsFileArray = [
    './js/Functions/change-theme.js',
    './js/Functions/fill-in-projects.js',
    './js/Functions/music-player.js',
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
});