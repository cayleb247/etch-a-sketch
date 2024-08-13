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
            e.target.style.background = randomColor();
        })
        container.appendChild(square);
    }

}

const randomColor = () => {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
}

button.addEventListener("click", () => {
    let perSide = prompt("How many squares to a side? (Values 100 or less)");

    if (perSide <= 100) {
        clearGrid();
            // Create grid
        for (let i = 0; i < perSide; i++) {
            for (let i = 0; i < perSide; i++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style.height = (800 / perSide) + "px";
                square.style.width = (800 / perSide) + "px";
                square.addEventListener("mouseenter", (e) => {
                    e.target.style.background = randomColor();
                })
                container.appendChild(square);
            }
    }
    
} else {
    alert("Invalid input :(");
}
})