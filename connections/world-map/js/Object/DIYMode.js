class DIYMode {
  /******
   * Static variables in DIY mode only
   * Value initialization was set in AppConstructor.js
   ******/
  constructor() {
    /**
    * DIY mode flag
    * 0 => off
    * 1 => on
    */
    this.mode = 0;
    /**
     * colorList for all countries
     *
     * colorList.length => number of countries
     * colorList[country] = colorMode => [0..3]
     */
    this.colorList = {};
    this.totalArea = 0;
    this.totalPop = 0;
    for(var country in info) {
      if(country != 'antarctica' && country != 'soviet' && country != 'yugoslavia') {
        this.totalPop += parseInt(info[country].Population);
        this.totalArea += parseInt(info[country].SquareArea);
        this.colorList[country] = 0;
      }
    };
    this.redStage = { pop: 0, area: 0};
    this.blueStage = {pop: 0, area: 0};
    this.blackStage = {pop: 0, area: 0};
  }
  /**
   * Switch the mode flag, if success, change the HTML text
   */
  start() {
    this.mode = (this.mode + 1)%2;
    if (this.mode == 1) {
      document.getElementById("DIY").innerHTML = "END DIY";
    }
  }
  /**
   * Add on the information of the country into one stage
   * @param {*} countryClass The country class the user tabbed
   * @param {*} color The color that will be filled
   */
  addThisCountryIntoStage(countryClass, color) {
    if (color == 'red') {
      this.redStage.pop += parseInt(info[countryClass].Population);
      this.redStage.area += parseInt(info[countryClass].SquareArea);
    } else if (color == 'blue') {
      this.blueStage.pop += parseInt(info[countryClass].Population);
      this.blueStage.area += parseInt(info[countryClass].SquareArea);
    } else {
      this.blackStage.pop += parseInt(info[countryClass].Population);
      this.blackStage.area += parseInt(info[countryClass].SquareArea);
    }
  }
  /**
   * Remove the information of the country from one stage
   * @param {*} countryClass The country class the user tabbed
   * @param {*} color The color that will be filled
   */
  removeThisCountryFromStage(countryClass, color) {
    if (color == 'red') {
      this.redStage.pop -= parseInt(info[countryClass].Population);
      this.redStage.area -= parseInt(info[countryClass].SquareArea);
    } else if (color == 'blue') {
      this.blueStage.pop -= parseInt(info[countryClass].Population);
      this.blueStage.area -= parseInt(info[countryClass].SquareArea);
    } else {
      this.blackStage.pop -= parseInt(info[countryClass].Population);
      this.blackStage.area -= parseInt(info[countryClass].SquareArea);
    }
  }
  /**
   * Reset the SVG with 'red'/'blue'/'black' classes
   * Reset the stage information
   * Reset the color list
   */
  clearAllDIYData() {
    document.getElementById("DIY").innerHTML = "DIY";
    this.redStage = { pop: 0, area: 0};
    this.blueStage = {pop: 0, area: 0};
    this.blackStage = {pop: 0, area: 0};
    for(var country in DIY.colorList) {
      this.colorList[country] = 0;
      const accordionItems = [...document.getElementsByClassName(country)];
      accordionItems.forEach(accordionItem => {
        accordionItem.classList.remove('red');
        accordionItem.classList.remove('blue');
        accordionItem.classList.remove('black');
      });
    };
    bindingIntoHTML();
  }
}