(() => {
  const audio = document.getElementById('my-audio');
  const playPauseButton = document.getElementById('play-pause-button');
  const playButtonIcon = document.querySelector('.play-button__icon');
  const pauseButtonIcon = document.querySelector('.pause-button__icon');

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
  });

  var isPlaying = false;
  let userHasInteracted = false;
  var screenWidth = window.innerWidth;

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

  const checkPlayability = event => {
    screenWidth = window.innerWidth;
    if (screenWidth <= 767) return;
    if (isPlaying) return;
    if (!event.target.classList.contains('image')) return;

    if (audio.paused) {
      audio.play();
      isPlaying = true;
      playPauseButton.classList.add('playing');
      playPauseButton.classList.remove('paused');
      pauseButtonIcon.classList.remove('hide');
      playButtonIcon.classList.add('hide');
    }
  };

  document.body.addEventListener('click', checkPlayability);

  function pauseAudioOnMobileScreen() {
    screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      audio.pause();
      playPauseButton.classList.add('paused');
      playPauseButton.classList.remove('playing');
      pauseButtonIcon.classList.add('hide');
      playButtonIcon.classList.remove('hide');
    }
    return;
  }

  window.addEventListener('resize', pauseAudioOnMobileScreen);

  const handleFirstInteraction = () => {
    userHasInteracted = true;
    // Здесь вы можете выполнить любой код, который должен выполниться после первого взаимодействия пользователя со страницей.
    // Например, вы можете начать загружать дополнительные ресурсы, которые необходимы для воспроизведения аудио.
  };

  const handleScrollPlayAudio = () => {
    screenWidth = window.innerWidth;
    if (screenWidth <= 767) return;
    if (isPlaying) return;
    if (!userHasInteracted) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          playPauseButton.classList.add('playing');
          playPauseButton.classList.remove('paused');
          pauseButtonIcon.classList.remove('hide');
          playButtonIcon.classList.add('hide');
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  window.addEventListener('wheel', handleScrollPlayAudio);
  window.addEventListener('click', handleFirstInteraction);
})();
