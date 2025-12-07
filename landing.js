const noBtn = document.getElementById("no-btn");

let size = 1;
let offset = 0;

noBtn.addEventListener("mouseover", () => {
    // make it shrink
    size *= 0.85;
    noBtn.style.transform = `scale(${size})`;

    // move randomly around the screen
    offset += 60;
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noBtn.style.position = "relative";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // if it gets too small, hide it
    if (size < 0.25) {
        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
    }
});
