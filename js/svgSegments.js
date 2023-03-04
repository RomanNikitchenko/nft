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
        } else if (screenWidth >= 768 && screenWidth <= 1529) { // Для экранов шириной до 1529 пикселей (планшеты)
            svgWidth = "664";
            svgHeight = "354";
            svgViewBox = "0 0 1198 627";
            patStrokeWidth = "12";
            patStroke = "#CBCBCB";
            pathStrokeDasharray = "1 40";
            pathD = "M1195.56 245.882C1205.12 330.051 1147.16 413.944 1045.43 481.524C943.73 549.088 798.407 600.252 633.567 618.972C468.728 637.692 315.632 620.418 201.37 577.38C87.0809 534.331 11.7864 465.571 2.22789 381.403C-7.33066 297.234 50.6277 213.341 152.354 145.761C254.055 78.1973 399.378 27.0334 564.218 8.31341C729.057 -10.4066 882.153 6.86738 996.415 49.9053C1110.7 92.9537 1186 161.714 1195.56 245.882Z";
        } else if (screenWidth >= 1530) { // Для экранов шириной больше 1530 пикселей (десктопы)
            svgWidth = "1198";
            svgHeight = "637";
            svgViewBox = "0 0 1198 627";
            patStrokeWidth = "12";
            patStroke = "#CBCBCB";
            pathStrokeDasharray = "1 40";
            pathD = "M1195.56 245.882C1205.12 330.051 1147.16 413.944 1045.43 481.524C943.73 549.088 798.407 600.252 633.567 618.972C468.728 637.692 315.632 620.418 201.37 577.38C87.0809 534.331 11.7864 465.571 2.22789 381.403C-7.33066 297.234 50.6277 213.341 152.354 145.761C254.055 78.1973 399.378 27.0334 564.218 8.31341C729.057 -10.4066 882.153 6.86738 996.415 49.9053C1110.7 92.9537 1186 161.714 1195.56 245.882Z";
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
