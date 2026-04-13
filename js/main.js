import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { translations } from './translations.js'; 

let currentLang = 'es'; 
window.isARPaused = false; // Variable global para controlar el estado del escáner

// --- SISTEMA DE EFECTOS DE SONIDO (SFX) ---
const sfxClick = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416650/click_r4g9sr.mp3');
const sfxCorrect = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416651/correct_uwj0fr.mp3');
const sfxWrong = new Audio('https://res.cloudinary.com/duonndfih/video/upload/v1772416650/wrong_jqs4sk.mp3');

const playSfx = (sound) => {
    const vol = window.getARVolume ? window.getARVolume() : 0.5;
    if (vol <= 0) return; 
    sound.volume = vol; 
    sound.currentTime = 0; 
    sound.play().catch(e => {}); 
};

// --- OPTIMIZACIÓN: Evitar spam de sonidos ---
document.addEventListener('click', (e) => {
    const btn = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
    if (btn) {
        if (btn.closest('#trivia-items-container')) return; 
        playSfx(sfxClick); 
    }
});

// --- BASE DE DATOS ESTRUCTURAL ---
const countriesData = [
    { id: 'mexico', index: 0, color: '#106337', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417899/mexico1_z6pkxn.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417621/mexico2_bgih6s.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417592/mexico3_out1tt.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772417637/mexico4_kpefn9.mp4" } ] },
    { id: 'colombia', index: 1, color: '#FCD116', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420835/colombia1_hjx62k.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420830/colombia2_lsp112.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420857/colombia3_pzvp0m.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772416681/colombia4_weemr1.mp4" } ] },
    { id: 'irlanda', index: 2, color: '#169B62', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418887/irlanda1_knqykh.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418912/irlanda2_yyn5ba.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418985/irlanda3_osozcc.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418845/irlanda4_wbissm.mp4" } ] },
    { id: 'espana', index: 3, color: '#AA151B', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419133/espana1_zsmmeu.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419143/espana2_w91dpu.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419053/espana3_cegma1.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419143/espana4_e8ccg6.mp4" } ] },
    { id: 'corea', index: 4, color: '#0047A0', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772419925/corea1_nxd8vz.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420022/corea2_j3enwj.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420043/corea3_j6f3ih.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772420074/corea4_oklizi.mp4" } ] },
    { id: 'japon', index: 5, color: '#BC002D', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418496/japon1_zvydtq.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418482/japon2_autc7p.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418421/japon3_tk0tna.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1772418473/japon4_zdifav.mp4" } ] },
    { id: 'uruguay', index: 6, color: '#0038A8', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711924/Uruguay_1-0_Rep%C3%BAblica_Dominicana_Amistoso_Internacional_Fecha_FIFA_AUFTV_-_AUFTV_720p_h264_youtube_haecxi.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711966/Uruguay_a_Qatar_2022_Cuando_juega_Uruguay_-_Francis_Andreu_-_AUFTV_720p_h264_youtube_t5b9v8.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712022/Uruguay_v_Ghana_2010_FIFA_World_Cup_Match_Highlights_-_FIFA_480p_h264_youtube_glatim.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712073/Uruguay_v_Ghana_Full_Penalty_Shoot-out_2010_FIFAWorldCup_Quarter-Finals_-_FIFA_720p_h264_youtube_wdjf2d.mp4" } ] }, 
    { id: 'tunez', index: 7, color: '#E70013', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711891/Argentina_1_vs_Tunez_1_Atlanta_1996_FUTBOL_RETRO_TV_-_futbolretrocba_480p_h264_youtube_oznp2e.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711931/Famous_win_not_quite_enough_Tunisa_v_France_FIFA_World_Cup_Qatar_2022_-_FIFA_720p_h264_youtube_d4rwg4.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711955/Belgium_v_Tunisia_2018_FIFA_World_Cup_Match_Highlights_-_FIFA_720p_h264_youtube_y7zzj0.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712084/La_DESASTROSA_presentaci%C3%B3n_de_M%C3%89XICO_vs_T%C3%9ANEZ_en_el_MUNDIAL_de_Argentina_1978_-_Joyitas_del_Futbol_Mexicano_720p_h264_youtube_jgzsv8.mp4" } ] },
    { id: 'sudafrica', index: 8, color: '#007749', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711882/Vuvuzela_sound_at_Cape_Town_Stadium-_world_cup_2010_-_SW17Chelsea_480p_h264_youtube_huqwrb.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711886/South_Africa-Mexico_Macarena_goal_celebration_Tshabalala_-_paradoxx7_720p_h264_youtube_wb1vxl.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711981/PEPSI_FOOTBALL_AFRICA_2010_COMMERCIAL_FEATURING_MESSI_KAKA_DROGBA_LAMPARD_HENRY_AND_AKON_-_PepsiFootball_720p_h264_youtube_vxfbll.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712037/Brazil_v_Chile_2010_FIFA_World_Cup_Match_Highlights_-_FIFA_480p_h264_youtube_xzxhl5.mp4" } ] },
    { id: 'uzbekistan', index: 9, color: '#0099B5', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711760/UZBEKISTAN_REACH_FIRST-EVER_WORLD_CUP_UAE_-_Uzbekistan_Highlights_AsianQualifiers_-_Road_To_26_-_AFC_Asian_Cup_720p_h264_youtube_w1ege8.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711771/BLAZING_Uzbekistan_crown_historic_campaign_Uzbekistan_-_Qatar_Highlights_AsianQualifiers_RT_26_-_AFC_Asian_Cup_720p_h264_youtube_idaek4.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711773/Uzbekist%C3%A1n_1-2_Uruguay_Amistoso_Internacional_Fecha_FIFA_octubre_AUFTV_-_AUFTV_720p_h264_youtube_tmpcg1.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711810/EGYPT_UZBEKISTAN_INTERNATIONAL_FRIENDLY_TOURNAMENT_HIGHLIGHTS_14.11.2025_-_FUTBOL_TIME_720p_h264_youtube_peutey.mp4" } ] },
    { id: 'polonia', index: 10, color: '#DC143C', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711637/Japan_v_Poland_2018_FIFA_World_Cup_Match_Highlights_-_FIFA_720p_h264_youtube_qubqtz.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711706/Lewandowski_gets_his_goal_Poland_v_Saudi_Arabia_FIFA_World_Cup_Qatar_2022_-_FIFA_720p_h264_youtube_mbutma.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711740/Ochoa_HEROICS_deny_Lewandowski_Mexico_v_Poland_highlights_FIFA_World_Cup_Qatar_2022_-_FIFA_720p_h264_youtube_ikgpvu.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711834/Selecci%C3%B3n_de_F%C3%BAtbol_de_Polonia_-_32_Ilusiones_-_Televisi%C3%B3n_P%C3%BAblica_480p_h264_youtube_cqiyr9.mp4" } ] },
    { id: 'jamaica', index: 11, color: '#009B3A', videos: [ { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773711897/Jamaica_vs_Bermuda_Concacaf_Qualifiers_2026_World_Cup_-_Concacaf_720p_h264_youtube_uvoumk.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712009/JAMAICA_0-3_VENEZUELA_HIGHLIGHTS_CONMEBOL_COPA_AM%C3%89RICA_USA_2024_-_Copa_Am%C3%A9rica_720p_h264_youtube_wkgw6o.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712115/Futbol_Retro_El_d%C3%ADa_que_Jamaica_ech%C3%B3_a_M%C3%A9xico_de_la_Copa_Oro_2017_M%C3%A9xico_0_-_1_Jamaica_TUDN_-_TUDN_M%C3%A9xico_720p_h264_youtube_sn3gqd.mp4" }, { src: "https://res.cloudinary.com/duonndfih/video/upload/v1773712135/Jamaica_vs._Curacao_Extended_Highlights_CONCACAF_World_Cup_Qualifiers_CBS_Sports_Golazo_-_CBS_Sports_Golazo_America_720p_h264_youtube_gjlcmq.mp4" } ] }
]; 

// --- VARIABLES GLOBALES DE ESTADO ---
let currentCountry = null; 
let homeRenderer, homeScene, homeCamera, homeBall, carouselGroup; 
let homeAnimationId = null; 
let currentScore = 0; 
let cachedI18nElements = null;

window.cambiarIdioma = (lang) => {
    currentLang = lang; 
    const ui = translations[currentLang].ui;

    if (!cachedI18nElements) { 
        cachedI18nElements = document.querySelectorAll('[data-i18n]'); 
    }

    cachedI18nElements.forEach(el => { 
        const key = el.getAttribute('data-i18n');
        if (ui[key]) {
            el.innerHTML = ui[key];
        }
    });

    if (currentCountry) {
        window.mostrarInfoPais(currentCountry.index, true);
        if (!document.getElementById('screen-gallery').classList.contains('hidden')) {
            window.verHighlights();
        }
    }
};

window.addEventListener('load', () => { 
    initBottomSheet(); 
    window.cambiarIdioma('es'); 
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

function createCardTexture(text, colorHex) { 
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 350; 
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)'); 
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
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

let resizeTimeoutHome;

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
        const countryName = translations['es'].countries[c.id].name;
        const mat = new THREE.MeshBasicMaterial({ map: createCardTexture(countryName, c.color), side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(Math.cos(angle)*radius, 1.0, Math.sin(angle)*radius);
        mesh.rotation.y = -angle + Math.PI/2;
        carouselGroup.add(mesh);
    });
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeoutHome);
        resizeTimeoutHome = setTimeout(onWindowResize, 200);
    }, false);
    
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
            if (homeAnimationId) cancelAnimationFrame(homeAnimationId);
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

window.mostrarInfoPais = (index, soloActualizarTexto = false) => {  
    const countryData = countriesData.find(c => c.index === index); 
    if (!countryData) return;
    
    const tCountry = translations[currentLang].countries[countryData.id]; 
    const ui = translations[currentLang].ui;
    
    const esNuevoPais = (currentCountry && currentCountry.index !== index) || !currentCountry; 
    currentCountry = countryData;
    if(esNuevoPais && !soloActualizarTexto) currentScore = 0;

    document.getElementById('country-name').innerText = tCountry.name;
    document.getElementById('stat-titulos').innerText = tCountry.stats.titulos;
    document.getElementById('stat-participaciones').innerText = tCountry.stats.copas;
    
    const factsContainer = document.getElementById('facts-items-container');
    factsContainer.innerHTML = ''; 
    tCountry.facts.forEach((fact, i) => {
        const div = document.createElement('div');
        div.className = 'liquid-glass-light p-5 rounded-2xl border border-white/5 shadow-sm';
        div.innerHTML = `<p class="font-sans text-sm text-gray-200 leading-relaxed"><strong class="text-green-400 mr-1">#${i+1}</strong> ${fact}</p>`;
        factsContainer.appendChild(div);
    });

    const triviaContainer = document.getElementById('trivia-items-container'); 
    triviaContainer.innerHTML = ''; 
    const scoreDiv = document.createElement('div'); 
    scoreDiv.className = 'bg-white/10 border border-white/20 p-3 rounded-xl mb-4 text-center sticky top-0 z-10 backdrop-blur-md';
    scoreDiv.innerHTML = `<span id="trivia-score-text" class="font-display text-2xl text-green-400 tracking-widest">${ui.score_label}: ${currentScore} / ${tCountry.trivia.length}</span>`;
    triviaContainer.appendChild(scoreDiv);
    
    tCountry.trivia.forEach((triv, qIndex) => { 
        const div = document.createElement('div');
        div.className = 'bg-white/5 border border-white/10 rounded-2xl p-5 shadow-inner';
        let optionsHtml = '';
        triv.options.forEach((opt, optIndex) => {
            optionsHtml += `<button onclick="window.verificarRespuesta(this, ${qIndex}, ${optIndex}, ${triv.correct})" class="w-full text-left bg-black/40 hover:bg-white/10 p-3 rounded-xl text-sm mb-2.5 transition-colors border border-transparent font-sans">${opt}</button>`;
        });
        div.innerHTML = `
            <p class="font-bold text-green-400 text-sm mb-4 font-sans">${ui.question_label} ${qIndex + 1}: <span class="text-white font-normal">${triv.q}</span></p>
            <div class="grid grid-cols-1 gap-1">${optionsHtml}</div>
        `;
        triviaContainer.appendChild(div);
    });

    if(esNuevoPais && !soloActualizarTexto){ 
        const firstTab = document.querySelector('#tab-navigation .tab-btn');
        switchTab(firstTab, 'stats', true); 
    }
    
    if(!soloActualizarTexto) minimizarBottomSheet();
};

window.switchTab = (btn, tabId, keepMinimized = false) => { 
    if (!keepMinimized) abrirBottomSheet();
    
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
        btn.innerHTML += ' <img src="assets/icons/correct.png" loading="lazy" class="w-5 h-5 inline-block ml-2">'; playSfx(sfxCorrect); 
        currentScore++;
        const scoreText = document.getElementById('trivia-score-text');
        if (scoreText && currentCountry) {
            const ui = translations[currentLang].ui;
            const tCountry = translations[currentLang].countries[currentCountry.id];
            scoreText.innerText = `${ui.score_label}: ${currentScore} / ${tCountry.trivia.length}`;
            scoreText.parentElement.classList.add('border-green-500');
            setTimeout(() => scoreText.parentElement.classList.remove('border-green-500'), 300);
        }
    } else {
        btn.classList.remove('bg-black/40'); btn.classList.add('bg-red-600', 'text-white', 'border-red-400'); 
        btn.innerHTML += ' <img src="assets/icons/wrong.png" loading="lazy" class="w-5 h-5 inline-block ml-2">'; playSfx(sfxWrong); 
        const correctBtn = buttons[correctIndex];
        correctBtn.classList.remove('bg-black/40'); correctBtn.classList.add('bg-green-600/50', 'text-white', 'border-green-400/50');
    }
};

window.isMinimized = false;

function initBottomSheet() { 
    const sheet = document.getElementById('bottom-sheet');
    const handle = document.getElementById('drag-handle');
    let startY = 0; let currentY = 0; let isDragging = false; 

    const onStart = (y) => { startY = y; isDragging = true; sheet.style.transition = 'none'; handle.style.cursor = 'grabbing'; };
    const onMove = (y) => {
        if (!isDragging) return;
        const deltaY = y - startY;
        if (!window.isMinimized && deltaY > 0) { 
            sheet.style.transform = `translateY(${deltaY}px)`; 
            currentY = deltaY; 
        } 
        else if (window.isMinimized && deltaY < 0) {
            const headerHeight = document.getElementById('sheet-header').offsetHeight;
            const sheetHeight = sheet.offsetHeight;
            const peekOffset = sheetHeight - headerHeight;
            sheet.style.transform = `translateY(${peekOffset + deltaY}px)`; 
            currentY = deltaY; 
        }
    };
    const onEnd = () => {
        if (!isDragging) return;
        isDragging = false; 
        sheet.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)'; 
        handle.style.cursor = 'grab';
        
        if (!window.isMinimized) { 
            if (currentY > 100) minimizarBottomSheet(); 
            else abrirBottomSheet(); 
        } 
        else { 
            if (currentY < -50) abrirBottomSheet(); 
            else minimizarBottomSheet(); 
        }
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
    sheet.classList.remove('translate-y-full'); 
    sheet.style.transform = 'translateY(0)';
    document.getElementById('scan-guide').classList.add('hidden');
    window.isMinimized = false; 
}

function minimizarBottomSheet() { 
    const sheet = document.getElementById('bottom-sheet');
    sheet.classList.remove('translate-y-full'); 
    const headerHeight = document.getElementById('sheet-header').offsetHeight;
    const sheetHeight = sheet.offsetHeight;
    const translateY = sheetHeight - headerHeight; 
    sheet.style.transform = `translateY(${translateY}px)`;
    document.getElementById('scan-guide').classList.add('hidden');
    window.isMinimized = true; 
}

window.ocultarBottomSheetCompleto = () => { 
    const sheet = document.getElementById('bottom-sheet');
    sheet.style.transform = ''; 
    sheet.classList.add('translate-y-full'); 
    document.getElementById('scan-guide').classList.remove('hidden');
    window.isMinimized = false; 
};

//--- FUNCIONES DE NAVEGACIÓN ---

window.irAEscanear = async () => {
    window.isARPaused = false; // Quita la pausa al iniciar
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    if (window.iniciarAR) await window.iniciarAR();
};

window.volverAlHome = () => {
    window.isARPaused = false; 
    currentCountry = null;
    currentScore = 0;
    window.ocultarBottomSheetCompleto();
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
    if (!homeAnimationId) startHomeLoop();
    if(window.detenerAR) window.detenerAR(); 
};

window.abrirManual = () => {
    document.getElementById('screen-home').classList.add('hidden');
    document.getElementById('screen-manual').classList.remove('hidden');
};

window.cerrarManual = () => {
    document.getElementById('screen-manual').classList.add('hidden');
    document.getElementById('screen-home').classList.remove('hidden');
};

window.verHighlights = () => {
    if (!currentCountry) return;
    
    window.isARPaused = true; // PAUSA EL SISTEMA AR MIENTRAS VES VIDEOS
    
    if(window.detenerAudioAR) window.detenerAudioAR();
    if(window.detenerConfetiInmediato) window.detenerConfetiInmediato();

    window.ocultarBottomSheetCompleto(); 
    
    document.getElementById('screen-ar').classList.add('hidden');
    document.getElementById('screen-gallery').classList.remove('hidden');
    
    const ui = translations[currentLang].ui;
    const tCountry = translations[currentLang].countries[currentCountry.id];
    
    document.getElementById('gallery-title').innerText = ui.gallery_title + " - " + tCountry.name;
    
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    
    currentCountry.videos.forEach((vid, index) => {
        const item = document.createElement('div');
        item.className = 'bg-black/40 border border-white/10 rounded-xl overflow-hidden active:scale-95 transition-transform cursor-pointer group';
        item.onclick = () => window.reproducirVideoDesdeGaleria(index); 
        
        const thumbnailSrc = vid.src.replace('.mp4', '.jpg');
        const videoTitle = tCountry.videos[index]; 

        item.innerHTML = `
            <div class="h-32 bg-black relative flex items-center justify-center overflow-hidden group-hover:bg-white/5 transition-colors">
                <img src="${thumbnailSrc}" alt="${videoTitle}" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity">
                <span class="relative z-10 text-4xl opacity-80 group-hover:scale-110 transition-transform drop-shadow-lg">▶️</span>
            </div>
            <div class="p-3 relative z-10 bg-black/40 backdrop-blur-sm">
                <p class="font-sans text-sm font-bold text-white truncate">${videoTitle}</p>
                <p class="font-sans text-xs text-green-400 uppercase tracking-wider mt-1">${ui.watch_video}</p>
            </div>
        `;
        grid.appendChild(item);
    });
};

window.cerrarGaleria = async () => {
    window.isARPaused = false; // QUITA LA PAUSA AL REGRESAR AL AR
    
    document.getElementById('screen-gallery').classList.add('hidden');
    document.getElementById('screen-ar').classList.remove('hidden');
    
    if (currentCountry) {
        document.getElementById('scan-guide').classList.add('hidden'); 
        minimizarBottomSheet(); 
    } else {
        document.getElementById('scan-guide').classList.remove('hidden'); 
    }
    if(window.renudarAudioAR) window.renudarAudioAR();
};

window.reproducirVideoDesdeGaleria = (index) => {
    if (!currentCountry || !currentCountry.videos[index]) return;
    const videoData = currentCountry.videos[index];
    const tCountry = translations[currentLang].countries[currentCountry.id];
    
    document.getElementById('screen-gallery').classList.add('hidden');
    document.getElementById('screen-highlights').classList.remove('hidden');
    const video = document.getElementById('highlight-video');
    document.getElementById('hl-title').innerText = tCountry.videos[index];
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
    playSfx(sfxClick);
    if (window.cambiarAnimacionAR) window.cambiarAnimacionAR(tipo);
    const btns = document.querySelectorAll('.anim-btn');
    btns.forEach(b => { b.classList.remove('border-green-500'); });
    if(event && event.currentTarget) event.currentTarget.classList.add('border-green-500');
};