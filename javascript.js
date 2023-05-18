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
createGrid(16);

const cells = document.querySelectorAll(".cells");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hovered");
    })
})
// Create a hover effect that changes the grids color 
// Add a button that will ask the user the amount of squares they want 