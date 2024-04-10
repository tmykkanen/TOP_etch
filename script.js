// create 16x16 square divs
let flexbox;
let i;
const container = document.getElementById('container');
const gridSizeBtn = document.getElementById('gridSize');

const drawGrid = () => {
  let size;

  while (true) {
    size = +prompt('What size grid?');
    if (size <= 100) {
      break;
    } else {
      alert('Please enter a value 100 or lower.');
    }
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (flexbox = 1; flexbox < (size + 1); flexbox += 1) {
    const box = document.createElement('div');
    box.classList.add('outer-box');
    for (i = 1; i < (size + 1); i += 1) {
      const div = document.createElement('div');
      div.classList.add('inner-box');
      box.appendChild(div);
    }
    container.appendChild(box);
  }
};

// hover change
container.addEventListener('mouseover', (e) => {
  const { target } = e;
  target.classList.add('draw');
});

// grid size
gridSizeBtn.addEventListener('click', drawGrid);

window.addEventListener('load', drawGrid);
