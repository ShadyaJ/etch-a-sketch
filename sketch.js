// Create grid divs children
const gridContainer = document.querySelector('.grid-container');

for (i = 0; i < 256; i++){
    const gridChild = document.createElement('div');
    gridChild.classList.add('grid-child');
    gridContainer.append(gridChild);
}

// Add event listener to color children divs
const gridChildren = gridContainer.children;

for(let child of gridChildren) {
    child.addEventListener('mouseleave', (e) => {
        e.target.classList.add('color-div');
    });
}