function checkHoverEvent() {
  for(var country in info) {
    const test = document.getElementsByClassName(country);
    console.log("test " + country); // if error happens the loop will stop
    mouseOn(test[0]);
    mouseOff(test[0]);
  }
}