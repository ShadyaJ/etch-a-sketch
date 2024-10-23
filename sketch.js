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

    // Delete all previous grid children
    gridContainer.replaceChildren();

    // Create a brand new grid using the user prompt
    gridSize = userPrompt * userPrompt;
    for (i = 0; i < gridSize; i++){
        gridContainer.style.gridTemplateColumns = `repeat(${userPrompt}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${userPrompt}, 1fr)`;
        
        const gridChild = document.createElement('div');
        gridChild.classList.add('grid-child');
        gridContainer.append(gridChild);
    }

    const gridChildren = gridContainer.children;

    for(let child of gridChildren) {
        child.addEventListener('mouseleave', (e) => {
            e.target.classList.add('color-div');
        });
    }
});

// Clear content (refresh page)
const clearBtn = document.querySelector('#btn-clear');

clearBtn.addEventListener('click', () => {
    location.reload();
});
