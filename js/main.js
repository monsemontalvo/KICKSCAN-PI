import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- BASE DE DATOS DE PAÍSES ---
const countriesData = [
    { id: 'mexico', index: 0, name: 'MÉXICO', color: '#106337', stats: { titulos: '1 Oro', copas: '17 Part.' }, trivia: 'El Estadio Azteca es el único estadio en el mundo que ha albergado dos finales de Copa del Mundo.', video: 'assets/videos/mexico.mp4' },
    { id: 'colombia', index: 1, name: 'COLOMBIA', color: '#FCD116', stats: { titulos: '1 C. América', copas: '6 Part.' }, trivia: 'El único gol olímpico en la historia de los mundiales fue anotado por el colombiano Marcos Coll en 1962.', video: 'assets/videos/colombia.mp4' },
    { id: 'irlanda', index: 2, name: 'IRLANDA', color: '#169B62', stats: { titulos: '-', copas: '3' }, trivia: 'Afición ejemplar.', video: 'assets/videos/irlanda.mp4' },
    { id: 'espana', index: 3, name: 'ESPAÑA', color: '#AA151B', stats: { titulos: '1 Copa', copas: '16' }, trivia: 'Ganó 2010 perdiendo el primero.', video: 'assets/videos/espana.mp4' },
    { id: 'corea', index: 4, name: 'COREA', color: '#0047A0', stats: { titulos: '2 Asia', copas: '11' }, trivia: 'Semifinalista en 2002.', video: 'assets/videos/corea.mp4' },
    { id: 'japon', index: 5, name: 'JAPÓN', color: '#BC002D', stats: { titulos: '4 Asia', copas: '7' }, trivia: 'Limpian estadios.', video: 'assets/videos/japon.mp4' }
];

let currentCountry = null;
let homeRenderer, homeScene, homeCamera, homeBall;
let carouselGroup; // Grupo para rotar todo el carrusel

// --- INICIALIZACIÓN ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const home = document.getElementById('screen-home');
        if (splash) splash.style.opacity = '0';
        setTimeout(() => {
            if (splash) splash.style.display = 'none';
            if (home) home.classList.remove('hidden');
            initHome3D();
        }, 700);
    }, 2500);
});

// --- HELPER: Crear Textura desde Canvas (Para las tarjetas) ---
function createCardTexture(text, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 350;
    const ctx = canvas.getContext('2d');

    // Fondo degradado
    const gradient = ctx.createLinearGradient(0, 0, 256, 350);
    gradient.addColorStop(0, colorHex);
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 350);

    // Borde
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, 246, 340);

    // Texto País
    ctx.fillStyle = 'white';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 175);

    // Icono simulado (círculo)
    ctx.beginPath();
    ctx.arc(128, 80, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
}

// --- LÓGICA 3D HOME ---
function initHome3D() {
    const canvas = document.getElementById('home-3d-canvas');
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    homeScene = new THREE.Scene();
    
    // Cámara
    homeCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    homeCamera.position.set(0, 2.5, 7); // Posición alejada para ver todo
    homeCamera.lookAt(0, 0.5, 0);

    homeRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    homeRenderer.setSize(width, height);
    homeRenderer.setPixelRatio(window.devicePixelRatio);

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    homeScene.add(ambientLight);
    const dirLightMain = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLightMain.position.set(5, 10, 7);
    homeScene.add(dirLightMain);
    const rimLight = new THREE.DirectionalLight(0x4444ff, 0.8);
    rimLight.position.set(-5, -5, -5);
    homeScene.add(rimLight);

    // Suelo de cuadrícula (Opcional, si quieres mantener el estilo Tron)
    const gridHelper = new THREE.GridHelper(30, 30, 0x555555, 0x222222);
    homeScene.add(gridHelper);

    // 1. CARGAR BALÓN (CENTRAL)
    const loader = new GLTFLoader();
    loader.load('assets/models/low_poly_soccer_ball_or_football.glb', (gltf) => {
        homeBall = gltf.scene;
        // Ajustes para que sea el centro de atención
        homeBall.position.set(0, 0.5, 2.5); 
        homeBall.scale.set(8.5, 8.5, 8.5); 
        homeScene.add(homeBall);
    }, undefined, (error) => console.error(error));


    // 2. CREAR CARRUSEL DE TARJETAS 3D
    carouselGroup = new THREE.Group();
    homeScene.add(carouselGroup);

    const radius = 3.5; // Radio del círculo alrededor del balón
    const cardGeometry = new THREE.PlaneGeometry(1.4, 2.0); // Tamaño de tarjeta

    countriesData.forEach((country, i) => {
        // Calcular ángulo para distribuir en círculo
        const angle = (i / countriesData.length) * Math.PI * 2;
        
        // Crear textura dinámica
        const texture = createCardTexture(country.name, country.color);
        const material = new THREE.MeshBasicMaterial({ 
            map: texture, 
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9
        });

        const card = new THREE.Mesh(cardGeometry, material);

        // Posicionamiento Polar (X, Z)
        card.position.x = Math.cos(angle) * radius;
        card.position.z = Math.sin(angle) * radius;
        card.position.y = 1.0; // Altura igual al balón

        // Orientar tarjeta hacia afuera (o hacia el centro si prefieres)
        // card.lookAt(0, 1.0, 0); // Mirar al centro
        // Para que miren siempre a cámara, rotamos igual que el grupo pero invertido, 
        // pero lo más fácil para carrusel es que miren hacia afuera + corrección.
        card.rotation.y = -angle + Math.PI / 2; 

        carouselGroup.add(card);
    });

    // 3. ANIMACIÓN
    const animate = () => {
        if (!document.getElementById('screen-home').classList.contains('hidden')) {
            requestAnimationFrame(animate);

            // Rotar balón
            if (homeBall) homeBall.rotation.y += 0.005;

            // Rotar Carrusel COMPLETO
            if (carouselGroup) carouselGroup.rotation.y += 0.002;

            homeRenderer.render(homeScene, homeCamera);
        } else {
            requestAnimationFrame(animate);
        }
    };
    animate();
}

// --- FUNCIONES GLOBALES (Sin cambios) ---
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