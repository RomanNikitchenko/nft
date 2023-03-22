// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll('[data-id]');
//     const totalImages = images.length;
//     let loadedImages = 0;

//     const progressBar = document.querySelector('.progress-bar');
//     const progressBarLine = document.querySelector('.progress-bar .loading-line');

//     images.forEach((image) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", image.getAttribute("data-src"), true);
//         xhr.responseType = "arraybuffer";

//         xhr.addEventListener("progress", (evt) => {
//             if (evt.lengthComputable) {
//                 const percentComplete = (loadedImages + evt.loaded / evt.total) / totalImages;
//                 progressBarLine.style.width = percentComplete * 100 + "%";
//             }
//         }, false);

//         xhr.onload = function () {
//             loadedImages += 1;
//             if (this.status === 200) {
//                 const blob = new Blob([this.response], { type: image.getAttribute("data-type") });
//                 const url = URL.createObjectURL(blob);
//                 image.src = url;
//             }

//             if (loadedImages === totalImages) {
//                 setTimeout(function () {
//                     progressBar.style.opacity = "0";
//                 }, 250);
//             }
//         };

//         xhr.send();
//     });
// });
