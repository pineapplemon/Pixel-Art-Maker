// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const size = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');

// Replace the old grid, if there was any, so that we don't get grids on grids on grids
function readyPlayerOne() {
  canvas.innerHTML = '';
}

// Creating the grid in a nested for loop
function makeGrid() {
  let tr, td;
  for (let i = 0; i < height.value; i++) {
    tr = document.createElement('tr');
    canvas.appendChild(tr);
    for (let j = 0; j < width.value; j++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

function changeColor () {
  canvas.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.nodeName === 'TD') {
      e.target.style.backgroundColor = color.value;
    }
  })
}

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(e) {
e.preventDefault();
readyPlayerOne();
makeGrid();
changeColor();
});
