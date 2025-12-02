function goBackToHomepage() {
  window.location.href = "../../index.html";
}

/** ------------------------------------------------------------------------------
 * showInstructions functions
 * ------------------------------------------------------------------------------*/
function showInstructions() {
  swal({
    title: "Twilight Struggle Card Checker Description",
    text: "You may use this small program as a helper during a twilight struggle game.\n" +
          "As the game stage set, you may move any cards from all 3 kinds of piles to simulate the process of the game.\n" +
          "If you made any wrong choices during the initial state, please refresh to do it again",
    icon: "info",
    dangerMode: false,
  })
  .then(() => {
    swal({
      title: "Hope you can have fun here!",
      text: "For further function description, please click on the question mark next to this icon",
      icon: "success"
    });
  });
}

/** ------------------------------------------------------------------------------
 * showFunctuonDescription functions
 * ------------------------------------------------------------------------------*/
function showFunctuonDescription() {
  swal("Which kind of problem are you struggling in?", {
    buttons: {
      box: "Setting Choice Bars",
      pool: "Card Piles",
      button: "Buttons",
    },
  })
  .then((value) => {
    switch (value) {
      case "box":
        swal("For game starts from Early War or Late War, please check the offical e-book.");
        break;
      case "pool":
        swal("You may drag the cards from any piles into any other piles\n" +
             "Meanwhile, there is an remaining # of cards under the draw deck to mention you when it is the time to shuffle");
        break;
      default:
        swal("When the draw deck is empty, or is not enough for the next drawing action, it will shuffle all discarded cards back into the draw deck.\n" +
             "And when the further Stage (e.g. Mid War) comes, you may need to add those new cards in to the deck.");
    }
  });
}

function ZoomUp() {
  document.getElementsByTagName('body')[0].classList.toggle('zoom', true);
  document.getElementById('zoomDown').classList.toggle('hide', false);
  document.getElementById('zoomUp').classList.toggle('hide', true);
}

function ZoomDown() {
  document.getElementsByTagName('body')[0].classList.toggle('zoom', false);
  document.getElementById('zoomUp').classList.toggle('hide', false);
  document.getElementById('zoomDown').classList.toggle('hide', true);
}