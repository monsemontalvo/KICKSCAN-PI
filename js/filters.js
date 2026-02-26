// js/filters.js

let videoStream = null;
let animationFrameId = null;
const videoElement = document.getElementById('video-source');
const canvasElement = document.getElementById('filter-canvas');
const ctx = canvasElement ? canvasElement.getContext('2d', { willReadFrequently: true }) : null;

// Estado actual del filtro
let currentFilter = 'normal';

// Inicia la cámara para la sección de filtros
window.iniciarCamaraFiltros = async () => {
    if (videoStream) return; // Ya iniciada

    try {
        // Pedimos acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: "environment", // Intenta usar cámara trasera
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }, 
            audio: false 
        });
        
        videoElement.srcObject = stream;
        videoStream = stream;
        
        // Esperar a que el video tenga metadata para ajustar el canvas
        videoElement.onloadedmetadata = () => {
            canvasElement.width = window.innerWidth;
            canvasElement.height = window.innerHeight;
            // Iniciar el ciclo de dibujo
            dibujarFiltros();
        };

    } catch (err) {
        console.error("Error acceso cámara filtros:", err);
        alert("Error al acceder a la cámara para filtros.");
    }
};

// Detiene la cámara (útil al cambiar de pestaña)
window.detenerCamaraFiltros = () => {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
};

// Cambia el filtro activo (llamado por los botones)
window.aplicarFiltro = (filtro) => {
    currentFilter = filtro;
    console.log("Filtro aplicado:", filtro);
};

// Función principal de renderizado (se ejecuta 60 veces por segundo)
function dibujarFiltros() {
    if (!videoElement || !ctx) return;

    // Asegurar tamaño del canvas
    if (canvasElement.width !== window.innerWidth) {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
    }

    // 1. Dibujar el frame del video original en el canvas
    ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

    // 2. Obtener los datos de los píxeles para manipularlos
    // (Solo necesario para efectos complejos, para simples usamos composite operations)
    
    // --- LÓGICA DE FILTROS ---
    
    if (currentFilter === 'pixel') {
        // Efecto Pixelado (Simplificado para rendimiento)
        const size = 20; // Tamaño del pixel
        const w = canvasElement.width;
        const h = canvasElement.height;
        
        // Desactivar suavizado para que se vea "blocky"
        ctx.imageSmoothingEnabled = false;
        
        // Dibujar pequeño y luego estirar
        ctx.drawImage(canvasElement, 0, 0, w, h, 0, 0, w / size, h / size);
        ctx.drawImage(canvasElement, 0, 0, w / size, h / size, 0, 0, w, h);
    } 
    else if (currentFilter === 'termico') {
        // Simulación Térmica (Inversión + Color)
        const imgData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
            // Convertir a escala de grises
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            // Mapa de calor falso: Rojo alto, Azul bajo
            data[i] = avg * 2;     // Rojo
            data[i + 1] = 0;       // Verde
            data[i + 2] = 255 - avg; // Azul
        }
        ctx.putImageData(imgData, 0, 0);
    }
    else if (currentFilter === 'ruido') {
        // Efecto TV Vieja / Ruido
        const w = canvasElement.width;
        const h = canvasElement.height;
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
            // Añadir ruido aleatorio
            const noise = (Math.random() - 0.5) * 50;
            data[i] += noise;
            data[i + 1] += noise;
            data[i + 2] += noise;
        }
        ctx.putImageData(imgData, 0, 0);
    }

    // Solicitar el siguiente frame
    animationFrameId = requestAnimationFrame(dibujarFiltros);
}