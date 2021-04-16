const turnOnVideo = () => {
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
      video.play();
    });
  }
};

const turnOffVideo = () => {
  const tracks = video.srcObject?.getTracks() || [];
  tracks.forEach(track => track.stop());
  video.srcObject = null;
};

const shareScreen = () => {
  return navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true
  }).catch(err => { console.error("Error:" + err); return null; });
};

export { turnOnVideo, turnOffVideo, shareScreen };
