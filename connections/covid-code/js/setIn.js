// const html2canvas = require("./lib/html2canvas");

function DPR() {
  if(window.devicePixelRatio && window.devicePixelRatio > 1) {
    return window.devicePixelRatio;
  }
  return 1;
}

function drawCanvas() {
  setTimeout(() => {
    const dom = document.querySelector('.report');
    const box = window.getComputedStyle(dom);

    const width = parseInt(box.width, 10);
    const height = parseInt(box.height, 10);

    const scaleBy = this.DPR();


    const canvas = document.createElement('canvas');

    canvas.width = width * scaleBy;
    canvas.height = height * scaleBy;

    canvas.style.width = `${width}px`;
    canvas.style.width = `${height}px`;

    const context = canvas.getContext('2d');

    context.scale(scaleBy, scaleBy);

    html2canvas(dom, {canvas, background: '#ffffff'}).then((imgDom) => {
      let url = imgDom.toDataURL();
      console.log(url);
    })
  }, 2000);
}

// html2canvas(document.body).then(function(canvas) {
//   document.body.appendChild(canvas);
// });
async function shot() {
  let ele = document.getElementById('result-photo');
  let canvas = document.createElement('canvas');
  /* Iphone device dpi setting */
  canvas.width = 1170;
  canvas.height = 2532;
  await html2canvas(ele, {canvas, backgound: '#ffffff'}).then(() =>{
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img = canvas.toDataURL('image/PNG');
    this.debugBase64(img);
  });
}
// open this canvas image into a new window
function debugBase64(base64URL) {
   /* testing output*/
  // var target = $id('outputImg');
  // target.src = base64URL;
  // openDialog();

  /* current output*/
  // var win = window.open('', '_blank');
  // win.document.write(
  //   '<img src="' + base64URL + '">'
  // );

  /* IOS solution */
  var a = document.createElement('a');
  a.href = base64URL;
  a.download = getCurrentDateTime() + '_IOS.png';
  a.click();
  a.remove();
};

function openDialog() {
  var dialog = $id('result-dialog');
  dialog.style.display = 'block';
}
function closeDialog() {
  var dialog = $id('result-dialog');
  dialog.style.display = 'none';
}

/**
 * generate function for fast mode
 */
function faGenerate() {
  // Key from input bar
  const placeInput = $id('fast-generate-place-name');
  const registerAreaInput = $id('fast-generate-zone-name');
  // Set in
  generateHelper(undefined, placeInput.value, undefined, registerAreaInput.value,
                 undefined, undefined, undefined,
                 undefined, undefined);
}
/**
 * generate function for rail train mode
 */
function raGenerate() {
  const selectBar = $id('rail-train-route-select');
  const inOutFlag = $('input[name="rail-mode-radio-button"]:checked');
  const placeInput = $(`input[id="rail-train-route-${selectBar.value}-input"]`);
  const transformPlace = DalianRailTrainList[selectBar.value][inOutFlag.value][placeInput.value].place;
  const registerArea = '辽宁省大连市' + DalianRailTrainList[selectBar.value][inOutFlag.value][placeInput.value].area + AreaUnit;
  // Set in
  generateHelper(undefined, transformPlace, undefined, registerArea,
                 undefined, undefined, undefined,
                 undefined, undefined);
}
/**
 * generate function for detail mode
 */
function deGenerate() {

   // Key from input bar
   const currentTimeInput = $id('detail-generate-current-time');
   const placeInput = $id('detail-generate-place-name');
   const registerDateInput = $id('detail-generate-register-date-time');
   const registerAreaInput = $id('detail-generate-zone-name');
   const ownerNameInput = $id('detail-generate-owner-name');
   const ownerIdPreInput = $id('detail-generate-owner-id-pre');
   const ownerIdPostInput = $id('detail-generate-owner-id-post');
   const samplingDateInput = $id('detail-generate-sampling-date-time');
   const resultDateInput = $id('detail-generate-result-date-time');
   generateHelper(currentTimeInput.value, placeInput.value, registerDateInput.value, registerAreaInput.value,
                  ownerNameInput.value, ownerIdPreInput.value, ownerIdPostInput.value,
                  samplingDateInput.value, resultDateInput.value);
}

/**
 * Setting in all given input strings and generate the photo
 * @param {String} currentTimeInput current time input value
 * @param {String} placeInput target place input value
 * @param {String} registerDateInput register date input value
 * @param {String} registerAreaInput register area input value
 * @param {String} ownerNameInput owner name input value
 * @param {String} ownerIdPreInput owner id first 4 number input value
 * @param {String} ownerIdPostInput owner id last 4 number input value
 * @param {String} samplingDateInput sampling date input value
 * @param {String} resultDateInput result date input value
 */
function generateHelper(currentTimeInput, placeInput, registerDateInput, registerAreaInput,
                        ownerNameInput, ownerIdPreInput, ownerIdPostInput,
                        samplingDateInput, resultDateInput ) {
  // HTML Demonstrate Bar
  const currTime = $id('cover-top-time');
  const place = $id('register-building');
  const registerTime = $id('register-time');
  const registerArea = $id('register-area');
  const ownerName = $id('owner-name');
  const ownerId = $id('owner-id');
  const samplingTime = $id('covid-sampling-time-input-value');
  const testResultTime = $id('test-result-time-value');
  // Set in
  currTime.innerHTML =   nullHandler(currentTimeInput, getCurrentHour_Minute());
  place.innerHTML =      nullHandler(placeInput, '场所名');
  registerTime.innerHTML = nullHandler(
                            registerDateInput,
                            (getCurrentDateTime()),
                            ((nullHandler(registerDateInput, '').substring(0, 16)).replace('T', ' ') + ':' + randomSeconds())
                          );
  registerArea.innerHTML = nullHandler(registerAreaInput, '辽宁省大连市沙河口区');
  ownerName.innerHTML = nullHandler(ownerNameInput, '*洋', ('*' + nullHandler(ownerNameInput, '').substring(1)));
  ownerId.innerHTML = nullHandler(ownerIdPreInput, '2102') + '**********' + nullHandler(ownerIdPostInput, '2652');
  samplingTime.innerHTML = nullHandler(
                            samplingDateInput,
                            (generateDayInThePast(2) + ' ' + randomTime()),
                            ((nullHandler(samplingDateInput, '').substring(0, 16)).replace('T', ' ') + ':' + randomSeconds())
                          );
  testResultTime.innerHTML = nullHandler(
                              resultDateInput,
                              (generateDayInThePast(1) + ' ' + randomTimeAllDay()),
                              ((nullHandler(resultDateInput, '').substring(0, 16)).replace('T', ' ') + ':' + randomSeconds())
                            );
  // generate photo
  const resultPhoto = $id('result-photo');
  resultPhoto.style.display = 'block';
  shot().then(() => {
    resultPhoto.style.display = 'none';
  });
}