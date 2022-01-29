function createGridCell(cell_width){
    const grid_cell = document.createElement('div');
    
    grid_cell.classList.add('grid-cell');
    
    grid_cell.addEventListener('mouseenter', (event)=>mouseDown&&onDrag(event));
    grid_cell.addEventListener('mousedown', (event)=>onDrag(event));
    
    grid_cell.style.width = cell_width+'px';
    grid_cell.style.height = cell_width+'px';

    return grid_cell
}

function createGrid(grid_container, n){
    const cell_width = grid_container.clientHeight/n;
    for(let i=0;i<(n*n);i++) grid_container.appendChild(createGridCell(cell_width));
}

function onDrag(event){
    if(penMode=='draw') event.target.style['background-color']=penColor;
    else event.target.style['background-color']='white';
}

function onReset(){
    gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(element => element.style['background-color']='white');
}

function onDrawModeToggle(){
    penMode = (penMode=='erase')?'draw':'erase';
    document.querySelector('.erase-mode').classList.toggle('active');
    document.querySelector('.draw-mode').classList.toggle('active');
}

function onShowGridToggle(event){
    gridCells = document.querySelectorAll('.grid-cell');
    event.target.classList.toggle('active');
    gridCells.forEach(element => element.classList.toggle('outline-cell'));
}


const n=32;
let penColor = 'black';
let penMode = 'draw';
let mouseDown = false;

const grid_container = document.querySelector('.grid-container');

grid_container.addEventListener('mousedown', ()=>mouseDown = true);
grid_container.addEventListener('mouseup', ()=>mouseDown=false);

createGrid(grid_container, n);

resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', onReset);

drawButton = document.querySelector('.draw-mode');
drawButton.addEventListener('click', onDrawModeToggle);

eraseButton = document.querySelector('.erase-mode');
eraseButton.addEventListener('click', onDrawModeToggle);

colorInput = document.querySelector("input[type='color']");
colorInput.addEventListener("input",(event)=>penColor = colorInput.value);

showGridButton = document.querySelector('.show-grid-button');
showGridButton.addEventListener('click', onShowGridToggle);