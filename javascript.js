// Create a function that produces 16x16 grid of divs 
const container = document.getElementById("container");

function createGrid(x) {
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
createGrid(24);

// Create a hover effect that changes the grids color 
const cells = document.querySelectorAll(".cells");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hovered");
    })
})

// Functionality for Clear button
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.classList.remove("hovered");
    })
})

// Functionality for Change Grid button 