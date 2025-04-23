const canvas = document.querySelector("#canvas");
const CANVAS_SIZE = 16;
const SIZE_FACTOR = 16; // change it so it recives input from webpage

for (let i = 0; i < CANVAS_SIZE * SIZE_FACTOR; i++) {
    let tile = document.createElement("div");
    // tile.textContent += i + 1;
    tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
    });
    tile.addEventListener("mouseleave", () => {
        setTimeout(() => {
            tile.classList.remove("hover");
        }, 5000);
    });
    canvas.appendChild(tile);
}
