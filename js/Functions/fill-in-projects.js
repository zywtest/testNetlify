const container = document.getElementById('personal-proj');

const worldMap = document.createElement('div');
worldMap.id = 'World-Map';
worldMap.classList.add('topic-container');
worldMap.innerHTML =
'<a href="./connections/world-map/index.html"><h5>A functional World Map!</h5></a>' +
'<img class="demo-images" src="./Source/pic/world-map-demo.jpg" alt="world-map-demo"/>' +
'<p>The demo page is shown above</p>' +
'<p>Current Applied Feature:<br/>' +
' - Search Country in the search bar on the top left, the corresponding area will become blinking in the map.<br/><br/>' +
'  - Hovering any country in the map area, the corresponding area will become green and information of that country will show on the top message box.<br/><br/>' +
'  - DIY mode for user:<br/>' +
'1. First, click on the DIY button, then after the text for DIY button become "END DIY".<br/>' +
'2. Then, user can click on any country on the map, it will set the zone for the whole country in red/blue/black/no-color(change per click).<br/>' +
'3. Finally, a small stat counter will record information of your alliance right below.<br/>' +
'4. **Clicking END DIY or any "set" button will close the DIY Mode and clear the DIY status**</p>';

const TwilightStruggleII = document.createElement('div');
TwilightStruggleII.id = 'Twilight-Struggle-II';
TwilightStruggleII.classList.add('topic-container');
TwilightStruggleII.innerHTML =
'<a href="./connections/twilight-struggle/index.html"><h5>An Imitation Project for Twilight Struggle</h5></a>' +
'<img class="demo-images" src="./Source/pic/twilight-struggle-II-demo.jpg" alt="twilight-struggle-demo"/>' +
'<p>The demo page is shown above</p>' +
'<p>Project Developing....<br/>';

container.appendChild(worldMap);
container.appendChild(TwilightStruggleII);