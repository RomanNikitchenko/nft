(() => {
    // Функция для перезаписи SVG на новый
    function redrawSVG() {
        var screenWidth = window.innerWidth;
        var svgWidth, svgHeight, pathD;

        // Определение ширины, высоты и path для каждого экрана
        if (screenWidth <= 767) { // Для экранов шириной до 767 пикселей (мобильные)
            svgWidth = "600";
            svgHeight = "594";
            svgViewBox = "0 0 600 594";
            patStrokeWidth = "1";
            patStroke = "#000";
            pathStrokeDasharray = "36 36";
            pathD = "M300 593C134.807 593 1 460.536 1 297S134.807 1 300 1s299 132.464 299 296-133.807 296-299 296z";
        } else if (screenWidth >= 768 && screenWidth <= 1299) { // Для экранов шириной до 1529 пикселей (планшеты)
            svgWidth = "674";
            svgHeight = "354";
            svgViewBox = "0 0 1206 639";
            patStrokeWidth = "12";
            patStroke = "#CBCBCB";
            pathStrokeDasharray = "2 40";
            pathD = "M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z";
        } else if (screenWidth >= 1300) { // Для экранов шириной больше 1530 пикселей (десктопы)
            svgWidth = "1210";
            svgHeight = "639";
            svgViewBox = "0 0 1206 639";
            patStrokeWidth = "12";
            patStroke = "#CBCBCB";
            pathStrokeDasharray = "2 40";
            pathD = "M1200.05 251.826C1219.24 420.729 967.427 588.014 637.624 625.468C307.82 662.923 24.9125 556.362 5.73108 387.459C-13.4504 218.556 238.358 51.2707 568.162 13.8166C897.965 -23.6375 1180.87 82.923 1200.05 251.826Z";
        }

        // Создание нового SVG
        var s = Snap("#svg-container");
        s.attr({
            width: svgWidth,
            height: svgHeight,
            viewBox: svgViewBox,
        });

        // Создание нового path
        var path = s.select("#svg_path");
        path.attr({
            stroke: patStroke,
            'stroke-width': patStrokeWidth,
            'stroke-dasharray': pathStrokeDasharray,
            d: pathD,
        });

        // Получение общей длины path
        var pathLength = Snap.path.getTotalLength(path);

        // Разбиение path на 6 сегментов
        var segmentLengths = [
            pathLength * 0.100,
            pathLength * 0.300,
            pathLength * 0.100,
            pathLength * 0.100,
            pathLength * 0.300,
            pathLength * 0.100,
        ];

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
            var segment = Snap.path.getSubpath(path, segmentStartsAndEnds[i][0], segmentStartsAndEnds[i][1]);
            segmentPath = s.path(segment);
            // Установка атрибутов каждого сегмента
            segmentPath.attr({
                id: `svg_${i + 1}`,
                fill: "none",
            });
        }
    }

    // Вызов функции для перезаписи SVG при загрузке страницы
    redrawSVG();

    // Добавление обработчика события resize для перезаписи SVG при изменении размера экрана
    window.addEventListener('resize', redrawSVG);
})();
