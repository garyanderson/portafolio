let lastScroll = 0; // Variable para almacenar la última posición de desplazamiento

window.addEventListener("scroll", function() {
    // Obtener la posición actual de desplazamiento
    let currentScroll = window.scrollY;

    // Determinar la dirección del desplazamiento
    let direction = currentScroll > lastScroll ? "down" : "up";

    // Actualizar la última posición de desplazamiento
    lastScroll = currentScroll;

    // Obtener el elemento nav2
    let nav2 = document.getElementById('nav2') as HTMLElement | null;

    // Verificar si el elemento nav2 existe y realizar ajustes según la dirección del desplazamiento
    if (nav2) {
        if (direction === "down") {
            nav2.style.top = '-40px'; // Ajustar el estilo top a -30px cuando se desplaza hacia abajo
        } else {
            nav2.style.top = '0'; // Ajustar el estilo top a 0 cuando se desplaza hacia arriba
        }
    }
});