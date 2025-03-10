# Datos-sobre-el-espacio-y-sus-alrededores-
Un lugar donde encutres datos sobre el espacio 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agujeros Negros</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Explorando los Agujeros Negros</h1>
    </header>
    
    <section class="intro">
        <p>Los agujeros negros son regiones del espacio donde la gravedad es tan fuerte que nada puede escapar, ni siquiera la luz.</p>
        <img src="blackhole.jpg" alt="Representación de un agujero negro">
    </section>

    <section class="info">
        <h2>Características Principales</h2>
        <ul>
            <li>Formados por el colapso de estrellas masivas.</li>
            <li>Poseen un horizonte de sucesos, el punto de no retorno.</li>
            <li>Pueden crecer absorbiendo materia y fusionándose con otros.</li>
        </ul>
    </section>

    <section class="animation">
        <h2>Simulación de un Agujero Negro</h2>
        <canvas id="blackholeCanvas"></canvas>
    </section>

    <footer>
        <p>© 2025 Ciencia Espacial</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: white;
    text-align: center;
}

header {
    background-color: #111;
    padding: 20px;
}

h1 {
    margin: 0;
    font-size: 2.5em;
}

.intro {
    margin: 20px;
}

.intro img {
    width: 60%;
    max-width: 500px;
    border-radius: 10px;
}

.info {
    background-color: #222;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    background-color: #333;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
}

.animation {
    margin: 30px;
}

canvas {
    background: black;
    border: 1px solid white;
    width: 300px;
    height: 300px;
}

footer {
    background-color: #111;
    padding: 10px;
    margin-top: 20px;
}const canvas = document.getElementById("blackholeCanvas");
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
