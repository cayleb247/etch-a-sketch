const container = document.querySelector(".container");

// Create grid
for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

}
