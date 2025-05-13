const canvas = document.querySelector(".canvas");

function generateSketchPad(size_factor = 16) {
    canvas.innerHTML = ""; // clear previous tiles

    // canvas size
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // tile length
    const tileWidth = canvasWidth / size_factor;
    const tileHeight = canvasHeight / size_factor;

    for (let i = 0; i < size_factor * size_factor; i++) {
        let tile = document.createElement("div");
        tile.style.width = `${tileWidth}px`;
        tile.style.height = `${tileHeight}px`;

        // tile.textContent += i + 1; // commented out because the numbers are a debugging tool which helps you see where the boxes are

        tile.addEventListener("mouseenter", () => {
            tile.classList.add("hover");
        });
        tile.addEventListener("mouseleave", () => {
            setTimeout(() => {
                tile.classList.remove("hover");
            }, 7500);
        });
        canvas.appendChild(tile);
    }
}

const sizeBtn = document.querySelector(".sizeBtn");
sizeBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter a number between 1-100"));
    while (isNaN(size) || size < 1 || size > 100) {
        size = Number(prompt("Invalid. Enter a number between 1-100"));
    }

    const sketchTxt = document.querySelector("section > p");
    sketchTxt.textContent = `sketchpad : [ ${size} x ${size} ]`;

    generateSketchPad(size);
    console.log(`SIZE_FACTOR == ${size_factor}`);
});

generateSketchPad();
