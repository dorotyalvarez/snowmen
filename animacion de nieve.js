// Arreglo para almacenar los copos de nieve
let snowflakes = [];

// Función para inicializar copos de nieve
function createSnowflakes() {
    for (let i = 0; i < 10; i++) { // Puedes ajustar la cantidad de copos aquí
        snowflakes.push({
            x: Math.random() * myCanvas.width,
            y: Math.random() * myCanvas.height / 2,
            size: Math.random() * 5, // Tamaño del copo
            speed: Math.random() * 1 + 0.02, // Velocidad de caída
        });
    }
}

// Función para animar los copos de nieve
function animateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        let flake = snowflakes[i];
        ctx.fillStyle = "white"; // Color de los copos
        ctx.fillRect(flake.x, flake.y, flake.size, flake.size); // Dibujar como cubos

        // Actualizar la posición del copo
        flake.y += flake.speed;

        // Si el copo llega al final, lo reubicamos arriba
        if (flake.y > myCanvas.height) {
            flake.y = -flake.size;
            flake.x = Math.random() * myCanvas.width;
        }
    }
}

// Llamar a la función dentro del bucle de animación
function startSnowAnimation() {
    createSnowflakes(); // Inicializar los copos
    animateSnowflakes(); // Animar los copos en cada fotograma
}