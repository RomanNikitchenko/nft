(() => {
  const images = document.querySelectorAll('.box img');

  let currentIndex = 0;
  let isAnimating = false;
  let screenWidth = window.innerWidth;

  const scaleTarget = () => {
    screenWidth = window.innerWidth;

    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.remove('small', 'medium', 'large');
    }

    if (screenWidth <= 767) {
      return;
      // const classes = ['large', 'medium', 'medium', 'small', 'medium', 'medium'];
      // const imagesCount = images.length;
      // for (let i = 0; i < imagesCount; i++) {
      //   const index = (i + currentIndex) % imagesCount;
      //   images[index].classList.add(classes[i]);
      // }
    } else if (screenWidth >= 768 && screenWidth <= 1299) {
      const classes = ['medium', 'large', 'large', 'medium', 'small', 'small'];
      const imagesCount = images.length;
      for (let i = 0; i < imagesCount; i += 1) {
        const index = (i + currentIndex) % imagesCount;
        images[index].classList.add(classes[i]);
      }
    } else if (screenWidth >= 1300) {
      const classes = ['medium', 'large', 'large', 'medium', 'small', 'small'];
      const imagesCount = images.length;
      for (let i = 0; i < imagesCount; i += 1) {
        const index = (i + currentIndex) % imagesCount;
        images[index].classList.add(classes[i]);
      }
    }
  };

  scaleTarget();

  window.addEventListener('resize', scaleTarget);

  const handleImageClick = e => {
    if (!e.target.classList.contains('image')) return;

    if (isAnimating) return;

    isAnimating = true;

    currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;

    scaleTarget();

    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  };

  document.body.addEventListener('click', handleImageClick);
  window.addEventListener('touchstart', handleImageClick);

  const scrollScaleTarget = () => {
    if (isAnimating) return;

    isAnimating = true;

    currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;

    scaleTarget();

    setTimeout(() => {
      isAnimating = false;
    }, 1300);
  };

  window.addEventListener('wheel', scrollScaleTarget);
})();
