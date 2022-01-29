mouseDown = false;

function createGridCell(cell_width){
    const grid_cell = document.createElement('div');
    
    grid_cell.classList.add('grid-cell');
    
    grid_cell.addEventListener('mouseenter', (event)=>mouseDown&&event.target.classList.add('visited'));
    grid_cell.addEventListener('mousedown', (event)=>event.target.classList.add('visited'));
    
    grid_cell.style.width = cell_width+'px';
    grid_cell.style.height = cell_width+'px';

    return grid_cell
}

function createGridContainer(container_width){
    const grid_container = document.createElement('div');
    
    grid_container.classList.add('grid-container');

    grid_container.addEventListener('mousedown', ()=>mouseDown = true);
    grid_container.addEventListener('mouseup', ()=>mouseDown=false);
    
    grid_container.style.width = container_width+'px';
    grid_container.style.height = container_width+'px';

    return grid_container;
}

function createGrid(container_width, n){
    const cell_width = container_width/n;
    const grid_container = createGridContainer(container_width);
    
    for(let i=0;i<(n*n);i++) grid_container.appendChild(createGridCell(cell_width));

    return grid_container;
}

function onReset(event){
    gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(element => element.classList.remove('visited'));
}


const container_width = 512;
const n=32;

const body = document.querySelector('body');

const grid_container = createGrid(container_width, n);

body.appendChild(grid_container);

resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', onReset);