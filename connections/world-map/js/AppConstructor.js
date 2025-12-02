/**
 * Grand constructor when web page is ready
 * Make some inner function calls for value initialization in different js files
 */
function AppConstructor() {
  let StayInPage = checkDeviceWidth();
  if(StayInPage) {
    makeSearchHintList();
  }
}

/**
 * Build in the option list in search bar when the webpage is loaded
 * Type in the country/area you want to seach, the full name in English & Chinese will show up
 * Then you can click on the hint option to finish the full input to do the seach
 */
var relativeHintList = {};
function makeSearchHintList() {
  // Create the list element:
  var list = document.getElementById('defaultList');
  for(var country in info) {
    // soviet union and yugoslavia is not in the search list
    if(country != "soviet" &&  country != "yugoslavia") {
      relativeHintList[country] = info[country].DemonstrateName + " " + info[country].DemonstrateName_CN;

      var item = document.createElement('option');
      item.value = relativeHintList[country];
      list.appendChild(item);
    }
  }
}

/**
 * When the page is loaded, we first check the users screen is large enough
 * If not, alert a dialog to let the user to choose
 *
 * If cancel is chosen, redirect to "https://"
 * Else, alert another dialog
 */
function checkDeviceWidth() {

  if(window.screen.availWidth < 1680) {
    swal("This webpage is designed for only PC-size screens\nSmartphones may have terrible experience, are you still willing to use?\n"
      + "After press 'Cancel', you will be redirected to developer's home page.", {
      buttons: {
        cancel: "Cancel",
        sure: {
          text: "Sure",
          value: "catch",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
          swal("WOW!", "Well, hope you may find some fun here, champion.", "success");
          break;
        default:
          window.open("../../index.html");
          break;
      }
    });
  } else {
    return true;
  }
}
