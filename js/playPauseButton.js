const audio = document.getElementById('my-audio');
const playPauseButton = document.getElementById('play-pause-button');
const playButtonIcon = document.querySelector('.play-button__icon');
const pauseButtonIcon = document.querySelector('.pause-button__icon');

const playButtonIconUse = document.querySelector('.play-button__icon use');
const pauseButtonIconUse = document.querySelector('.pause-button__icon use');

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  audio.play();
});

var isPlaying = false;

playPauseButton.addEventListener('click', () => {
  isPlaying = true;
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.add('playing');
    playPauseButton.classList.remove('paused');
    pauseButtonIcon.classList.remove('hide');
    playButtonIcon.classList.add('hide');
  } else {
    audio.pause();
    playPauseButton.classList.add('paused');
    playPauseButton.classList.remove('playing');
    pauseButtonIcon.classList.add('hide');
    playButtonIcon.classList.remove('hide');
  }
});

function checkPlayability(event) { 
  if (isPlaying) return;
  if (event.target === playPauseButton) return;
  if (event.target === playButtonIcon) return;
  if (event.target === pauseButtonIcon) return;
  if (event.target === playButtonIconUse) return;
  if (event.target === pauseButtonIconUse) return;
  if (!event.target.classList.contains('image')) return;

  if (audio.paused) {
    audio.play();
    isPlaying = true;
    playPauseButton.classList.add('playing');
    playPauseButton.classList.remove('paused');
    pauseButtonIcon.classList.remove('hide');
    playButtonIcon.classList.add('hide');
  } 
}

document.body.addEventListener('click', checkPlayability);
