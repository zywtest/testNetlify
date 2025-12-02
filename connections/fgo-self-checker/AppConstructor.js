const servantIDList = ['002', '003', '004', '008', '011', '014', '018', '284', '285', '286', '287', '288', '289', '290', '291', '292', '293', '294', '312', '321', ];
// const servantIDList = ['002', '003', '284'];
/**
 * load other javascript and css files when page is ready
 */
window.addEventListener('load', function() {
    const cssFileArray = [
        './css/lib/FontAwesome/css/all.css',
        './css/accordion.css',
        './css/effectTargetIcon.css',
        './css/result-list.css',
        './css/search-condition.css',
        './css/servant-info.css',
        './css/style.css',
        './css/device-fit.css',
    ];
    const importantJSArray = [
        './source/DB.js',
        './js/AttributeDefine/servantInfo.js',
        './js/AttributeDefine/searchBar.js',
        './js/AttributeDefine/resultList.js',
        './js/AttributeDefine/saiRinStatus.js',
    ]
    const jsFileArray = [
        './js/lib/angular/angular.js',
        './js/CommonFunction.js',
    ];

    head = document.getElementsByTagName('HEAD')[0];

    cssFileArray.forEach(css => {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = css;
        head.appendChild(link);
    });
    servantIDList.forEach(i => {
        link = document.createElement('script');
        link.src = './js/Servents/No' + i + '.js';
        head.appendChild(link);
    })
    importantJSArray.forEach(js => {
        link = document.createElement('script');
        link.src = js;
        head.appendChild(link);
    });
    jsFileArray.forEach(js => {
        link = document.createElement('script');
        link.src = js;
        head.appendChild(link);
    });
    // after all files imported, initial the result list (full list)
    buildResultList();
});

/**
 * Create an image, as this sample image below:
 *
 *  <img  src='source/servantIcon/Servant(xxx).jpg'
 *        id='000'
 *        onclick='goToServantInfo(this)
 *        class='servant-icon'
 *        alt='servant-icon'
 *  />
 *
 * then add this image into the result list container
 */
function buildResultList() {
    var resultList = document.querySelector('.result-list');
    servantIDList.forEach(ID => {
        let img = document.createElement('img');
        img.src = './source/servantIcon/Servant' + ID + '.jpg';
        img.classList.add('servant-icon');
        img.alt = 'servant-icon-' + ID;
        img.addEventListener('click', () => {
            goToServantInfo(ID);
        });
        resultList.appendChild(img);
    });
}