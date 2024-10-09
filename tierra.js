// Crear un degradado para simular la tierra
function drawGround() {
    // Crear un degradado lineal
    const gradient = ctx.createLinearGradient(0, myCanvas.height / 2, 0, myCanvas.height);

    // Definir los colores del degradado
    gradient.addColorStop(0, "saddlebrown"); // Color superior (marrón)
    gradient.addColorStop(1, "forestgreen"); // Color inferior (verde)

    // Establecer el estilo de relleno a nuestro degradado
    ctx.fillStyle = gradient;

    // Dibujar el rectángulo que representa la tierra
    ctx.fillRect(0, myCanvas.height / 2, myCanvas.width, myCanvas.height / 2);
}

function drawRealisticHouse() {
    // Establecer ancho de línea
    ctx.lineWidth = 2;

    // Muro de la casa
    ctx.fillStyle = "#D3BDA6"; // Color claro para el muro
    ctx.fillRect(40, 160, 200, 150); // x, y, ancho, alto
    ctx.strokeRect(40, 160, 200, 160); // Contorno del muro

    // Techo
    ctx.fillStyle = "#A0522D"; // Color del techo
    ctx.beginPath();
    ctx.moveTo(40, 160); // Esquina izquierda del muro
    ctx.lineTo(140, 80); // Punta del techo
    ctx.lineTo(240, 160); // Esquina derecha del muro
    ctx.closePath();
    ctx.fill(); // Rellenar el techo
    ctx.stroke(); // Dibujar el contorno del techo

    // Ventanas
    ctx.fillStyle = "#87CEEB"; // Color azul claro para las ventanas
    ctx.fillRect(45, 200, 50, 40); // Ventana izquierda
    ctx.fillRect(185, 200, 50, 40); // Ventana derecha

    // Contornos de las ventanas
    ctx.strokeStyle = "black";
    ctx.strokeRect(45, 200, 50, 40); // Contorno de la ventana izquierda
    ctx.strokeRect(185, 200, 50, 40); // Contorno de la ventana derecha

    // Puerta
    ctx.fillStyle = "#8B4513"; // Color marrón para la puerta
    ctx.fillRect(115, 230, 50, 70); // x, y, ancho, alto
    ctx.strokeRect(115, 230, 50, 70); // Contorno de la puerta

    // Manija de la puerta
    ctx.fillStyle = "gold"; // Color de la manija
    ctx.beginPath();
    ctx.arc(155, 255, 5, 0, Math.PI * 2); // Manija de la puerta
    ctx.fill();
}

// Llama a la función drawGround en tu función de animación
function startSnowAnimation() {
    drawGround(); // Dibujar la tierra
    createSnowflakes(); // Inicializar los copos
    animateSnowflakes(); // Animar los copos en cada fotograma
}