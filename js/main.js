import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- SISTEMA DE EFECTOS DE SONIDO (SFX) ---
const sfxClick = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416650/click_r4g9sr.mp3');
const sfxCorrect = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416651/correct_uwj0fr.mp3');
const sfxWrong = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416650/wrong_jqs4sk.mp3');

// Helper para reproducir con volumen seguro
const playSfx = (sound) => {
    const vol = window.getARVolume ? window.getARVolume() : 0.5;
    if (vol <= 0) return;
    sound.volume = vol; 
    sound.currentTime = 0; 
    sound.play().catch(e => {});
};

document.addEventListener('click', (e) => {
    const btn = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
    if (btn) {
        if (btn.closest('#trivia-items-container')) {
            return;
        }
        playSfx(sfxClick);
    }
});


// --- BASE DE DATOS DE PAÍSES ---
const countriesData = [
    { 
        id: 'mexico', index: 0, name: 'MÉXICO', color: '#106337', 
        stats: { titulos: '1 Confed. / 11 Oro', copas: '17' }, 
        facts: [ 'El Estadio Azteca es el único en el mundo que ha albergado dos finales de Copa del Mundo.', 'México fue el primer país en organizar una Copa del Mundo dos veces.', 'La selección mexicana es la que más veces ha participado en un Mundial sin haberlo ganado nunca.' ],
        trivia: [ { q: "¿Máximo goleador histórico?", options: ["Hugo Sánchez", "Chicharito", "Borgetti"], correct: 1 }, { q: "¿Cuándo ganaron el Oro Olímpico?", options: ["2008", "2016", "2012"], correct: 2 }, { q: "¿Apodo de la selección?", options: ["El Tri", "Los Aztecas", "Los Verdes"], correct: 0 }, { q: "¿Primer jugador en 5 mundiales?", options: ["Rafa Márquez", "Tota Carbajal", "Ochoa"], correct: 1 }, { q: "¿Rival del 'No era penal'?", options: ["Argentina", "Holanda", "Alemania"], correct: 1 } ],
        videos: [
            { title: "Gol Histórico '86", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417899/mexico1_z6pkxn.mp4" },
            { title: "Afición Azteca", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417621/mexico2_bgih6s.mp4" }, 
            { title: "El cacahuatazo", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417592/mexico3_out1tt.mp4" },
            { title: "Emos vs punks", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417637/mexico4_kpefn9.mp4" }
        ]
    },
    { 
        id: 'colombia', index: 1, name: 'COLOMBIA', color: '#FCD116', 
        stats: { titulos: '1 Copa América', copas: '6' }, 
        facts: [ 'El único "Gol Olímpico" en la historia de los mundiales lo anotó Marcos Coll.', 'James Rodríguez ganó la Bota de Oro en Brasil 2014.', 'La selección de 1994 llegó al Mundial con un invicto de 30 partidos.' ],
        trivia: [ { q: "¿Quién es 'El Tigre'?", options: ["Falcao", "James", "Valderrama"], correct: 0 }, { q: "¿Bota de Oro Mundial 2014?", options: ["Cuadrado", "Bacca", "James Rodríguez"], correct: 2 }, { q: "¿Color principal de camiseta?", options: ["Rojo", "Azul", "Amarillo"], correct: 2 }, { q: "¿Ícono del pelo rizado?", options: ["Higuita", "Pibe Valderrama", "Asprilla"], correct: 1 }, { q: "¿Año de su Copa América?", options: ["2001", "2011", "1990"], correct: 0 } ],
        videos: [
            { title: "El Gol de James", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420835/colombia1_hjx62k.mp4" },
            { title: "Baile del equipo", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420830/colombia2_lsp112.mp4" },
            { title: "Higuita Escorpión", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420857/colombia3_pzvp0m.mp4" },
            { title: "Copa América 2001", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772416681/colombia4_weemr1.mp4" }
        ]
    },
    { 
        id: 'irlanda', index: 3, name: 'IRLANDA', color: '#169B62', 
        stats: { titulos: '-', copas: '3' }, 
        facts: [ 'En Italia 90, llegaron a cuartos sin ganar un solo partido.', 'La afición "Green Army" es famosa por su alegría.', 'Jack Charlton es considerado un héroe nacional.' ],
        trivia: [ { q: "¿Color de camiseta local?", options: ["Verde", "Blanca", "Naranja"], correct: 0 }, { q: "¿Leyenda del Man. United?", options: ["Robbie Keane", "Roy Keane", "Duff"], correct: 1 }, { q: "¿Símbolo en el escudo?", options: ["Arpa", "Trébol", "Cruz"], correct: 1 }, { q: "¿Apodo del equipo?", options: ["Green Army", "Boys in Green", "The Celts"], correct: 1 }, { q: "¿Mayor rival histórico?", options: ["Escocia", "Gales", "Inglaterra"], correct: 2 } ],
        videos: [
            { title: "Italia 90 Heroico", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418887/irlanda1_knqykh.mp4" },
            { title: "Fans Cantando", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418912/irlanda2_yyn5ba.mp4" },
            { title: "Gol de Keane", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418985/irlanda3_osozcc.mp4" },
            { title: "Green Army", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418845/irlanda4_wbissm.mp4" }
        ]
    },
    { 
        id: 'espana', index: 2, name: 'ESPAÑA', color: '#AA151B', 
        stats: { titulos: '1 Mundial / 4 Euros', copas: '16' }, 
        facts: [ 'Única selección en ganar tres torneos grandes consecutivos.', 'Campeones 2010 perdiendo el primer partido.', 'El estilo "Tiki-Taka" revolucionó el fútbol.' ],
        trivia: [ { q: "¿Autor del gol final 2010?", options: ["Torres", "Villa", "Iniesta"], correct: 2 }, { q: "¿Apodo de la selección?", options: ["La Furia", "La Roja", "Los Toros"], correct: 1 }, { q: "¿Capitán que levantó la copa?", options: ["Casillas", "Puyol", "Xavi"], correct: 0 }, { q: "¿Estilo de juego famoso?", options: ["Catenaccio", "Tiki-Taka", "Jogo Bonito"], correct: 1 }, { q: "¿Cuántas Eurocopas tienen?", options: ["2", "3", "4"], correct: 2 } ],
        videos: [
            { title: "Gol de Iniesta", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419133/espana1_zsmmeu.mp4" },
            { title: "Tiki Taka", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419143/espana2_w91dpu.mp4" },
            { title: "Campeones 2010", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419053/espana3_cegma1.mp4" },
            { title: "Casillas Parada", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419143/espana4_e8ccg6.mp4" }
        ]
    },
    { 
        id: 'corea', index: 4, name: 'COREA DEL SUR', color: '#0047A0', 
        stats: { titulos: '2 Copas Asia', copas: '11' }, 
        facts: [ 'Equipo asiático con más participaciones consecutivas.', 'Llegaron a semifinales en 2002.', 'Aficionados "Red Devils" famosos por cánticos masivos.' ],
        trivia: [ { q: "¿Estrella del Tottenham?", options: ["Park Ji-sung", "Son Heung-min", "Kim Min-jae"], correct: 1 }, { q: "¿Apodo de los fans?", options: ["Red Devils", "Tigers", "Warriors"], correct: 0 }, { q: "¿Año del mundial Corea-Japón?", options: ["1998", "2006", "2002"], correct: 2 }, { q: "¿Color uniforme principal?", options: ["Blanco", "Rojo", "Azul"], correct: 1 }, { q: "¿A quién eliminaron en 2018?", options: ["Brasil", "Alemania", "México"], correct: 1 } ],
        videos: [
            { title: "Milagro 2002", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419925/corea1_nxd8vz.mp4" },
            { title: "Son Heung-min", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420022/corea2_j3enwj.mp4" },
            { title: "Red Devils", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420043/corea3_j6f3ih.mp4" },
            { title: "Gol a Alemania", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420074/corea4_oklizi.mp4" }
        ]
    },
    { 
        id: 'japon', index: 5, name: 'JAPÓN', color: '#BC002D', 
        stats: { titulos: '4 Copas Asia', copas: '7' }, 
        facts: [ 'Conocidos como "Samurai Blue".', 'Inspirados en "Súper Campeones".', 'Famosos por limpiar vestidores y estadios.' ],
        trivia: [ { q: "¿Apodo de la selección?", options: ["Samurai Blue", "Rising Sun", "Ninjas"], correct: 0 }, { q: "¿Anime de fútbol famoso?", options: ["Dragon Ball", "Súper Campeones", "Naruto"], correct: 1 }, { q: "¿Mayor rival asiático?", options: ["China", "Corea del Sur", "Australia"], correct: 1 }, { q: "¿Han ganado un Mundial?", options: ["Sí", "No", "Casi"], correct: 1 }, { q: "¿Color de camiseta?", options: ["Roja", "Blanca", "Azul"], correct: 2 } ],
        videos: [
            { title: "Samurai Blue", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418496/japon1_zvydtq.mp4" },
            { title: "Golazo Japón", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418482/japon2_autc7p.mp4" },
            { title: "Limpieza Estadio", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418421/japon3_tk0tna.mp4" },
            { title: "Super Campeones", src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418473/japon4_zdifav.mp4" }
        ]
    },
    { 
        id: 'uruguay', index: 6, name: 'URUGUAY', color: '#0038A8', 
        stats: { titulos: '2 Mundiales / 15 Copas América', copas: '14' }, 
        facts: [ 'Fueron los primeros campeones del mundo en 1930.', 'Protagonistas del histórico "Maracanazo" en 1950.', 'Son conocidos por su famosa "Garra Charrúa".' ],
        trivia: [ { q: "¿Apodo de la selección?", options: ["La Celeste", "Los Andes", "El Sol"], correct: 0 }, { q: "¿Máximo goleador histórico?", options: ["Cavani", "Forlán", "Luis Suárez"], correct: 2 }, { q: "¿A quién vencieron en el Maracanazo?", options: ["Argentina", "Brasil", "Italia"], correct: 1 }, { q: "¿Cuántos Mundiales han ganado?", options: ["1", "2", "3"], correct: 1 }, { q: "¿Qué animal aparece en su escudo?", options: ["Un sol", "No hay escudo", "Un león"], correct: 1 } ],
        videos: [
            { title: "Maracanazo", src: "" },
            { title: "Gol de Forlán", src: "" },
            { title: "Garra Charrúa", src: "" },
            { title: "Campeones de América", src: "" }
        ]
    },
    { 
        id: 'tunez', index: 7, name: 'TÚNEZ', color: '#E70013', 
        stats: { titulos: '1 Copa Africana', copas: '6' }, 
        facts: [ 'Primera selección africana en ganar un partido en un Mundial (1978).', 'Han clasificado a 6 Copas del Mundo en su historia.', 'Su escudo lleva un águila inspirada en su apodo.' ],
        trivia: [ { q: "¿Apodo de la selección?", options: ["Leones", "Faraones", "Águilas de Cartago"], correct: 2 }, { q: "¿En qué año ganaron su Copa Africana?", options: ["2004", "1998", "2010"], correct: 0 }, { q: "¿Color principal de su uniforme?", options: ["Verde", "Blanco y Rojo", "Amarillo"], correct: 1 }, { q: "¿A qué continente pertenecen?", options: ["Asia", "África", "Europa"], correct: 1 }, { q: "¿Último mundial jugado?", options: ["2014", "2018", "2022"], correct: 2 } ],
        videos: [
            { title: "Victoria histórica '78", src: "" },
            { title: "Águilas de Cartago", src: "" },
            { title: "Gol Mundial 2022", src: "" },
            { title: "Afición tunecina", src: "" }
        ]
    },
    { 
        id: 'sudafrica', index: 8, name: 'SUDÁFRICA', color: '#007749', 
        stats: { titulos: '1 Copa Africana', copas: '3' }, 
        facts: [ 'Única nación africana en organizar una Copa del Mundo (2010).', 'El primer gol del Mundial 2010 lo anotó Siphiwe Tshabalala.', 'Ganaron la Copa Africana en 1996 siendo anfitriones.' ],
        trivia: [ { q: "¿Apodo de la selección?", options: ["Bafana Bafana", "Súper Águilas", "Estrellas Negras"], correct: 0 }, { q: "¿Año en que organizaron el Mundial?", options: ["2006", "2010", "2014"], correct: 1 }, { q: "¿Autor del primer gol en 2010?", options: ["Pienaar", "McCarthy", "Tshabalala"], correct: 2 }, { q: "¿Mascota de su Mundial?", options: ["Fuleco", "Zakumi", "Pique"], correct: 1 }, { q: "¿Instrumento famoso de los fans?", options: ["Tambor", "Vuvuzela", "Maraca"], correct: 1 } ],
        videos: [
            { title: "Golazo de Tshabalala", src: "" },
            { title: "Sonido Vuvuzelas", src: "" },
            { title: "Bafana Bafana", src: "" },
            { title: "Inauguración 2010", src: "" }
        ]
    },
    { 
        id: 'uzbekistan', index: 9, name: 'UZBEKISTÁN', color: '#0099B5', 
        stats: { titulos: '1 Juegos Asiáticos', copas: '0' }, 
        facts: [ 'Ganaron la medalla de oro en los Juegos Asiáticos de 1994.', 'Son una de las potencias emergentes del fútbol juvenil centroasiático.', 'Pertenecen a la confederación asiática (AFC).' ],
        trivia: [ { q: "¿Apodo del equipo?", options: ["Lobos Blancos", "Dragones", "Tigres"], correct: 0 }, { q: "¿Han jugado un Mundial mayor?", options: ["Sí", "No", "Solo una vez"], correct: 1 }, { q: "¿En qué confederación juegan?", options: ["UEFA", "CAF", "AFC"], correct: 2 }, { q: "¿Color de su uniforme local?", options: ["Azul y blanco", "Rojo puro", "Verde y amarillo"], correct: 0 }, { q: "¿Año en que ganaron Oro Asiático?", options: ["1994", "2002", "2010"], correct: 0 } ],
        videos: [
            { title: "Lobos Blancos", src: "" },
            { title: "Juegos Asiáticos '94", src: "" },
            { title: "Fútbol Centroasiático", src: "" },
            { title: "Jóvenes promesas", src: "" }
        ]
    },
    { 
        id: 'polonia', index: 10, name: 'POLONIA', color: '#DC143C', 
        stats: { titulos: '1 Oro Olímpico', copas: '9' }, 
        facts: [ 'Consiguieron el tercer lugar en los Mundiales de 1974 y 1982.', 'Robert Lewandowski es su máximo goleador y leyenda histórica.', 'Ganaron el oro olímpico en los juegos de Múnich 1972.' ],
        trivia: [ { q: "¿Máximo goleador histórico?", options: ["Milik", "Boniek", "Lewandowski"], correct: 2 }, { q: "¿Mejor puesto en un Mundial?", options: ["Subcampeón", "Tercer lugar", "Cuartos"], correct: 1 }, { q: "¿Apodo de la selección?", options: ["Las Águilas", "Los Osos", "Los Leones"], correct: 0 }, { q: "¿Color principal de su uniforme?", options: ["Azul", "Blanco y Rojo", "Verde"], correct: 1 }, { q: "¿En qué año ganaron el Oro Olímpico?", options: ["1972", "1980", "1996"], correct: 0 } ],
        videos: [
            { title: "Goles de Lewandowski", src: "" },
            { title: "Mundial 1974", src: "" },
            { title: "Oro Olímpico '72", src: "" },
            { title: "Afición Polaca", src: "" }
        ]
    },
    { 
        id: 'jamaica', index: 11, name: 'JAMAICA', color: '#009B3A', 
        stats: { titulos: '6 Copas del Caribe', copas: '1' }, 
        facts: [ 'Clasificaron a su único Mundial en Francia 1998.', 'Han sido subcampeones de la Copa Oro de la Concacaf en dos ocasiones.', 'Tienen una fuerte rivalidad deportiva con Estados Unidos y México.' ],
        trivia: [ { q: "¿Apodo de la selección?", options: ["Reggae Boyz", "Calypso", "Caribeños"], correct: 0 }, { q: "¿Único Mundial que han jugado?", options: ["1994", "1998", "2002"], correct: 1 }, { q: "¿A qué confederación pertenecen?", options: ["CONMEBOL", "UEFA", "CONCACAF"], correct: 2 }, { q: "¿Colores de su camiseta?", options: ["Amarillo, Verde y Negro", "Rojo y Blanco", "Azul y Amarillo"], correct: 0 }, { q: "¿Mejor puesto en Copa Oro?", options: ["Tercero", "Subcampeón", "Campeón"], correct: 1 } ],
        videos: [
            { title: "Reggae Boyz en Francia '98", src: "" },
            { title: "Copa Oro", src: "" },
            { title: "Goles históricos", src: "" },
            { title: "Ambiente Jamaiquino", src: "" }
        ]
    }
];

let currentCountry = null;
let homeRenderer, homeScene, homeCamera, homeBall, carouselGroup; 
let homeAnimationId = null; 

// VARIABLE PARA EL PUNTAJE
let currentScore = 0; 

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
    canvas.width = 256; 
    canvas.height = 350; 
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, colorHex); 
    gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
    ctx.fillStyle = gradient; 
    ctx.beginPath();
    ctx.moveTo(20, 0); ctx.lineTo(236, 0); ctx.quadraticCurveTo(256, 0, 256, 20);
    ctx.lineTo(256, 330); ctx.quadraticCurveTo(256, 350, 236, 350);
    ctx.lineTo(20, 350); ctx.quadraticCurveTo(0, 350, 0, 330);
    ctx.lineTo(0, 20); ctx.quadraticCurveTo(0, 0, 20, 0);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 4; ctx.stroke();
    let fontSize = 40;
    ctx.font = `900 ${fontSize}px "Montserrat", Arial`; 
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const maxW = 220; 
    while (ctx.measureText(text).width > maxW && fontSize > 10) {
        fontSize -= 2; ctx.font = `900 ${fontSize}px "Montserrat", Arial`;
    }
    ctx.shadowColor = "rgba(0,0,0,0.8)"; ctx.shadowBlur = 8; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 4;
    ctx.fillStyle = 'white'; 
    ctx.fillText(text, 128, 175);
    ctx.shadowBlur = 0;
    ctx.beginPath(); ctx.arc(128, 70, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fill();
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
    window.addEventListener('resize', onWindowResize, false);
    startHomeLoop();
}

function onWindowResize() {
    if (!homeCamera || !homeRenderer) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    homeCamera.aspect = width / height;
    homeCamera.updateProjectionMatrix();
    homeRenderer.setSize(width, height);
}

function startHomeLoop() {
    const animate = () => {
        if (document.getElementById('screen-home').classList.contains('hidden')) {
            homeAnimationId = null; 
            return;
        }
        homeAnimationId = requestAnimationFrame(animate);
        if (homeBall) homeBall.rotation.y += 0.005;
        if (carouselGroup) carouselGroup.rotation.y += 0.002;
        homeRenderer.render(homeScene, homeCamera);
    };
    animate();
}

// --- LÓGICA DE INTERFAZ ---

window.mostrarInfoPais = (index) => {
    const country = countriesData.find(c => c.index === index);
    if (!country) return;
    
    // Si ya estamos viendo el mismo país, no reiniciamos TODO (para evitar parpadeos)
    // Pero si es diferente, limpiamos.
    const esNuevoPais = (currentCountry && currentCountry.index !== index) || !currentCountry;
    
    currentCountry = country;
    
    // Si cambiamos de país, reseteamos el puntaje
    if(esNuevoPais) {
        currentScore = 0;
    }

    document.getElementById('country-name').innerText = country.name;
    document.getElementById('stat-titulos').innerText = country.stats.titulos;
    document.getElementById('stat-participaciones').innerText = country.stats.copas;
    
    // Actualizar Facts
    const factsContainer = document.getElementById('facts-items-container');
    factsContainer.innerHTML = '';
    country.facts.forEach((fact, i) => {
        const div = document.createElement('div');
        div.className = 'liquid-glass-light p-5 rounded-2xl border border-white/5 shadow-sm';
        div.innerHTML = `<p class="font-sans text-sm text-gray-200 leading-relaxed"><strong class="text-green-400 mr-1">#${i+1}</strong> ${fact}</p>`;
        factsContainer.appendChild(div);
    });

    // Actualizar Trivia
    const triviaContainer = document.getElementById('trivia-items-container');
    triviaContainer.innerHTML = ''; 
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'bg-white/10 border border-white/20 p-3 rounded-xl mb-4 text-center sticky top-0 z-10 backdrop-blur-md';
    scoreDiv.innerHTML = `<span id="trivia-score-text" class="font-display text-2xl text-green-400 tracking-widest">PUNTAJE: ${currentScore} / ${country.trivia.length}</span>`;
    triviaContainer.appendChild(scoreDiv);
    
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

    // Resetear a pestaña Stats si es un nuevo país, si no, mantenemos donde estaba
    if(esNuevoPais){
        const firstTab = document.querySelector('#tab-navigation .tab-btn');
        switchTab(firstTab, 'stats');
    }
    
    // IMPORTANTE: Asegurar que se abra la ventana
    abrirBottomSheet();
};

window.switchTab = (btn, tabId) => {
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
        btn.classList.remove('bg-black/40'); btn.classList.add('bg-green-600', 'text-white', 'font-bold', 'border-green-400'); 
        btn.innerHTML += ' ✅'; playSfx(sfxCorrect); 
        currentScore++;
        const scoreText = document.getElementById('trivia-score-text');
        if (scoreText && currentCountry) {
            scoreText.innerText = `PUNTAJE: ${currentScore} / ${currentCountry.trivia.length}`;
            scoreText.parentElement.classList.add('border-green-500');
            setTimeout(() => scoreText.parentElement.classList.remove('border-green-500'), 300);
        }
    } else {
        btn.classList.remove('bg-black/40'); btn.classList.add('bg-red-600', 'text-white', 'border-red-400'); 
        btn.innerHTML += ' ❌'; playSfx(sfxWrong); 
        const correctBtn = buttons[correctIndex];
        correctBtn.classList.remove('bg-black/40'); correctBtn.classList.add('bg-green-600/50', 'text-white', 'border-green-400/50');
    }
};

// --- LOGICA SLIDE MINIMIZAR ---
function initBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    const handle = document.getElementById('drag-handle');
    let startY = 0; let currentY = 0; let isDragging = false; let isMinimized = false; 

    const onStart = (y) => { startY = y; isDragging = true; sheet.style.transition = 'none'; handle.style.cursor = 'grabbing'; };
    const onMove = (y) => {
        if (!isDragging) return;
        const deltaY = y - startY;
        if (!isMinimized && deltaY > 0) { sheet.style.transform = `translateY(${deltaY}px)`; currentY = deltaY; } 
        else if (isMinimized && deltaY < 0) {
            const headerHeight = document.getElementById('sheet-header').offsetHeight;
            const sheetHeight = sheet.offsetHeight;
            const peekOffset = sheetHeight - headerHeight;
            sheet.style.transform = `translateY(${peekOffset + deltaY}px)`; currentY = deltaY; 
        }
    };
    const onEnd = () => {
        if (!isDragging) return;
        isDragging = false; sheet.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)'; handle.style.cursor = 'grab';
        if (!isMinimized) { if (currentY > 100) minimizarBottomSheet(); else abrirBottomSheet(); } 
        else { if (currentY < -50) abrirBottomSheet(); else minimizarBottomSheet(); }
        currentY = 0;
    };
    handle.addEventListener('touchstart', (e) => onStart(e.touches[0].clientY));
    window.addEventListener('touchmove', (e) => { if (isDragging) { e.preventDefault(); onMove(e.touches[0].clientY); } }, { passive: false });
    window.addEventListener('touchend', onEnd);
    handle.addEventListener('mousedown', (e) => { e.preventDefault(); onStart(e.clientY); });
    window.addEventListener('mousemove', (e) => { if (isDragging) onMove(e.clientY); });
    window.addEventListener('mouseup', onEnd);
}

function abrirBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    sheet.classList.remove('translate-y-full'); sheet.style.transform = 'translateY(0)';
    document.getElementById('scan-guide').classList.add('hidden');
}

function minimizarBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    const headerHeight = document.getElementById('sheet-header').offsetHeight;
    const sheetHeight = sheet.offsetHeight;
    const translateY = sheetHeight - headerHeight; 
    sheet.style.transform = `translateY(${translateY}px)`;
}

window.ocultarBottomSheetCompleto = () => {
    const sheet = document.getElementById('bottom-sheet');
    sheet.style.transform = ''; sheet.classList.add('translate-y-full'); 
    document.getElementById('scan-guide').classList.remove('hidden');
};

// --- NAVEGACIÓN ---
window.irAEscanear = async () => {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    if (window.iniciarAR) await window.iniciarAR();
};

window.volverAlHome = () => {
    // RESETEAR ESTADO: Limpiamos país activo y puntaje
    currentCountry = null;
    currentScore = 0;
    
    // Ocultar la ventana deslizante
    window.ocultarBottomSheetCompleto();
    
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
    
    if (!homeAnimationId) startHomeLoop();
    if(window.detenerAR) window.detenerAR(); 
};

// --- MANUAL DE USUARIO ---
window.abrirManual = () => {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-manual').classList.remove('hidden');
};

window.cerrarManual = () => {
    document.getElementById('screen-manual').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
};

// --- GALERÍA (ACERVO) ---

// 1. Mostrar la Galería
window.verHighlights = () => {
    if (!currentCountry) return;
    
    // Ocultar hoja de datos, pero NO DETENER AR COMPLETAMENTE
    if(window.detenerAudioAR) window.detenerAudioAR();
    window.ocultarBottomSheetCompleto(); 
    
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-gallery').classList.remove('hidden');
    document.getElementById('gallery-title').innerText = currentCountry.name;
    
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    
    currentCountry.videos.forEach((vid, index) => {
        const item = document.createElement('div');
        item.className = 'bg-black/40 border border-white/10 rounded-xl overflow-hidden active:scale-95 transition-transform cursor-pointer group';
        item.onclick = () => window.reproducirVideoDesdeGaleria(index);
        
        // Magia de Cloudinary: Cambiamos .mp4 a .jpg para la miniatura
        const thumbnailSrc = vid.src.replace('.mp4', '.jpg');

        item.innerHTML = `
            <div class="h-32 bg-black relative flex items-center justify-center overflow-hidden group-hover:bg-white/5 transition-colors">
                <img src="${thumbnailSrc}" alt="${vid.title}" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity">
                
                <span class="relative z-10 text-4xl opacity-80 group-hover:scale-110 transition-transform drop-shadow-lg">▶️</span>
            </div>
            <div class="p-3 relative z-10 bg-black/40 backdrop-blur-sm">
                <p class="font-sans text-sm font-bold text-white truncate">${vid.title}</p>
                <p class="font-sans text-xs text-green-400 uppercase tracking-wider mt-1">Ver video</p>
            </div>
        `;
        grid.appendChild(item);
    });
};

// 2. Cerrar Galería (Volver a AR)
window.cerrarGaleria = async () => {
    document.getElementById('screen-gallery').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    
    // --- LÓGICA DE REAPERTURA DE VENTANA ---
    // Si tenemos un país activo (porque el AR es persistente),
    // queremos volver a ver la info (Bottom Sheet) y NO la guía de escaneo.
    if (currentCountry) {
        document.getElementById('scan-guide').classList.add('hidden'); // Asegurar guía oculta
        abrirBottomSheet(); // Volver a mostrar info
    } else {
        document.getElementById('scan-guide').classList.remove('hidden'); // Si no hay nada, mostrar guía
    }

    if(window.renudarAudioAR) window.renudarAudioAR();
};

window.reproducirVideoDesdeGaleria = (index) => {
    if (!currentCountry || !currentCountry.videos[index]) return;
    const videoData = currentCountry.videos[index];
    document.getElementById('screen-gallery').classList.add('hidden');
    document.getElementById('screen-highlights').classList.remove('hidden');
    const video = document.getElementById('highlight-video');
    document.getElementById('hl-title').innerText = videoData.title;
    video.src = videoData.src;
    video.play();
    window.aplicarFiltroVideo('none');
};

window.volverAGaleria = () => {
    const video = document.getElementById('highlight-video');
    video.pause(); video.src = ""; 
    document.getElementById('screen-highlights').classList.add('hidden');
    document.getElementById('screen-gallery').classList.remove('hidden');
};

window.cerrarHighlights = () => { window.volverAGaleria(); };

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

window.cambiarAnimacion = (tipo) => {
    const sfxClick = new Audio('assets/sounds/click.mp3');
    sfxClick.volume = 0.5; sfxClick.play().catch(e=>{});
    if (window.cambiarAnimacionAR) window.cambiarAnimacionAR(tipo);
    const btns = document.querySelectorAll('.anim-btn');
    btns.forEach(b => { b.classList.remove('border-green-500'); });
    if(event && event.currentTarget) event.currentTarget.classList.add('border-green-500');
};