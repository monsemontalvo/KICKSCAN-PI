import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exponemos THREE globalmente para MindAR
window.THREE = THREE;
import 'mindar-image-three';

// --- CONFIGURACIÓN DE MODELOS Y CANCIONES ---
const modelosPorPais = [
    {
        id: 'mexico',
        archivo: 'assets/models/ajolotebailador.glb', 
        song: 'assets/songs/Mexico-mariachiloco.mp3', 
        scale: [0.5, 0.5, 0.5], 
        position: [0, -0.4, 0]
    },
    {
        id: 'colombia',
        archivo: 'assets/models/low_poly_soccer_ball_or_football.glb',
        song: 'assets/songs/Colombia-Caminosdelavida.mp3',
        scale: [0.5, 0.5, 0.5], 
        position: [0, 0, 0]
    },
    {
        id: 'irlanda',
        archivo: 'assets/models/irlanda_hat.glb', 
        song: 'assets/songs/Irlanda-pub.mp3',
        scale: [0.5, 0.5, 0.5], 
        position: [0, 0, 0]
    },
    {
        id: 'espana',
        archivo: 'assets/models/espana_bull.glb', 
        song: 'assets/songs/Espana-Macarena.mp3',
        scale: [0.5, 0.5, 0.5], 
        position: [0, 0, 0]
    },
    {
        id: 'corea',
        archivo: 'assets/models/corea_tiger.glb', 
        song: 'assets/songs/Corea-Gangnamstyle.mp3',
        scale: [0.5, 0.5, 0.5], 
        position: [0, 0, 0]
    },
    {
        id: 'japon',
        archivo: 'assets/models/japon_samurai.glb', 
        song: 'assets/songs/Japon-miku.mp3',
        scale: [0.5, 0.5, 0.5], 
        position: [0, 0, 0]
    }
];

// --- VARIABLES GLOBALES AR ---
let mindarThree = null;
let isARRunning = false;
let mixers = []; 
let clock = new THREE.Clock();

// Control de Modelos
let currentModel = null;     
let currentAnchor = null;  
let allLoadedModels = []; 

// Audio y Volumen
let audioListener = null;
let currentSound = null;
let globalVolume = 0.5; // Volumen inicial
let isMuted = false;
let preMuteVolume = 0.5;

// --- SISTEMA DE AUDIO UI ---
window.ajustarVolumen = (delta) => {
    if (isMuted && delta > 0) {
        isMuted = false;
        actualizarIconoMute();
    }

    globalVolume += delta;
    
    if (globalVolume > 1) globalVolume = 1;
    if (globalVolume < 0) globalVolume = 0;

    if (globalVolume === 0) {
        isMuted = true;
        actualizarIconoMute();
    }

    aplicarVolumen();
};

window.alternarMute = () => {
    isMuted = !isMuted;
    
    if (isMuted) {
        preMuteVolume = globalVolume > 0 ? globalVolume : 0.5;
        globalVolume = 0;
    } else {
        globalVolume = preMuteVolume;
    }
    
    actualizarIconoMute();
    aplicarVolumen();
};

// EXPORTAR VOLUMEN PARA MAIN.JS (SFX)
window.getARVolume = () => {
    return globalVolume;
};

function aplicarVolumen() {
    if (currentSound) {
        currentSound.setVolume(globalVolume);
    }
}

function actualizarIconoMute() {
    const btn = document.getElementById('btn-mute');
    if (btn) {
        if (isMuted || globalVolume === 0) {
            btn.innerText = '🔇';
            btn.classList.add('bg-red-600/40'); 
        } else {
            btn.innerText = '🔊';
            btn.classList.remove('bg-red-600/40');
        }
    }
}


// --- SISTEMA DE CONFETI 2D ---
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;
let confettiActive = false;
let confettiTimeout = null;

function initConfettiSystem() {
    if (document.getElementById('confetti-overlay')) return;

    confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-overlay';
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none'; 
    confettiCanvas.style.zIndex = '9999'; 
    document.body.appendChild(confettiCanvas);

    confettiCtx = confettiCanvas.getContext('2d');
    
    window.addEventListener('resize', resizeConfetti);
    resizeConfetti();
}

function resizeConfetti() {
    if (confettiCanvas) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
}

function createParticle() {
    const colors = ['#22c55e', '#ef4444', '#fbbf24', '#3b82f6', '#ffffff'];
    return {
        x: Math.random() * window.innerWidth, 
        y: -20, 
        size: Math.random() * 10 + 5, 
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2, 
        speedX: Math.random() * 2 - 1, 
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
    };
}

function updateConfetti() {
    if (!confettiCtx || !confettiCanvas) return;

    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    if (confettiActive && confettiParticles.length < 150) {
        confettiParticles.push(createParticle());
    }

    for (let i = 0; i < confettiParticles.length; i++) {
        const p = confettiParticles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.rotation * Math.PI / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        confettiCtx.restore();

        if (p.y > window.innerHeight) {
            confettiParticles.splice(i, 1);
            i--;
        }
    }

    if (confettiActive || confettiParticles.length > 0) {
        confettiAnimationId = requestAnimationFrame(updateConfetti);
    } else {
        confettiAnimationId = null;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

window.lanzarConfettiManual = () => {
    lanzarConfetti(10000); 
};

function lanzarConfetti(duracion = 10000) {
    initConfettiSystem();
    if (confettiTimeout) clearTimeout(confettiTimeout);
    confettiActive = true;
    if (!confettiAnimationId) {
        updateConfetti();
    }
    confettiTimeout = setTimeout(() => {
        confettiActive = false;
    }, duracion);
}

function detenerConfetiInmediato() {
    confettiActive = false;
    confettiParticles = []; 
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
    }
    if (confettiCtx && confettiCanvas) {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
    if (confettiTimeout) clearTimeout(confettiTimeout);
}

// --- FUNCIÓN DE LIMPIEZA AR ---
function resetearModeloAnterior() {
    if (currentModel) {
        currentModel.visible = false;
        if (currentAnchor) {
            currentAnchor.group.attach(currentModel);
            const index = currentModel.userData.countryIndex;
            const config = modelosPorPais[index];
            if (config) {
                currentModel.position.set(...config.position);
                currentModel.scale.set(...config.scale);
                currentModel.rotation.set(0, 0, 0); 
            }
        }
    }

    if (currentSound && currentSound.isPlaying) {
        currentSound.stop();
    }

    currentModel = null;
    currentAnchor = null;
}

// --- INICIO DE AR ---
window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR...");

    const container = document.querySelector("#ar-container");
    if (container) container.innerHTML = '';
    
    mixers = [];
    allLoadedModels = [];
    currentModel = null;
    currentAnchor = null;
    currentSound = null;
    
    initConfettiSystem();
    detenerConfetiInmediato();

    if (!window.MINDAR || !window.MINDAR.IMAGE) {
        alert("Error: Librería MindAR no cargada.");
        return;
    }

    try {
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: container,
            imageTargetSrc: "assets/targets/targets.mind", 
            maxTrack: 1, 
            uiLoading: "no", uiScanning: "no", uiError: "yes"
        });

        const {renderer, scene, camera} = mindarThree;

        audioListener = new THREE.AudioListener();
        camera.add(audioListener);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(hemiLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        const audioLoader = new THREE.AudioLoader();

        for (let i = 0; i < 6; i++) {
            const anchor = mindarThree.addAnchor(i);
            const infoModelo = modelosPorPais[i];

            if (infoModelo && infoModelo.archivo) {
                loader.load(infoModelo.archivo, (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(...infoModelo.scale);
                    model.position.set(...infoModelo.position);
                    model.visible = false;
                    
                    model.userData.countryIndex = i;
                    model.userData.originalAnchor = anchor; 

                    if (gltf.animations && gltf.animations.length > 0) {
                        const mixer = new THREE.AnimationMixer(model);
                        const action = mixer.clipAction(gltf.animations[0]); 
                        action.play();
                        mixers.push(mixer);
                    }
                    anchor.group.add(model);
                    allLoadedModels.push(model);

                }, undefined, (e) => console.warn("Error modelo " + i));
            }

            if (infoModelo && infoModelo.song) {
                audioLoader.load(infoModelo.song, (buffer) => {
                    infoModelo.audioBuffer = buffer;
                });
            }
            
            anchor.onTargetFound = () => {
                if (currentModel && currentModel.userData.countryIndex === i) return;

                console.log(`¡Fiesta en ${i}!`);

                const btn = document.getElementById('btn-confetti');
                if(btn) btn.classList.remove('hidden');
                
                const audioControls = document.getElementById('audio-controls');
                if(audioControls) audioControls.classList.remove('hidden');

                resetearModeloAnterior();

                const newModel = anchor.group.children.find(child => child.userData.countryIndex === i) || anchor.group.children[0];

                if (newModel) {
                    scene.attach(newModel); 
                    newModel.visible = true;
                    currentModel = newModel;
                    currentAnchor = anchor;
                    lanzarConfetti(10000); 
                }

                if (infoModelo.audioBuffer) {
                    if (currentSound && currentSound.isPlaying) currentSound.stop();
                    currentSound = new THREE.Audio(audioListener);
                    currentSound.setBuffer(infoModelo.audioBuffer);
                    currentSound.setLoop(true); 
                    currentSound.setVolume(globalVolume);
                    currentSound.play();
                }

                if(window.mostrarInfoPais) window.mostrarInfoPais(i);
            };
        }

        await mindarThree.start();
        
        renderer.setAnimationLoop(() => {
            const delta = clock.getDelta();
            mixers.forEach(mixer => mixer.update(delta));
            renderer.render(scene, camera);
        });
        
        isARRunning = true;

    } catch (error) {
        console.error("Error AR:", error);
    }
}

window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        
        resetearModeloAnterior();
        detenerConfetiInmediato(); 
        
        const btn = document.getElementById('btn-confetti');
        if(btn) btn.classList.add('hidden');
        
        const audioControls = document.getElementById('audio-controls');
        if(audioControls) audioControls.classList.add('hidden');

        allLoadedModels.forEach(m => {
            m.visible = false;
            if (m.userData.originalAnchor) {
                m.userData.originalAnchor.group.add(m);
            }
        });

        mixers = [];
        allLoadedModels = [];
        
        const container = document.querySelector("#ar-container");
        if (container) container.innerHTML = '';
        
        console.log("AR Detenido.");
    }
};