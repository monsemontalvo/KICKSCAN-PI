// js/main.js

// Variable para controlar el estado de la aplicación
let isAppStarted = false;

// 1. Lógica del Splash Screen
window.addEventListener('load', () => {
    // Esperamos 2.5 segundos para simular carga
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const app = document.getElementById('app-container');
        
        // Efecto de desvanecimiento
        splash.style.opacity = '0';
        
        // Esperamos a que termine la transición CSS (0.7s) para ocultarlo
        setTimeout(() => {
            splash.style.display = 'none';
            app.style.display = 'block'; // Mostramos la app principal
            isAppStarted = true;
        }, 700);
    }, 2500);
});

// 2. Función para cambiar entre pestañas (AR vs Filtros)
// Esta función es llamada por los botones del menú inferior en el HTML
function cambiarModo(modo) {
    const arContainer = document.getElementById('ar-container');
    const filterContainer = document.getElementById('filter-container');

    if (modo === 'ar') {
        console.log("Cambiando a modo AR");
        
        // Mostrar contenedor AR, ocultar Filtros
        arContainer.style.zIndex = "10"; // Traer al frente
        filterContainer.classList.add('hidden'); // Ocultar filtros
        
        // Detener cámara de filtros si está activa para ahorrar batería
        if (window.detenerCamaraFiltros) {
            window.detenerCamaraFiltros();
        }

        // Iniciar la lógica de MindAR (definida en ar-logic.js)
        if (window.iniciarAR) {
            window.iniciarAR();
        } else {
            console.error("Error: No se encontró la función iniciarAR. Verifica que ar-logic.js esté cargado.");
        }

    } else if (modo === 'filtros') {
        console.log("Cambiando a modo Filtros");

        // Ocultar AR (enviarlo al fondo), mostrar Filtros
        arContainer.style.zIndex = "-1"; 
        filterContainer.classList.remove('hidden'); // Mostrar div de filtros
        
        // Iniciar cámara de filtros (definida en filters.js)
        if (window.iniciarCamaraFiltros) {
            window.iniciarCamaraFiltros();
        } else {
            console.error("Error: No se encontró la función iniciarCamaraFiltros. Verifica que filters.js esté cargado.");
        }
    }
}