// Create a function that produces 16x16 grid of divs 
const container = document.getElementById("container");

function createGrid(x) {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++){
            const cell = document.createElement("div");

            container.appendChild(cell)
            cell.classList.add("cells")
        }
    }
}

// initial grid 
createGrid(16);

// Create a hover effect that changes the grids color 
function hoverEffect() {
const cells = document.querySelectorAll(".cells");
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hovered");
    })
})
}

hoverEffect();

// Functionality for Clear button
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cells");
    clearBtn.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.classList.remove("hovered");
    })
})
})

// Functionality for Change Grid button 
const gridNum = document.querySelector(".gridNum");

gridNum.addEventListener("click", () => {
    const gridSizeInput = prompt("Enter a grid size number!");
    const gridSize = parseInt(gridSizeInput);

    if (gridSize > 0) {
        createGrid(gridSize);
        hoverEffect();
    } else {
        alert("Please enter a valid number");
    }
})