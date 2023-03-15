import { scrollScaleTarget } from './scaleTarget.js';
import { switchImages } from './galleryImageSwitcher.js';

var disabled = false;
var limit = 1;

//anime.js
var path1 = anime.path('#svg_1');
var path2 = anime.path('#svg_2');
var path3 = anime.path('#svg_3');
var path4 = anime.path('#svg_4');
var path5 = anime.path('#svg_5');
var path6 = anime.path('#svg_6');

var motionMave1 = anime({
  targets: '.target-1',
  translateX: path1('x'),
  translateY: path1('y'),
  autoplay: false,
});

var motionMave2 = anime({
  targets: '.target-2',
  translateX: path2('x'),
  translateY: path2('y'),
  autoplay: false,
});

var motionMave3 = anime({
  targets: '.target-3',
  translateX: path3('x'),
  translateY: path3('y'),
  autoplay: false,
});

var motionMave4 = anime({
  targets: '.target-4',
  translateX: path4('x'),
  translateY: path4('y'),
  autoplay: false,
});

var motionMave5 = anime({
  targets: '.target-5',
  translateX: path5('x'),
  translateY: path5('y'),
  autoplay: false,
});

var motionMave6 = anime({
  targets: '.target-6',
  translateX: path6('x'),
  translateY: path6('y'),
  autoplay: false,
});

const changePath = (motionMove, target, path) => {
  motionMove = anime({
    targets: target,
    translateX: path('x'),
    translateY: path('y'),
    duration: 1000,
    direction: 'reverse',
    easing: 'easeInOutSine',
    autoplay: false,
  });
  motionMove.play();
};

const screenWidthchangePath = (motionMove, target, path) => {
  motionMove = anime({
    targets: target,
    translateX: path('x'),
    translateY: path('y'),
    direction: 'reverse',
    autoplay: false,
  });
};

const byCondition = callback => {
  const targetClasses = [
    '.target-2',
    '.target-3',
    '.target-4',
    '.target-5',
    '.target-6',
    '.target-1',
  ];
  for (var i = 0; i < targetClasses.length; i++) {
    if (limit === i + 1) {
      callback(motionMave1, targetClasses[i], path1);
      callback(motionMave2, targetClasses[(i + 1) % 6], path2);
      callback(motionMave3, targetClasses[(i + 2) % 6], path3);
      callback(motionMave4, targetClasses[(i + 3) % 6], path4);
      callback(motionMave5, targetClasses[(i + 4) % 6], path5);
      callback(motionMave6, targetClasses[(i + 5) % 6], path6);
      break;
    }
  }
};

const toggleElementsAnimation = e => {
  if (!e.target.classList.contains('image')) return;

  if (disabled) return;

  disabled = true;

  byCondition(changePath);

  limit = limit === 6 ? 1 : limit + 1;

  setTimeout(() => {
    disabled = false;
  }, 1000);
};

document.body.addEventListener('click', toggleElementsAnimation);
window.addEventListener('touchstart', toggleElementsAnimation);

const screenWidthReset = () => {
  path1 = anime.path('#svg_1');
  path2 = anime.path('#svg_2');
  path3 = anime.path('#svg_3');
  path4 = anime.path('#svg_4');
  path5 = anime.path('#svg_5');
  path6 = anime.path('#svg_6');

  byCondition(screenWidthchangePath);
};

// Добавление обработчика события resize для перезаписи path от 1 до 6 при изменении размера экрана
window.addEventListener('resize', screenWidthReset);

const scrollAnime = () => {
  if (disabled) return;

  disabled = true;

  byCondition(changePath);

  limit = limit === 6 ? 1 : limit + 1;

  setTimeout(() => {
    disabled = false;
  }, 1000);
};

const scrollOnWheel = e => {
  if (disabled) return;
  if (e.deltaY !== 0) {
    scrollAnime();
    scrollScaleTarget();
    switchImages();
  }
};

document.body.onwheel = scrollOnWheel;
