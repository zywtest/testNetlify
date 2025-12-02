const musicContainer = document.getElementById('music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const singleBtn = document.getElementById('single');
const queueBtn = document.getElementById('queue');
const repeatBtn = document.getElementById('repeat');
const randomBtn = document.getElementById('random');
let playPattern = 0;

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['渡辺剛 - 宮永照', '渡辺剛 - 驚愕', '渡辺剛 - 一巡先を見る者',];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

/**
 * @description Update song details
 * @param {*} song audio source in the array
 */
function loadSong(song) {
  title.innerText = song;
  audio.src = `./Source/music/${song}.mp3`;
	cover.src = `./Source/cover/${song}.jpg`;
	cover.onerror= () => {
		cover.src = './Source/icon/me.jpg';
	};
}

/**
 * @description Play song
 */
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

/**
 * @description Pause song
 */
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

/**
 * @description Play the previous song
 */
function prevSong() {
  songIndex--;
  songIndex %= songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

/**
 * @description Play the next song
 */
function nextSong() {
  songIndex++;
	songIndex %= songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

/**
 * @description Update progress bar
 * @param {*} e audio element
 */
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

/**
 * @description Set progress bar
 * @param {*} e audio element
 */
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

/**
 * @description Get duration & currentTime for Time of song
 * @param {*} e audio element
 */
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	}

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	}

	// define seconds duration
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
};

/**
 * @description Set the play pattern button's css class
 * @param {*} pattern button click on
 */
function setPlayPattern(HTMLelement) {
	resetAll();
	if (HTMLelement) {
		HTMLelement.classList.toggle('on');
	}
	function resetAll() {
		singleBtn.classList.toggle('on', false);
		queueBtn.classList.toggle('on', false);
		repeatBtn.classList.toggle('on', false);
		randomBtn.classList.toggle('on', false);
	}
}

/**
 * @description Update play pattern, pattern interval [0, 3]
 * @param {*} pattern pattern that the button owns
 */
function updatePlayPattern(pattern) {
	playPattern = pattern;
}

/**
 * @description Function to deside how to play next song when press prev button
 */
function playPrev() {
	// When playPattern is 0 (single play button is active), do not change song
	if (playPattern === 0) {

	} else {
		// When playPattern is 1 (queue play button is active), do not change song index, just call nextSong() when if statement ends
		if (playPattern === 1) {

		}
		// When playPattern is 2 (repeat play button is active), push forward song index by 1, then index will decrease by calling prevSong()
		else if (playPattern === 2) {
			songIndex++;
		}
		// When playPattern is 3 (repeat play button is active), push back song index by [0, total song number - 2], then call prevSong()
		else if (playPattern === 3) {
			songIndex = songIndex - Math.round(Math.random() * (songs.length - 2));
		}
		prevSong();
	}
}

/**
 * @description Function to deside how to play next song when press next button or current song end
 */
function playNext() {
	// When playPattern is 0 (single play button is active), do not change song
	if (playPattern === 0) {
		audio.currentTime = 0;
	} else {
		// When playPattern is 1 (queue play button is active), do not change song index, just call nextSong() when if statement ends
		if (playPattern === 1) {

		}
		// When playPattern is 2 (repeat play button is active), push back song index by 1, then index will increase by calling nextSong()
		else if (playPattern === 2) {
			songIndex--;
		}
		// When playPattern is 3 (repeat play button is active), push forward song index by [0, total song number - 2], then call nextSong()
		else if (playPattern === 3) {
			songIndex = songIndex + Math.round(Math.random() * (songs.length - 2));
		}
		nextSong();
	}
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);

// Playing pattern
singleBtn.addEventListener('click', () => {
	setPlayPattern(singleBtn);
	updatePlayPattern(0);
});
queueBtn.addEventListener('click', () => {
	setPlayPattern(queueBtn);
	updatePlayPattern(1);
});
repeatBtn.addEventListener('click', () => {
	setPlayPattern(repeatBtn);
	updatePlayPattern(2);
});
randomBtn.addEventListener('click', () => {
	setPlayPattern(randomBtn);
	updatePlayPattern(3);
});
setPlayPattern(singleBtn);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', () => {
	if (playPattern === 0) {
		audio.currentTime = 0;
		pauseSong();
	} else {
		playNext();
	}
});

// Time of song
audio.addEventListener('timeupdate', DurTime);