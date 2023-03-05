const audio = document.getElementById('my-audio');
const playPauseButton = document.getElementById('play-pause-button');
const playButtonIcon = document.querySelector('.play-button__icon');
const pauseButtonIcon = document.querySelector('.pause-button__icon');

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  audio.play();
});

playPauseButton.addEventListener('click', () => {
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
