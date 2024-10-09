// Arreglo para almacenar los copos de nieve
let snowflakes = [];
let totalSnowflakes = 0; // Contador de copos de nieve
// Función para inicializar copos de nieve

function createSnowflakes() {
    if (totalSnowflakes < 100) {
        snowflakes.push({
            x: Math.random() * myCanvas.width,
            y: -Math.random() * myCanvas.height / 2,
            size: Math.random() * 5 + 2, // Tamaño aleatorio entre 2 y 7
            speed: Math.random() * 1 + 0.5, // Velocidad aleatoria entre 0.5 y 1.5
        });
        totalSnowflakes++; // Incrementar el contador
    }
}

// Función para animar los copos de nieve
function drawSnowflake(x, y, size) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + size * Math.cos((i * Math.PI) / 3), y + size * Math.sin((i * Math.PI) / 3));
        ctx.lineTo(x + (size / 2) * Math.cos((i * Math.PI) / 3 + Math.PI / 6), y + (size / 2) * Math.sin((i * Math.PI) / 3 + Math.PI / 6));
    }
    ctx.closePath();
    ctx.fill();
}

function animateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        let flake = snowflakes[i];

        // Dibujar el copo de nieve
        drawSnowflake(flake.x, flake.y, flake.size);

        // Actualizar la posición del copo
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y * 0.05) * 0.4; // Desplazamiento lateral

        // Si el copo llega al final, lo reubicamos arriba
        if (flake.y > myCanvas.height) {
            flake.y = -flake.size;
            flake.x = Math.random() * myCanvas.width;
        }
    }
}

function startSnowAnimation() {
    createSnowflakes(); // Inicializar los copos
    animateSnowflakes(); // Animar los copos en cada fotograma
}

// Llamar a la función dentro del bucle de animación
function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); // Limpiar el canvas
    startSnowAnimation(); // Llamar a la animación
    requestAnimationFrame(animate); // Llamar a la siguiente iteración
}

animate(); // Iniciar la animación