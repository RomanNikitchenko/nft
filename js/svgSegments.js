(() => {
  // Функция для перезаписи SVG на новый
  function redrawSVG() {
    let screenWidth = window.innerWidth;
    let svgWidth, svgHeight, pathD;

    // Определение ширины, высоты и path для каждого экрана
    if (screenWidth <= 767) {
      // Для экранов шириной до 767 пикселей (мобильные)
      svgWidth = '634';
      svgHeight = '416';
      svgViewBox = '0 0 634 410';
      patStrokeWidth = '3.5';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '0.4 16';
      pathD =
        'm317,409c-174.58564,0 -316,-91.29282 -316,-204c0,-112.70718 141.41436,-204 316,-204c174.58564,0 316,91.29282 316,204c0,112.70718 -141.41436,204 -316,204z';
    } else if (screenWidth >= 768 && screenWidth <= 1299) {
      // Для экранов шириной до 1529 пикселей (планшеты)
      svgWidth = '674';
      svgHeight = '354';
      svgViewBox = '0 0 1206 639';
      patStrokeWidth = '6';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '1 36';
      pathD =
        'M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z';
    } else if (screenWidth >= 1300) {
      // Для экранов шириной больше 1530 пикселей (десктопы)
      svgWidth = '1210';
      svgHeight = '639';
      svgViewBox = '0 0 1206 639';
      patStrokeWidth = '6';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '1 36';
      pathD =
        'M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z';
    }

    // Создание нового SVG
    let s = Snap('#svg-container');
    s.attr({
      width: svgWidth,
      height: svgHeight,
      viewBox: svgViewBox,
    });

    // Создание нового path
    let path = s.select('#svg_path');
    path.attr({
      stroke: patStroke,
      'stroke-width': patStrokeWidth,
      'stroke-dasharray': pathStrokeDasharray,
      d: pathD,
    });

    // Получение общей длины path
    let pathLength = Snap.path.getTotalLength(path);

    // Разбиение path на 6 сегментов
    let segmentLengths = [];

    if (screenWidth <= 767) {
      // Для экранов шириной до 767 пикселей (мобильные)
      segmentLengths = [
        pathLength * 0.1,
        pathLength * 0.3,
        pathLength * 0.1,
        pathLength * 0.1,
        pathLength * 0.3,
        pathLength * 0.1,
      ];
    } else if (screenWidth >= 768 && screenWidth <= 1299) {
      // Для экранов шириной до 1529 пикселей (планшеты)
      segmentLengths = [
        pathLength * 0.15,
        pathLength * 0.2,
        pathLength * 0.15,
        pathLength * 0.15,
        pathLength * 0.2,
        pathLength * 0.15,
      ];
    } else if (screenWidth >= 1300) {
      // Для экранов шириной больше 1530 пикселей (десктопы)
      segmentLengths = [
        pathLength * 0.165,
        pathLength * 0.17,
        pathLength * 0.165,
        pathLength * 0.165,
        pathLength * 0.17,
        pathLength * 0.165,
      ];
    }

    // Получение начала и конца каждого сегмента
    let segmentStartsAndEnds = [];
    let segmentStart = 0;
    for (let i = 0; i < segmentLengths.length; i += 1) {
      let segmentEnd = segmentStart + segmentLengths[i];
      segmentStartsAndEnds.push([segmentStart, segmentEnd]);
      segmentStart = segmentEnd;
    }

    // Создание новых path для каждого сегмента
    for (let i = 0; i < segmentStartsAndEnds.length; i += 1) {
      // Получаем элемент path текущего сегмента, если он уже существует
      let segmentPath = s.select(`#svg_${i + 1}`);
      // Если элемент path уже существует, то удаляем его
      if (segmentPath) {
        segmentPath.remove();
      }
      // Создаем новый элемент path для текущего сегмента
      let segment = Snap.path.getSubpath(
        path,
        segmentStartsAndEnds[i][0],
        segmentStartsAndEnds[i][1],
      );
      segmentPath = s.path(segment);
      // Установка атрибутов каждого сегмента
      segmentPath.attr({
        id: `svg_${i + 1}`,
        fill: 'none',
      });
    }
  }

  // Вызов функции для перезаписи SVG при загрузке страницы
  redrawSVG();

  // Добавление обработчика события resize для перезаписи SVG при изменении размера экрана
  window.addEventListener('resize', redrawSVG);
})();
