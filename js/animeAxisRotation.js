(() => {
    const btnMove = document.querySelector('.btnMove');
    
    let disabled = false;
    let limit = 1;

    //anime.js
    let path1 = anime.path('.svg #svg_1');
    let path2 = anime.path('.svg #svg_2');
    let path3 = anime.path('.svg #svg_3');
    let path4 = anime.path('.svg #svg_4');
    let path5 = anime.path('.svg #svg_5');
    let path6 = anime.path('.svg #svg_6');

    let motionMave1 = anime({
        targets: ".target-1",
        translateX: path1('x'),
        translateY: path1('y'),
        autoplay: false,
    });

    let motionMave2 = anime({
        targets: ".target-2",
        translateX: path2('x'),
        translateY: path2('y'),
        autoplay: false,
    });

    let motionMave3 = anime({
        targets: ".target-3",
        translateX: path3('x'),
        translateY: path3('y'),
        autoplay: false,
    });

    let motionMave4 = anime({
        targets: ".target-4",
        translateX: path4('x'),
        translateY: path4('y'),
        autoplay: false,
    });

    let motionMave5 = anime({
        targets: ".target-5",
        translateX: path5('x'),
        translateY: path5('y'),
        autoplay: false,
    });

    let motionMave6 = anime({
        targets: ".target-6",
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
            complete: function (a) {
                disabled = false;
            }
        });
        motionMove.play();
    }

    const byCondition = () => {
        if (limit === 1) {
            changePath(motionMave1, ".target-2", path1);
            changePath(motionMave2, ".target-3", path2);
            changePath(motionMave3, ".target-4", path3);
            changePath(motionMave4, ".target-5", path4);
            changePath(motionMave5, ".target-6", path5);
            changePath(motionMave6, ".target-1", path6);
        }
        if (limit === 2) {
            changePath(motionMave1, ".target-3", path1);
            changePath(motionMave2, ".target-4", path2);
            changePath(motionMave3, ".target-5", path3);
            changePath(motionMave4, ".target-6", path4);
            changePath(motionMave5, ".target-1", path5);
            changePath(motionMave6, ".target-2", path6);
        }
        if (limit === 3) {
            changePath(motionMave1, ".target-4", path1);
            changePath(motionMave2, ".target-5", path2);
            changePath(motionMave3, ".target-6", path3);
            changePath(motionMave4, ".target-1", path4);
            changePath(motionMave5, ".target-2", path5);
            changePath(motionMave6, ".target-3", path6);
        }
        if (limit === 4) {
            changePath(motionMave1, ".target-5", path1);
            changePath(motionMave2, ".target-6", path2);
            changePath(motionMave3, ".target-1", path3);
            changePath(motionMave4, ".target-2", path4);
            changePath(motionMave5, ".target-3", path5);
            changePath(motionMave6, ".target-4", path6);
        }
        if (limit === 5) {
            changePath(motionMave1, ".target-6", path1);
            changePath(motionMave2, ".target-1", path2);
            changePath(motionMave3, ".target-2", path3);
            changePath(motionMave4, ".target-3", path4);
            changePath(motionMave5, ".target-4", path5);
            changePath(motionMave6, ".target-5", path6);
        }
        if (limit === 6) {
            changePath(motionMave1, ".target-1", path1);
            changePath(motionMave2, ".target-2", path2);
            changePath(motionMave3, ".target-3", path3);
            changePath(motionMave4, ".target-4", path4);
            changePath(motionMave5, ".target-5", path5);
            changePath(motionMave6, ".target-6", path6);
        }
    }
    btnMove.addEventListener('click', e => {
        e.preventDefault();

        if (disabled) return;

        if (e.target.tagName !== 'BUTTON') return;

        disabled = true;

        byCondition();

        if (limit === 6) {
            limit = 1;
        } else {
            limit += 1;
        }
    });
})();