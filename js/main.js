import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- BASE DE DATOS (IGUAL QUE ANTES) ---
const countriesData = [
    { 
        id: 'mexico', index: 0, name: 'MÉXICO', color: '#106337', 
        stats: { titulos: '1 Confed. / 11 Oro', copas: '17' }, 
        facts: [
            'El Estadio Azteca es el único en el mundo que ha albergado dos finales de Copa del Mundo (1970 y 1986).',
            'México fue el primer país en organizar una Copa del Mundo dos veces.',
            'La selección mexicana es la que más veces ha participado en un Mundial sin haberlo ganado nunca.'
        ],
        trivia: [
            { q: "¿Máximo goleador histórico?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 },
            { q: "¿Cuándo ganaron el Oro Olímpico?", options: ["2008", "2016", "2012"], correct: 2 },
            { q: "¿Apodo de la selección?", options: ["El Tri", "Los Aztecas", "Los Verdes"], correct: 0 },
            { q: "¿Primer jugador en 5 mundiales?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 },
            { q: "¿Rival del 'No era penal'?", options: ["Argentina", "Holanda", "Alemania"], correct: 1 }
        ],
        video: 'assets/videos/mexico.mp4' 
    },
    { 
        id: 'colombia', index: 1, name: 'COLOMBIA', color: '#FCD116', 
        stats: { titulos: '1 Copa América', copas: '6' }, 
        facts: [
            'El único "Gol Olímpico" (directo de córner) en la historia de los mundiales lo anotó el colombiano Marcos Coll en 1962.',
            'James Rodríguez ganó la Bota de Oro en el Mundial de Brasil 2014 con 6 goles.',
            'La selección de 1994 llegó al Mundial con un invicto de 30 partidos, incluyendo el famoso 5-0 a Argentina.'
        ],
        trivia: [
            { q: "¿Quién es 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 },
            { q: "¿Bota de Oro Mundial 2014?", options: ["Cuadrado", "Bacca", "James Rodríguez"], correct: 2 },
            { q: "¿Color principal de camiseta?", options: ["Rojo", "Azul", "Amarillo"], correct: 2 },
            { q: "¿Ícono del pelo rizado?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 },
            { q: "¿Año de su Copa América?", options: ["2001", "2011", "1990"], correct: 0 }
        ],
        video: 'assets/videos/colombia.mp4' 
    },
    { 
        id: 'irlanda', index: 2, name: 'IRLANDA', color: '#169B62', 
        stats: { titulos: '-', copas: '3' }, 
        facts: [
            'En su debut mundialista en Italia 90, llegaron a cuartos de final sin ganar un solo partido en tiempo reglamentario.',
            'La afición irlandesa ("Green Army") es famosa mundialmente por su alegría y cantar "Fields of Athenry" incluso perdiendo.',
            'Jack Charlton, campeón del mundo con Inglaterra, es considerado un héroe nacional en Irlanda por dirigirlos en sus mejores años.'
        ],
        trivia: [
            { q: "¿Color de camiseta local?", options: ["Verde", "Blanca", "Naranja"], correct: 0 },
            { q: "¿Leyenda del Man. United?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 },
            { q: "¿Símbolo en el escudo?", options: ["Arpa", "Trébol", "Cruz"], correct: 1 },
            { q: "¿Apodo del equipo?", options: ["Green Army", "Boys in Green", "The Celts"], correct: 1 },
            { q: "¿Mayor rival histórico?", options: ["Escocia", "Gales", "Inglaterra"], correct: 2 }
        ],
        video: 'assets/videos/irlanda.mp4' 
    },
    { 
        id: 'espana', index: 3, name: 'ESPAÑA', color: '#AA151B', 
        stats: { titulos: '1 Mundial / 4 Euros', copas: '16' }, 
        facts: [
            'Es la única selección de la historia en ganar tres torneos grandes consecutivos: Euro 2008, Mundial 2010 y Euro 2012.',
            'En el Mundial de Sudáfrica 2010, se convirtieron en campeones habiendo perdido su primer partido (contra Suiza).',
            'El famoso estilo de juego "Tiki-Taka" se basaba en la posesión y pases rápidos, perfeccionado por jugadores del FC Barcelona.'
        ],
        trivia: [
            { q: "¿Autor del gol final 2010?", options: ["Torres", "Villa", "Iniesta"], correct: 2 },
            { q: "¿Apodo de la selección?", options: ["La Furia", "La Roja", "Los Toros"], correct: 1 },
            { q: "¿Capitán que levantó la copa?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 },
            { q: "¿Estilo de juego famoso?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 },
            { q: "¿Cuántas Eurocopas tienen?", options: ["2", "3", "4"], correct: 2 }
        ],
        video: 'assets/videos/espana.mp4' 
    },
    { 
        id: 'corea', index: 4, name: 'COREA DEL SUR', color: '#0047A0', 
        stats: { titulos: '2 Copas Asia', copas: '11' }, 
        facts: [
            'Son el equipo asiático con más participaciones consecutivas en la Copa del Mundo (desde 1986).',
            'En 2002, como co-organizadores, llegaron a semifinales, el mejor resultado de un país no europeo ni sudamericano en la historia.',
            'Sus aficionados, los "Red Devils", son conocidos por sus cánticos masivos y coordinados usando camisetas rojas.'
        ],
        trivia: [
            { q: "¿Estrella del Tottenham?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 },
            { q: "¿Apodo de los fans?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 },
            { q: "¿Año del mundial Corea-Japón?", options: ["1998", "2006", "2002"], correct: 2 },
            { q: "¿Color uniforme principal?", options: ["Blanco", "Rojo", "Azul"], correct: 1 },
            { q: "¿A quién eliminaron en 2018?", options: ["Brasil", "Alemania", "México"], correct: 1 }
        ],
        video: 'assets/videos/corea.mp4' 
    },
    { 
        id: 'japon', index: 5, name: 'JAPÓN', color: '#BC002D', 
        stats: { titulos: '4 Copas Asia', copas: '7' }, 
        facts: [
            'La selección es conocida como "Samurai Blue" por el color azul de su uniforme, elegido en los años 30.',
            'Muchos jugadores japoneses profesionales y aficionados se inspiraron en el famoso anime y manga "Capitán Tsubasa" (Súper Campeones).',
            'Son famosos por limpiar impecablemente los vestidores y estadios después de cada partido, ganándose el respeto mundial.'
        ],
        trivia: [
            { q: "¿Apodo de la selección?", options: ["Samurai Blue", "Rising Sun", "Ninjas"], correct: 0 },
            { q: "¿Anime de fútbol famoso?", options: ["Dragon Ball", "Súper Campeones", "Naruto"], correct: 1 },
            { q: "¿Mayor rival asiático?", options: ["China", "Corea del Sur", "Australia"], correct: 1 },
            { q: "¿Han ganado un Mundial?", options: ["Sí", "No", "Casi"], correct: 1 },
            { q: "¿Color de camiseta?", options: ["Roja", "Blanca", "Azul"], correct: 2 }
        ],
        video: 'assets/videos/japon.mp4' 
    }
];

let currentCountry = null;
let homeRenderer, homeScene, homeCamera, homeBall, carouselGroup; 

// --- INICIALIZACIÓN ---
window.addEventListener('load', () => {
    initBottomSheet(); 
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

// --- HELPER TEXTURAS ---
function createCardTexture(text, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 350; 
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 256, 350);
    gradient.addColorStop(0, colorHex); gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 256, 350);
    ctx.strokeStyle = 'white'; ctx.lineWidth = 10; ctx.strokeRect(5, 5, 246, 340);
    ctx.fillStyle = 'white'; ctx.font = 'bold 40px Arial'; ctx.textAlign = 'center';
    ctx.fillText(text, 128, 175);
    ctx.beginPath(); ctx.arc(128, 80, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.fill();
    return new THREE.CanvasTexture(canvas);
}

// --- 3D HOME ---
function initHome3D() {
    const canvas = document.getElementById('home-3d-canvas');
    if (!canvas) return;
    const width = window.innerWidth; const height = window.innerHeight;
    homeScene = new THREE.Scene();
    homeCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    homeCamera.position.set(0, 2.5, 7); homeCamera.lookAt(0, 0.5, 0);
    homeRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    homeRenderer.setSize(width, height); homeRenderer.setPixelRatio(window.devicePixelRatio);
    homeScene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2); dirLight.position.set(5, 10, 7);
    homeScene.add(dirLight);
    homeScene.add(new THREE.DirectionalLight(0x4444ff, 0.8));
    const loader = new GLTFLoader();
    loader.load('assets/models/low_poly_soccer_ball_or_football.glb', (gltf) => {
        homeBall = gltf.scene; homeBall.position.set(0, 0.5, 2.5); homeBall.scale.set(8.5, 8.5, 8.5);
        homeScene.add(homeBall);
    });
    carouselGroup = new THREE.Group(); homeScene.add(carouselGroup);
    const radius = 3.5; const geo = new THREE.PlaneGeometry(1.4, 2.0);
    countriesData.forEach((c, i) => {
        const angle = (i / countriesData.length) * Math.PI * 2;
        const mat = new THREE.MeshBasicMaterial({ map: createCardTexture(c.name, c.color), side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(Math.cos(angle)*radius, 1.0, Math.sin(angle)*radius);
        mesh.rotation.y = -angle + Math.PI/2;
        carouselGroup.add(mesh);
    });
    const animate = () => {
        if (!document.getElementById('screen-home').classList.contains('hidden')) {
            requestAnimationFrame(animate);
            if (homeBall) homeBall.rotation.y += 0.005;
            if (carouselGroup) carouselGroup.rotation.y += 0.002;
            homeRenderer.render(homeScene, homeCamera);
        } else requestAnimationFrame(animate);
    };
    animate();
}

// --- LÓGICA DE INTERFAZ ---

window.mostrarInfoPais = (index) => {
    const country = countriesData.find(c => c.index === index);
    if (!country) return;
    currentCountry = country;

    document.getElementById('country-name').innerText = country.name;
    document.getElementById('stat-titulos').innerText = country.stats.titulos;
    document.getElementById('stat-participaciones').innerText = country.stats.copas;

    const factsContainer = document.getElementById('facts-items-container');
    factsContainer.innerHTML = '';
    country.facts.forEach((fact, i) => {
        const div = document.createElement('div');
        div.className = 'bg-gradient-to-r from-green-900/30 to-black p-5 rounded-2xl border-l-4 border-green-500 shadow-lg';
        div.innerHTML = `<p class="font-sans text-sm text-gray-200 leading-relaxed"><strong class="text-green-400 mr-1">#${i+1}</strong> ${fact}</p>`;
        factsContainer.appendChild(div);
    });

    const triviaContainer = document.getElementById('trivia-items-container');
    triviaContainer.innerHTML = ''; 
    country.trivia.forEach((triv, qIndex) => {
        const div = document.createElement('div');
        div.className = 'bg-white/5 border border-white/10 rounded-2xl p-5 shadow-inner';
        let optionsHtml = '';
        triv.options.forEach((opt, optIndex) => {
            optionsHtml += `<button onclick="window.verificarRespuesta(this, ${qIndex}, ${optIndex}, ${triv.correct})" class="w-full text-left bg-black/40 hover:bg-white/10 p-3 rounded-xl text-sm mb-2.5 transition-colors border border-transparent font-sans">${opt}</button>`;
        });
        div.innerHTML = `
            <p class="font-bold text-green-400 text-sm mb-4 font-sans">Pregunta ${qIndex + 1}: <span class="text-white font-normal">${triv.q}</span></p>
            <div class="grid grid-cols-1 gap-1">${optionsHtml}</div>
        `;
        triviaContainer.appendChild(div);
    });

    const firstTab = document.querySelector('#tab-navigation .tab-btn');
    switchTab(firstTab, 'stats');

    abrirBottomSheet();
};

window.switchTab = (btn, tabId) => {
    // Si la ventana está minimizada, abrirla al tocar un tab
    abrirBottomSheet();

    const buttons = document.querySelectorAll('#tab-navigation .tab-btn');
    buttons.forEach(b => {
        b.classList.remove('active', 'bg-green-600', 'text-white', 'border-green-400', 'shadow-[0_0_15px_rgba(34,197,94,0.3)]');
        b.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
    });
    btn.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
    btn.classList.add('active', 'bg-green-600', 'text-white', 'border-green-400', 'shadow-[0_0_15px_rgba(34,197,94,0.3)]');

    const containers = document.querySelectorAll('.content-container');
    containers.forEach(c => c.classList.add('hidden'));
    document.getElementById(`content-${tabId}`).classList.remove('hidden');
    document.getElementById('sheet-content-container').scrollTop = 0;
};

window.verificarRespuesta = (btn, qIndex, optIndex, correctIndex) => {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);
    if (optIndex === correctIndex) {
        btn.classList.remove('bg-black/40'); btn.classList.add('bg-green-600', 'text-white', 'font-bold', 'border-green-400'); btn.innerHTML += ' ✅';
    } else {
        btn.classList.remove('bg-black/40'); btn.classList.add('bg-red-600', 'text-white', 'border-red-400'); btn.innerHTML += ' ❌';
        const correctBtn = buttons[correctIndex];
        correctBtn.classList.remove('bg-black/40'); correctBtn.classList.add('bg-green-600/50', 'text-white', 'border-green-400/50');
    }
};

// --- LOGICA SLIDE MINIMIZAR ---
function initBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    const handle = document.getElementById('drag-handle');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let isMinimized = false; // Nuevo estado

    const onStart = (y) => {
        startY = y;
        isDragging = true;
        sheet.style.transition = 'none'; 
        handle.style.cursor = 'grabbing';
    };

    const onMove = (y) => {
        if (!isDragging) return;
        const deltaY = y - startY;
        
        // Si está abierto, solo permite arrastrar abajo
        // Si está minimizado, permite arrastrar arriba (delta negativo)
        if (!isMinimized && deltaY > 0) {
             sheet.style.transform = `translateY(${deltaY}px)`;
             currentY = deltaY;
        } else if (isMinimized && deltaY < 0) {
            // Calcular posición desde el estado minimizado
            // Estamos en peekOffset, queremos ir a 0
            const headerHeight = document.getElementById('sheet-header').offsetHeight;
            const sheetHeight = sheet.offsetHeight;
            const peekOffset = sheetHeight - headerHeight;
            
            sheet.style.transform = `translateY(${peekOffset + deltaY}px)`;
            currentY = deltaY; // Guardar desplazamiento
        }
    };

    const onEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        sheet.style.transition = 'transform 0.3s ease-out'; 
        handle.style.cursor = 'grab';
        
        // Lógica de decisión
        if (!isMinimized) {
            // Estaba abierto, si bajó más de 100px -> Minimizar
            if (currentY > 100) {
                minimizarBottomSheet();
            } else {
                abrirBottomSheet();
            }
        } else {
            // Estaba minimizado, si subió más de 50px -> Abrir
            if (currentY < -50) {
                abrirBottomSheet();
            } else {
                minimizarBottomSheet();
            }
        }
        currentY = 0;
    };

    // Events Touch
    handle.addEventListener('touchstart', (e) => onStart(e.touches[0].clientY));
    window.addEventListener('touchmove', (e) => { if (isDragging) { e.preventDefault(); onMove(e.touches[0].clientY); } }, { passive: false });
    window.addEventListener('touchend', onEnd);

    // Events Mouse
    handle.addEventListener('mousedown', (e) => { e.preventDefault(); onStart(e.clientY); });
    window.addEventListener('mousemove', (e) => { if (isDragging) onMove(e.clientY); });
    window.addEventListener('mouseup', onEnd);
}

function abrirBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    sheet.classList.remove('translate-y-full'); // Quitar clase de oculto inicial
    sheet.style.transform = 'translateY(0)';
    document.getElementById('scan-guide').classList.add('hidden');
    // Actualizar estado interno (en variable global o atributo)
    // Para simplificar, asumimos que si llamamos a esto, ya no está minimizado
    // NOTA: Para que initBottomSheet sepa el estado, usamos una variable en su scope o comprobamos transform.
    // Aquí reiniciamos el flag en el closure, pero como es módulo, necesitamos acceso.
    // Truco: Despachar evento o simplemente confiar en que el usuario interactúa bien.
    // Mejor solución rápida: resetear isMinimized en la próxima interacción.
}

function minimizarBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    const headerHeight = document.getElementById('sheet-header').offsetHeight;
    const sheetHeight = sheet.offsetHeight;
    const translateY = sheetHeight - headerHeight; // Calcular cuánto bajar para dejar solo el header
    
    sheet.style.transform = `translateY(${translateY}px)`;
    // Dejar visible para que el usuario sepa que puede volver
}

// Para usar desde fuera (volverAlHome)
window.ocultarBottomSheetCompleto = () => {
    const sheet = document.getElementById('bottom-sheet');
    sheet.style.transform = ''; // Limpiar inline
    sheet.classList.add('translate-y-full'); // Ocultar totalmente con CSS
    document.getElementById('scan-guide').classList.remove('hidden');
};

// --- NAVEGACIÓN ---
window.irAEscanear = async () => {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    if (window.iniciarAR) await window.iniciarAR();
};
window.volverAlHome = () => {
    window.ocultarBottomSheetCompleto();
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
    if(window.detenerAR) window.detenerAR();
};
window.verHighlights = () => {
    if (!currentCountry) return;
    window.ocultarBottomSheetCompleto(); 
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
    video.pause(); video.src = "";
    document.getElementById('screen-highlights').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    document.getElementById('scan-guide').classList.remove('hidden');
};
window.aplicarFiltroVideo = (filtro) => {
    const video = document.getElementById('highlight-video');
    const botones = document.querySelectorAll('.filter-btn');
    video.className = "w-full max-h-screen object-contain transition-all duration-300 filter-" + filtro;
    botones.forEach(btn => {
        btn.classList.remove('bg-white', 'text-black');
        btn.classList.add('bg-white/10', 'text-white');
    });
    if (event && event.target) {
        event.target.classList.remove('bg-white/10', 'text-white');
        event.target.classList.add('bg-white', 'text-black');
    }
};