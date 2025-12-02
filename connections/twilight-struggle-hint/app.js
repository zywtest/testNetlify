/**
 * load other javascript and css files when page is ready
 */
window.addEventListener('load', function() {
  startWindow();
});

var withOptional = false;
var lateWarStart = false;

function startWindow() {
  swal({
    title: 'Welcome to Twilight Struggle Card Checker!',
    text: 'Which game mode you are in?',
    icon: 'info',
    buttons: {
      early: {text: 'Early War', value: 'early'},
      late: {text: 'Late War', value: 'late'},
    },
  })
  .then((value) => {
    switch(value) {
      case 'early':
        getOptionFeedback().then((Tr)=> {
          if (Tr) {
            withOptional = true;
          }
          addEarlyWarCards();
          setVisibleButtons(1);
        });
        break;
      case 'late':
        getOptionFeedback().then((Tr)=> {
          if (Tr) {
            withOptional = true;
          }
          lateWarStart = true;
          addEarlyWarCards();
          addMidWarCards();
          addLateWarCards();
          setVisibleButtons(0);
        });
        break;
      default:
        getOptionFeedback().then((Tr)=> {
          if (Tr) {
            withOptional = true;
          }
          addEarlyWarCards();
          setVisibleButtons(1);
        });
        break;
    }
  });
}

function getOptionFeedback() {
  return swal({
    title: 'Are those optional cards including in game?',
    icon: 'warning',
    buttons: {
      exclude: {text: 'False', value: false },
      include: {text: 'True',  value: true  },
    },
    dangerMode: true,
  });
}