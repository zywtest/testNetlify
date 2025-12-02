function mouseOn(obj){
  const accordionItems = [...document.getElementsByClassName(obj.classList[1])];

  accordionItems.forEach(accordionItem => {
    accordionItem.classList.add('mouseover');
  });
  const country = info[obj.classList[1]];
  document.getElementById('instruction').innerHTML =  "";
  document.getElementById('instruction').innerHTML += "Mouse On Region: " + country.DemonstrateName + " " + country.DemonstrateName_CN
                                                  + "<img style='height: 24px; width: 60px; margin: 1px, 1px, 0, 1px;' class='flag-icon'"
                                                  + "src='./source/4x3/" + country.CountryFlag + ".svg' alt='"
                                                  + country.DemonstrateName + " flag'>"
                                                  + "<br />Capital: " + country.Capital + " " + country.Capital_CN
                                                  + "<br />Area: " + shortenNumberEN(country.SquareArea) + " km² => "
                                                  + shortenNumberCN(country.SquareArea) + " 平方公里"
                                                  + "<br />Population: " + shortenNumberEN(country.Population) + "  => "
                                                  + shortenNumberCN(country.Population);
  document.getElementById('instruction').backgroundColor = obj.style.fill;
}

function mouseOff(obj) {
  const accordionItems = [...document.getElementsByClassName(obj.classList[obj.classList.length-1])];

  accordionItems.forEach(accordionItem => {
    accordionItem.classList.remove('mouseover');
  });
  document.getElementById('instruction').innerHTML = "Set Cursor on area of map to show the name of that country";
  document.getElementById('instruction').backgroundColor = "black";
}