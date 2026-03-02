import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exponemos THREE globalmente para MindAR
window.THREE = THREE;
import 'mindar-image-three';

// --- CONFIGURACIÓN DE MODELOS Y ACCIONES ---
const modelosPorPais = [
    {
        id: 'mexico',
        acciones: {
            idle: 'assets/models/MEX IDLE.glb',
            bailar: 'assets/models/ajolotebailador.glb',
            patear: 'assets/models/MEX KICK.glb',
            correr: 'assets/models/MEX RUN.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416620/Mexico-mariachiloco_qurccs.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, -0.4, 0]
    },
    {
        id: 'colombia',
        acciones: {
            idle: 'assets/models/low_poly_soccer_ball_or_football.glb',
            bailar: 'assets/models/low_poly_soccer_ball_or_football.glb',
            patear: 'assets/models/low_poly_soccer_ball_or_football.glb',
            correr: 'assets/models/low_poly_soccer_ball_or_football.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416622/Colombia-Caminosdelavida_ejz6m3.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'irlanda',
        acciones: {
            idle: 'assets/models/irlanda_hat.glb',
            bailar: 'assets/models/irlanda_hat.glb',
            patear: 'assets/models/irlanda_hat.glb',
            correr: 'assets/models/irlanda_hat.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416625/Irlanda-pub_wv2bn4.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'espana',
        acciones: {
            idle: 'assets/models/espana_bull.glb',
            bailar: 'assets/models/espana_bull.glb',
            patear: 'assets/models/espana_bull.glb',
            correr: 'assets/models/espana_bull.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416617/Espana-Macarena_tqpzbm.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'corea',
        acciones: {
            idle: 'assets/models/corea_tiger.glb',
            bailar: 'assets/models/corea_tiger.glb',
            patear: 'assets/models/corea_tiger.glb',
            correr: 'assets/models/corea_tiger.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416620/Corea-Gangnamstyle_ucvonw.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'japon',
        acciones: {
            idle: 'assets/models/MIKU IDLE.glb',
            bailar: 'assets/models/MIKU BAILE.glb',
            patear: 'assets/models/MIKU KICK.glb',
            correr: 'assets/models/MIKU RUN.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416623/Japon-miku_soxajd.mp4',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    }
];

// --- VARIABLES GLOBALES AR ---
let mindarThree = null;
let isARRunning = false;
let mixers = [];
let clock = new THREE.Clock();

// Control de Modelos y Estado
let currentAnchorIndex = -1;
let currentSound = null;
let currentVisibleModel = null;
let globalVolume = 0.5;
let isMuted = false;
let preMuteVolume = 0.5;
let audioListener = null;

// --- AUDIO UI ---
window.ajustarVolumen = (delta) => {
    if (isMuted && delta > 0) { isMuted = false; actualizarIconoMute(); }
    globalVolume += delta;
    if (globalVolume > 1) globalVolume = 1;
    if (globalVolume < 0) globalVolume = 0;
    if (globalVolume === 0) { isMuted = true; actualizarIconoMute(); }
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

window.getARVolume = () => { return globalVolume; };

function aplicarVolumen() {
    if (currentSound) currentSound.setVolume(globalVolume);
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

// NUEVO: Funciones para detener/renudar audio desde fuera
window.detenerAudioAR = () => {
    if (currentSound && currentSound.isPlaying) {
        currentSound.pause();
    }
};

window.renudarAudioAR = () => {
    if (currentSound && !currentSound.isPlaying && isARRunning) {
        currentSound.play();
    }
};

// --- CONFETI ---
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
        x: Math.random() * window.innerWidth, y: -20,
        size: Math.random() * 10 + 5, color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2, speedX: Math.random() * 2 - 1,
        rotation: Math.random() * 360, rotationSpeed: Math.random() * 10 - 5
    };
}

function updateConfetti() {
    if (!confettiCtx || !confettiCanvas) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    if (confettiActive && confettiParticles.length < 150) confettiParticles.push(createParticle());
    for (let i = 0; i < confettiParticles.length; i++) {
        const p = confettiParticles[i];
        p.y += p.speedY; p.x += p.speedX; p.rotation += p.rotationSpeed;
        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.rotation * Math.PI / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        confettiCtx.restore();
        if (p.y > window.innerHeight) { confettiParticles.splice(i, 1); i--; }
    }
    if (confettiActive || confettiParticles.length > 0) confettiAnimationId = requestAnimationFrame(updateConfetti);
    else { confettiAnimationId = null; confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); }
}

window.lanzarConfettiManual = () => { lanzarConfetti(10000); };
function lanzarConfetti(duracion = 10000) {
    initConfettiSystem();
    if (confettiTimeout) clearTimeout(confettiTimeout);
    confettiActive = true;
    if (!confettiAnimationId) updateConfetti();
    confettiTimeout = setTimeout(() => { confettiActive = false; }, duracion);
}
function detenerConfetiInmediato() {
    confettiActive = false; confettiParticles = [];
    if (confettiAnimationId) { cancelAnimationFrame(confettiAnimationId); confettiAnimationId = null; }
    if (confettiCtx && confettiCanvas) confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    if (confettiTimeout) clearTimeout(confettiTimeout);
}

// --- FUNCIÓN LIMPIEZA / RESET ---
function resetearModeloAnterior() {
    if (currentVisibleModel) {
        currentVisibleModel.visible = false;

        // Devolver el modelo a su Anchor original
        if (currentVisibleModel.userData.originalAnchor) {
            currentVisibleModel.userData.originalAnchor.group.attach(currentVisibleModel);
        }

        // Restaurar posición original
        const index = currentVisibleModel.userData.paisIndex;
        const config = modelosPorPais[index];
        if (config) {
            currentVisibleModel.position.set(...config.position);
            currentVisibleModel.scale.set(...config.scale);
            currentVisibleModel.rotation.set(0, 0, 0);
        }
    }

    if (currentSound && currentSound.isPlaying) {
        currentSound.stop();
    }

    currentVisibleModel = null;
    currentAnchorIndex = -1;
}

// --- CAMBIAR ANIMACIÓN ---
window.cambiarAnimacionAR = (tipoAccion) => {
    if (currentAnchorIndex === -1 || !mindarThree) return;

    const anchor = mindarThree.anchors[currentAnchorIndex];
    if (!anchor) return;

    let positionRef = currentVisibleModel ? currentVisibleModel.position.clone() : null;
    let rotationRef = currentVisibleModel ? currentVisibleModel.rotation.clone() : null;

    if (currentVisibleModel) {
        currentVisibleModel.visible = false;
        if (currentVisibleModel.userData.originalAnchor) {
            currentVisibleModel.userData.originalAnchor.group.attach(currentVisibleModel);
        }
    }

    // Buscar el nuevo modelo deseado
    const nuevoModelo = anchor.group.children.find(
        child => child.userData.esModelo && child.userData.accion === tipoAccion
    );

    if (nuevoModelo) {
        nuevoModelo.visible = true;

        // PERSISTENCIA: Pegar a la escena principal
        mindarThree.scene.attach(nuevoModelo);

        if (positionRef) {
            nuevoModelo.position.copy(positionRef);
            nuevoModelo.rotation.copy(rotationRef);
        }

        const mixer = mixers.find(m => m.getRoot() === nuevoModelo);
        if (mixer) {
            mixer.stopAllAction();
            if (nuevoModelo.userData.clip) {
                const action = mixer.clipAction(nuevoModelo.userData.clip);
                action.play();
            }
        }

        currentVisibleModel = nuevoModelo;
    }
};


// --- INICIO DE AR ---
window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR Persistente...");

    const container = document.querySelector("#ar-container");
    if (container) container.innerHTML = '';

    mixers = [];
    currentAnchorIndex = -1;
    currentVisibleModel = null;
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
            uiLoading: "no", uiScanning: "no", uiError: "yes",
            filterMinCF: 0.0001, //Reduce el temblor (jitter)
            filterBeta: 0.001    //Suaviza el movimiento
        });

        const { renderer, scene, camera } = mindarThree;

        audioListener = new THREE.AudioListener();
        camera.add(audioListener);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(hemiLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        const audioLoader = new THREE.AudioLoader();

        for (let i = 0; i < modelosPorPais.length; i++) {
            const anchor = mindarThree.addAnchor(i);
            const infoPais = modelosPorPais[i];

            if (infoPais.song) {
                audioLoader.load(infoPais.song, (buffer) => { infoPais.audioBuffer = buffer; });
            }

            for (const [accion, rutaArchivo] of Object.entries(infoPais.acciones)) {
                loader.load(rutaArchivo, (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(...infoPais.scale);
                    model.position.set(...infoPais.position);
                    model.visible = false;

                    model.userData.esModelo = true;
                    model.userData.paisIndex = i;
                    model.userData.accion = accion;
                    model.userData.originalAnchor = anchor;

                    if (gltf.animations && gltf.animations.length > 0) {
                        const mixer = new THREE.AnimationMixer(model);
                        const clip = gltf.animations[0];
                        const actionPlay = mixer.clipAction(clip);
                        actionPlay.play();
                        mixers.push(mixer);
                        model.userData.clip = clip;
                    }
                    anchor.group.add(model);

                }, undefined, (e) => console.warn(`Error cargando ${accion} de país ${i}`));
            }

            // --- DETECCIÓN DEL PAÍS ---
            anchor.onTargetFound = () => {
                if (currentAnchorIndex === i) return; // Si es el mismo país, ignorar.

                console.log(`Detectado: ${infoPais.id}`);

                // 1. Limpiar el país anterior (modelo y audio)
                resetearModeloAnterior();

                currentAnchorIndex = i;

                // 2. Mostrar Controles UI
                const btnConfetti = document.getElementById('btn-confetti');
                const audioControls = document.getElementById('audio-controls');
                const animControls = document.getElementById('anim-controls');

                if (btnConfetti) btnConfetti.classList.remove('hidden');
                if (audioControls) audioControls.classList.remove('hidden');
                if (animControls) animControls.classList.remove('hidden');

                // 3. Activar modelo IDLE
                window.cambiarAnimacionAR('idle');

                // 4. Audio
                if (infoPais.audioBuffer) {
                    currentSound = new THREE.Audio(audioListener);
                    currentSound.setBuffer(infoPais.audioBuffer);
                    currentSound.setLoop(true);
                    currentSound.setVolume(globalVolume);
                    currentSound.play();
                }

                if (window.lanzarConfettiManual) window.lanzarConfettiManual();

                // 5. Actualizar interfaz de datos (Main.js)
                if (window.mostrarInfoPais) window.mostrarInfoPais(i);
            };
        }

        await mindarThree.start();
        isARRunning = true;

        renderer.setAnimationLoop(() => {
            const delta = clock.getDelta();
            mixers.forEach(mixer => mixer.update(delta));
            renderer.render(scene, camera);
        });

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

        document.getElementById('btn-confetti').classList.add('hidden');
        document.getElementById('audio-controls').classList.add('hidden');
        document.getElementById('anim-controls').classList.add('hidden');

        mixers = [];
        const container = document.querySelector("#ar-container");
        if (container) container.innerHTML = '';
        console.log("AR Detenido.");
    }
};