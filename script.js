const container = document.querySelector(".container");

const button = document.querySelector("button");

function clearGrid() {
    let e = document.querySelector(".container");
    e.innerHTML = "";
}

// Create grid
for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", (e) => {
            e.target.style.background = 'black';
        })
        container.appendChild(square);
    }

}

button.addEventListener("click", () => {
    let perSide = prompt("How many squares to a side? (Values 100 or less)");
    clearGrid();
    // Create grid
    for (let i = 0; i < perSide; i++) {
        for (let i = 0; i < perSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = Math.floor((640 / perSide) - 2) + "px";
            square.style.width = Math.floor((640 / perSide) - 2) + "px";
            square.addEventListener("mouseenter", (e) => {
                e.target.style.background = 'black';
            })
            container.appendChild(square);
        }

}
})



