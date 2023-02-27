(() => {
    // Создание объекта Snap из SVG-элемента
    var s = Snap('.svg');

    // Получение элемента path
    var path = s.select("#svg_path");

    // Получение общей длины path
    var pathLength = Snap.path.getTotalLength(path);

    // Разбиение path на 6 сегментов
    var segmentLengths = [
        pathLength * 0.25,
        pathLength * 0.125,
        pathLength * 0.125,
        pathLength * 0.25,
        pathLength * 0.125,
        pathLength * 0.125,
    ];

    // Получение начала и конца каждого сегмента
    var segmentStartsAndEnds = [
        [0, segmentLengths[0]],
        [segmentLengths[0], segmentLengths[0] + segmentLengths[1]],
        [segmentLengths[0] + segmentLengths[1], segmentLengths[0] + segmentLengths[1] + segmentLengths[2]],
        [segmentLengths[0] + segmentLengths[1] + segmentLengths[2], segmentLengths[0] + segmentLengths[1] + segmentLengths[2] + segmentLengths[3]],
        [segmentLengths[0] + segmentLengths[1] + segmentLengths[2] + segmentLengths[3], segmentLengths[0] + segmentLengths[1] + segmentLengths[2] + segmentLengths[3] + segmentLengths[4]],
        [segmentLengths[0] + segmentLengths[1] + segmentLengths[2] + segmentLengths[3] + segmentLengths[4], pathLength]
    ];

    // Создание новых path для каждого сегмента
    for (var i = 0; i < segmentStartsAndEnds.length; i++) {
        var segment = Snap.path.getSubpath(path, segmentStartsAndEnds[i][0], segmentStartsAndEnds[i][1]);
        var segmentPath = s.path(segment);
        // Установка атрибутов каждого сегмента
        segmentPath.attr({
            id: `svg_${i + 1}`,
            fill: "none",
            stroke: "#000",
            strokeWidth: 1
        });
    }
})();