const list = document.querySelector('.list');
const items = document.querySelectorAll('.list .box');
const centralImage = document.querySelectorAll('.central-image');
const btn = document.querySelector('.btn');

let limit = 1;
let disabled = false;

//navigation menu
btn.addEventListener('click', e => {
  e.preventDefault();

  // не больше одного клика в 500 м/с
  if (disabled) return;
  disabled = true;
  setTimeout(() => (disabled = false), 600);
  if (e.target.tagName !== 'BUTTON') return;

  if (limit === 1) {
    items.forEach(item => {
      if (item.classList.contains('motion-pause')) {
        item.classList.remove('motion-pause');
      }
    });
  }

  if (limit > 1) toggleAnimation();

  if (limit < 7) {
    limit += 1;
  } else {
    limit = 2;
  }
});

function toggleAnimation() {
  items.forEach(item => {
    if (limit === 2) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
    }
    if (limit === 3) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
    }
    if (limit === 4) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
    }
    if (limit === 5) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
    }
    if (limit === 6) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
    }
    if (limit === 7) {
      if (item.classList.contains('box-1')) {
        item.classList.replace(`motion-move-6`, `motion-move-1`);
      }
      if (item.classList.contains('box-2')) {
        item.classList.replace(`motion-move-1`, `motion-move-2`);
      }
      if (item.classList.contains('box-3')) {
        item.classList.replace(`motion-move-2`, `motion-move-3`);
      }
      if (item.classList.contains('box-4')) {
        item.classList.replace(`motion-move-3`, `motion-move-4`);
      }
      if (item.classList.contains('box-5')) {
        item.classList.replace(`motion-move-4`, `motion-move-5`);
      }
      if (item.classList.contains('box-6')) {
        item.classList.replace(`motion-move-5`, `motion-move-6`);
      }
    }
  });
}
