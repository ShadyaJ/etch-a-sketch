// Create grid divs children
const gridContainer = document.querySelector('.grid-container');
createGrid(gridContainer, 16);

// Change grid size
const sizeBtn = document.querySelector('#btn-change-size');

sizeBtn.addEventListener('click', () => {
    // Prompt user to get a new grid size
    let userPrompt;
    do {
        userPrompt = prompt('What grid size would you like? (max. 100)');
        if (userPrompt === null) return;
        userPrompt = +userPrompt;
    } while (userPrompt < 1 || userPrompt > 100);

    createGrid(gridContainer, userPrompt);
});

// Clear content (refresh page)
const clearBtn = document.querySelector('#btn-clear');

clearBtn.addEventListener('click', () => {
    location.reload();
});

// Functions
function createGrid(gridContainer, size) {
    // Delete all previous grid children
    gridContainer.replaceChildren();

    // Create a brand new grid using the user prompt
    gridSize = size * size;
    for (i = 0; i < gridSize; i++){
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        const gridChild = document.createElement('div');
        gridChild.classList.add('grid-child');
        gridContainer.append(gridChild);
    }

    // Add event listener for all grid children
    const gridChildren = gridContainer.children;

    for(let child of gridChildren) {
        child.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = getRandomRGB();
        });
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
