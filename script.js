// create 16x16 square divs
let flexbox;
let i;
const container = document.getElementById('container');

for (flexbox = 1; flexbox < 17; flexbox += 1) {
  const box = document.createElement('div');
  box.classList.add('outer-box');
  for (i = 1; i < 17; i += 1) {
    const div = document.createElement('div');
    div.classList.add('inner-box');
    div.textContent = `${flexbox}.${i}`;
    box.appendChild(div);
  }
  container.appendChild(box);
}

// hover change
container.addEventListener('mouseover', (e) => {
  const target = e.target;
  console.log(target);
  target.classList.toggle('hover')

});
