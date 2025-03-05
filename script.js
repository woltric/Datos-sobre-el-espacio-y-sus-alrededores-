const canvas = document.getElementById("blackholeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let angle = 0;

function drawBlackHole() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar disco de acreción
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.fillStyle = "darkblue";
    ctx.fill();

    // Dibujar horizonte de sucesos
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // Dibujar partículas orbitando
    for (let i = 0; i < 10; i++) {
        let x = 150 + Math.cos(angle + i) * 70;
        let y = 150 + Math.sin(angle + i) * 70;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    angle += 0.05;
    requestAnimationFrame(drawBlackHole);
}

drawBlackHole();
