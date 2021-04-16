import { turnOnVideo, turnOffVideo, shareScreen } from './controllers/media.js'

// share screen
const shareScreenBtn = document.getElementById('share-btn');
shareScreenBtn.addEventListener('click', shareScreen);

// turn camera on/off
const video = document.getElementById('video');
const videoHandler = document.getElementById('video-handler');
const videoIcon = document.getElementById('video-icon');

let videoIsOn = false;

videoHandler.addEventListener('click', () => {
  videoIsOn = !videoIsOn;
  if (videoIsOn) {
    turnOnVideo();
    videoIcon.classList.replace('fa-video-slash', 'fa-video')
  } else {
    turnOffVideo();
    videoIcon.classList.replace('fa-video', 'fa-video-slash')
  }
});

// take a picture
const canvas = document.getElementById('canvas'); // to display the photo
const context = canvas.getContext('2d');
const snapBtn = document.getElementById('snap-btn'); // to take the pic

snapBtn.addEventListener('click', () => {
	context.drawImage(video, 0, 0, 640, 480);
});
