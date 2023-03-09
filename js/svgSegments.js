(() => {
  // Функция для перезаписи SVG на новый
  function redrawSVG() {
    var screenWidth = window.innerWidth;
    var svgWidth, svgHeight, pathD;

    // Определение ширины, высоты и path для каждого экрана
    if (screenWidth <= 767) {
      // Для экранов шириной до 767 пикселей (мобильные)
      svgWidth = '1013';
      svgHeight = '592';
      svgViewBox = '0 0 1013 576';
      patStrokeWidth = '10';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '1 36';
      pathD =
        'M514.515 578C391.146 574.269 262.602 539.538 164.916 483.516C67.2088 427.482 0.499939 350.231 0.499939 261.5C0.499939 204.743 43.7141 137.812 125.829 86.012C207.921 34.2269 328.821 -2.37927 483.987 1.4999C639.162 5.37928 771.195 45.8596 864.418 105.395C957.654 164.938 1012 243.487 1012 323.5C1012 403.474 954.576 469.112 863.592 513.773C772.62 558.427 648.205 582.044 514.515 578Z';
    } else if (screenWidth >= 768 && screenWidth <= 1299) {
      // Для экранов шириной до 1529 пикселей (планшеты)
      svgWidth = '674';
      svgHeight = '354';
      svgViewBox = '0 0 1206 639';
      patStrokeWidth = '10';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '1 36';
      pathD =
        'M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z';
    } else if (screenWidth >= 1300) {
      // Для экранов шириной больше 1530 пикселей (десктопы)
      svgWidth = '1210';
      svgHeight = '639';
      svgViewBox = '0 0 1206 639';
      patStrokeWidth = '10';
      patStroke = '#CBCBCB';
      pathStrokeDasharray = '1 36';
      pathD =
        'M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z';
    }

    // Создание нового SVG
    var s = Snap('#svg-container');
    s.attr({
      width: svgWidth,
      height: svgHeight,
      viewBox: svgViewBox,
    });

    // Создание нового path
    var path = s.select('#svg_path');
    path.attr({
      stroke: patStroke,
      'stroke-width': patStrokeWidth,
      'stroke-dasharray': pathStrokeDasharray,
      d: pathD,
    });

    // Получение общей длины path
    var pathLength = Snap.path.getTotalLength(path);

    // Разбиение path на 6 сегментов
    var segmentLengths = [];

    if (screenWidth <= 767) {
      // Для экранов шириной до 767 пикселей (мобильные)
      segmentLengths = [
        pathLength * 0.07,
        pathLength * 0.36,
        pathLength * 0.07,
        pathLength * 0.07,
        pathLength * 0.36,
        pathLength * 0.07,
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
    var segmentStartsAndEnds = [];
    var segmentStart = 0;
    for (var i = 0; i < segmentLengths.length; i++) {
      var segmentEnd = segmentStart + segmentLengths[i];
      segmentStartsAndEnds.push([segmentStart, segmentEnd]);
      segmentStart = segmentEnd;
    }

    // Создание новых path для каждого сегмента
    for (var i = 0; i < segmentStartsAndEnds.length; i++) {
      // Получаем элемент path текущего сегмента, если он уже существует
      var segmentPath = s.select(`#svg_${i + 1}`);
      // Если элемент path уже существует, то удаляем его
      if (segmentPath) {
        segmentPath.remove();
      }
      // Создаем новый элемент path для текущего сегмента
      var segment = Snap.path.getSubpath(
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
