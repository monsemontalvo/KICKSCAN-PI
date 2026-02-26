// js/main.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- BASE DE DATOS DE PAÍSES ---
const countriesData = [
    {
        id: 'mexico', index: 0, name: 'MÉXICO',
        stats: { titulos: '1 Oro', copas: '17 Part.' },
        trivia: 'El Estadio Azteca es el único estadio en el mundo que ha albergado dos finales de Copa del Mundo.',
        video: 'assets/videos/mexico.mp4'
    },
    {
        id: 'colombia', index: 1, name: 'COLOMBIA',
        stats: { titulos: '1 C. América', copas: '6 Part.' },
        trivia: 'El único gol olímpico en la historia de los mundiales fue anotado por el colombiano Marcos Coll en 1962.',
        video: 'assets/videos/colombia.mp4'
    },
    // ... agrega los demás países (Irlanda, España, Corea, Japon)
    { id: 'irlanda', index: 2, name: 'IRLANDA', stats: { titulos: '-', copas: '3' }, trivia: 'Afición ejemplar.', video: 'assets/videos/irlanda.mp4' },
    { id: 'espana', index: 3, name: 'ESPAÑA', stats: { titulos: '1 Copa', copas: '16' }, trivia: 'Ganó 2010 perdiendo el primero.', video: 'assets/videos/espana.mp4' },
    { id: 'corea', index: 4, name: 'COREA', stats: { titulos: '2 Asia', copas: '11' }, trivia: 'Semifinalista en 2002.', video: 'assets/videos/corea.mp4' },
    { id: 'japon', index: 5, name: 'JAPÓN', stats: { titulos: '4 Asia', copas: '7' }, trivia: 'Limpian estadios.', video: 'assets/videos/japon.mp4' }
];

let currentCountry = null;
let homeRenderer, homeScene, homeCamera, homeBall;

// Inicialización
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const home = document.getElementById('screen-home');
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            home.classList.remove('hidden');
            initHome3D();
        }, 700);
    }, 2500);
});

// Lógica 3D Home
function initHome3D() {
    const canvas = document.getElementById('home-3d-canvas');
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    homeScene = new THREE.Scene();
    homeCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    homeCamera.position.z = 2.5;

    homeRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    homeRenderer.setSize(width, height);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    homeScene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0x4444ff, 1);
    dirLight.position.set(2, 2, 5);
    homeScene.add(dirLight);

    const loader = new GLTFLoader(); // Usamos el loader importado
    loader.load('assets/models/low_poly_soccer_ball_or_football.glb', (gltf) => {
        homeBall = gltf.scene;
        homeBall.scale.set(0.8, 0.8, 0.8);
        homeScene.add(homeBall);
    }, undefined, (error) => {
        console.error("Error cargando balón:", error);
    });

    const animate = () => {
        if (!document.getElementById('screen-home').classList.contains('hidden')) {
            requestAnimationFrame(animate);
            if (homeBall) {
                homeBall.rotation.y += 0.005;
                homeBall.rotation.x += 0.002;
            }
            homeRenderer.render(homeScene, homeCamera);
        } else {
            requestAnimationFrame(animate);
        }
    };
    animate();
}

// --- EXPORTAR FUNCIONES A WINDOW (Crucial para que funcionen los onclick del HTML) ---

window.irAEscanear = async () => {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    if (window.iniciarAR) await window.iniciarAR();
};

window.volverAlHome = () => {
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
    if(window.detenerAR) window.detenerAR();
};

window.mostrarInfoPais = (index) => {
    const country = countriesData.find(c => c.index === index);
    if (!country) return;
    currentCountry = country;
    document.getElementById('country-name').innerText = country.name;
    document.getElementById('stat-1').innerText = country.stats.titulos;
    document.getElementById('stat-2').innerText = country.stats.copas;
    document.getElementById('country-trivia').innerText = country.trivia;
    document.getElementById('bottom-sheet').classList.add('active');
    document.getElementById('scan-guide').classList.add('hidden');
};

window.verHighlights = () => {
    if (!currentCountry) return;
    document.getElementById('bottom-sheet').classList.remove('active');
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-highlights').classList.remove('hidden');
    const video = document.getElementById('highlight-video');
    document.getElementById('hl-title').innerText = currentCountry.name;
    video.src = currentCountry.video;
    video.play();
    window.aplicarFiltroVideo('none');
};

window.cerrarHighlights = () => {
    const video = document.getElementById('highlight-video');
    video.pause();
    video.src = "";
    document.getElementById('screen-highlights').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    document.getElementById('scan-guide').classList.remove('hidden');
};

window.aplicarFiltroVideo = (filtro) => {
    const video = document.getElementById('highlight-video');
    const botones = document.querySelectorAll('.filter-btn');
    video.className = "w-full max-h-screen object-contain transition-all duration-300";
    video.classList.add(`filter-${filtro}`);
    botones.forEach(btn => {
        btn.classList.remove('bg-white', 'text-black');
        btn.classList.add('bg-white/10', 'text-white');
    });
    if (event && event.target) {
        event.target.classList.remove('bg-white/10', 'text-white');
        event.target.classList.add('bg-white', 'text-black');
    }
};