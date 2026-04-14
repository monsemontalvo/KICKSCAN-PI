import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

window.THREE = THREE;
import 'mindar-image-three';

const gltfLoaderGlobal = new GLTFLoader();
const audioLoaderGlobal = new THREE.AudioLoader();

const modelosPorPais = [
    {
        id: 'mexico',
        acciones: {
            idle: 'assets/models/MEX IDLE.glb',
            bailar: 'assets/models/ajolotebailador.glb',
            patear: 'assets/models/MEX KICK.glb',
            correr: 'assets/models/MEX RUN.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416620/Mexico-mariachiloco_qurccs.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, -0.4, 0]
    },
    {
        id: 'colombia',
        acciones: {
            idle: 'assets/models/IDLE COL.glb',
            bailar: 'assets/models/DANCE COL.glb',
            patear: 'assets/models/KICK COL.glb',
            correr: 'assets/models/RUN COL.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416622/Colombia-Caminosdelavida_ejz6m3.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'irlanda',
        acciones: {
            idle: 'assets/models/IDLE IRL.glb',
            bailar: 'assets/models/DANCE IRL.glb',
            patear: 'assets/models/KICK IRL.glb',
            correr: 'assets/models/RUN IRL.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416625/Irlanda-pub_wv2bn4.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'espana',
        acciones: {
            idle: 'assets/models/IDLE ESP.glb',
            bailar: 'assets/models/DANCE ESP.glb',
            patear: 'assets/models/KICK ESP.glb',
            correr: 'assets/models/RUN ESP.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416617/Espana-Macarena_tqpzbm.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'corea',
        acciones: {
            idle: 'assets/models/IDLE COR.glb',
            bailar: 'assets/models/DANCE COR.glb',
            patear: 'assets/models/KICK COR.glb',
            correr: 'assets/models/RUN COR.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416620/Corea-Gangnamstyle_ucvonw.mp3',
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
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1772416623/Japon-miku_soxajd.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'uruguay',
        acciones: {
            idle: 'assets/models/IDLE URU.glb',
            bailar: 'assets/models/DANCE URU.glb',
            patear: 'assets/models/KICK URU.glb',
            correr: 'assets/models/RUN URU.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470414/Uruguay-Cuarteto_iz2rrr.mp3', 
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'tunez',
        acciones: {
            idle: 'assets/models/IDLE TUN.glb',
            bailar: 'assets/models/DANCE TUN.glb',
            patear: 'assets/models/KICK TUN.glb',
            correr: 'assets/models/RUN TUN.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470424/Tunez-idk_h7lbkk.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'sudafrica',
        acciones: {
            idle: 'assets/models/IDLE SUD.glb',
            bailar: 'assets/models/DANCE SUD.glb',
            patear: 'assets/models/KICK SUD.glb',
            correr: 'assets/models/RUN SUD.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470422/Sudafrica-Wakawaka_oh6txy.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'uzbekistan',
        acciones: {
            idle: 'assets/models/IDLE UZB.glb',
            bailar: 'assets/models/DANCE UZB.glb',
            patear: 'assets/models/KICK UZB.glb',
            correr: 'assets/models/RUN UZB.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470425/Ubezkistan-idk_q2a3cs.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'polonia',
        acciones: {
            idle: 'assets/models/IDLE POL.glb',
            bailar: 'assets/models/DANCE POL.glb',
            patear: 'assets/models/KICK POL.glb',
            correr: 'assets/models/RUN POL.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470425/Polonia-idk_ephn72.mp3',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        id: 'jamaica',
        acciones: {
            idle: 'assets/models/IDLE JAM.glb',
            bailar: 'assets/models/DANCE JAM.glb',
            patear: 'assets/models/KICK JAM.glb',
            correr: 'assets/models/RUN JAM.glb'
        },
        song: 'https://res.cloudinary.com/duonndfih/video/upload/v1773470417/Jamaica-Bob_Marley_cuwzkf.mp3',
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
let globalSound = null; 
let currentVisibleModel = null;
let globalCurrentAction = 'idle'; 
let globalVolume = 0.5;
let isMuted = false;
let preMuteVolume = 0.5;
let audioListener = null;

// ---> ¡LA VARIABLE CLAVE PARA SOLUCIONAR TU PROBLEMA! <---
let isTargetVisible = false; 

let paisesCargados = {}; 

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
    if (globalSound) globalSound.setVolume(globalVolume);
}

function actualizarIconoMute() {
    const btn = document.getElementById('btn-mute');
    if (btn) {
        if (isMuted || globalVolume === 0) {
            btn.innerHTML = '<img src="assets/icons/mute.png" alt="Mute" loading="lazy" class="w-5 h-5 object-contain">';
            btn.classList.add('bg-red-600/40');
        } else {
            btn.innerHTML = '<img src="assets/icons/play.png" alt="Volumen" loading="lazy" class="w-5 h-5 object-contain">';
            btn.classList.remove('bg-red-600/40');
        }
    }
}

window.detenerAudioAR = () => {
    if (globalSound && globalSound.isPlaying) {
        globalSound.pause();
    }
};

window.renudarAudioAR = () => {
    if (globalSound && !globalSound.isPlaying && isARRunning && !window.isARPaused && isTargetVisible) {
        globalSound.play();
    }
};

// --- CONFETI ---
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;
let confettiActive = false;
let confettiTimeout = null;

let resizeTimeoutConfetti;

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
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeoutConfetti);
        resizeTimeoutConfetti = setTimeout(resizeConfetti, 200);
    });
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

window.detenerConfetiInmediato = detenerConfetiInmediato;

// --- FUNCIONES DE LIMPIEZA DE MEMORIA ---
function liberarMemoriaModelo(modelo) {
    if (!modelo) return;
    modelo.traverse((child) => {
        if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach(mat => {
                    ["map", "lightMap", "bumpMap", "normalMap", "specularMap", "envMap", "alphaMap", "aoMap", "emissiveMap", "metalnessMap", "roughnessMap"].forEach(tex => {
                        if (mat[tex]) {
                            mat[tex].dispose();
                        }
                    });
                    mat.dispose();
                });
            }
        }
    });
}

function resetearModeloAnterior() { 
    if (currentAnchorIndex !== -1 && mindarThree) {
        const anchorAnterior = mindarThree.anchors[currentAnchorIndex];
        
        if (anchorAnterior && anchorAnterior.group) {
            const modelosDelPais = anchorAnterior.group.children.filter(child => child.userData.esModelo);
            
            modelosDelPais.forEach(modelo => {
                liberarMemoriaModelo(modelo);
                anchorAnterior.group.remove(modelo);
                mixers = mixers.filter(m => m.getRoot() !== modelo);
            });
        }
        
        paisesCargados[currentAnchorIndex] = false; 
    }

    if (globalSound && globalSound.isPlaying) { 
        globalSound.stop();
    }

    //MATAR EL AUDIO FANTASMA
    if (globalSound) globalSound.buffer = null;

    currentVisibleModel = null;
    currentAnchorIndex = -1;
}

window.cambiarAnimacionAR = (tipoAccion) => {
    globalCurrentAction = tipoAccion; 

    if (currentAnchorIndex === -1 || !mindarThree) return;

    const anchor = mindarThree.anchors[currentAnchorIndex];
    if (!anchor) return;

    const nuevoModelo = anchor.group.children.find(
        child => child.userData.esModelo && child.userData.accion === tipoAccion
    );

    if (nuevoModelo) {
        if (currentVisibleModel) {
            currentVisibleModel.visible = false;
        }

        nuevoModelo.visible = true; 

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

function procesarModeloCargado(gltf, accion, index, anchor, infoPais) {
    const model = gltf.scene;
    model.scale.set(...infoPais.scale);
    model.position.set(...infoPais.position);

    model.rotation.x = Math.PI / 2;
    model.visible = false;

    model.userData.esModelo = true;
    model.userData.paisIndex = index;
    model.userData.accion = accion;
    model.userData.originalAnchor = anchor;

    if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        const clip = gltf.animations[0];
        mixers.push(mixer);
        model.userData.clip = clip;
    }
    anchor.group.add(model);

    if (currentAnchorIndex === index && accion === globalCurrentAction) {
        if (currentVisibleModel) {
            currentVisibleModel.visible = false;
        }
        model.visible = true;
        currentVisibleModel = model;

        const mixer = mixers.find(m => m.getRoot() === model);
        if (mixer && model.userData.clip) {
            mixer.stopAllAction();
            mixer.clipAction(model.userData.clip).play();
        }
    }
}

// --- CARGA DE RECURSOS CON VALIDACIÓN DE VISIBILIDAD ---
function cargarRecursosDelPais(index, anchor, infoPais) {
    if (infoPais.song) {
        if (!infoPais.audioBuffer) {
            audioLoaderGlobal.load(infoPais.song, (buffer) => { 
                infoPais.audioBuffer = buffer; 
                // CANDADO: ¿Sigue el mismo logo visible?
                if (currentAnchorIndex === index && isTargetVisible) {
                    if (globalSound.isPlaying) globalSound.stop();
                    globalSound.setBuffer(buffer);
                    globalSound.setLoop(true);
                    globalSound.setVolume(globalVolume);
                    if (!window.isARPaused) globalSound.play();
                }
            });
        } else {
            // CANDADO: ¿Sigue el mismo logo visible?
            if (currentAnchorIndex === index && isTargetVisible) {
                if (globalSound.isPlaying) globalSound.stop();
                globalSound.setBuffer(infoPais.audioBuffer);
                globalSound.setLoop(true);
                globalSound.setVolume(globalVolume);
                if (!window.isARPaused) globalSound.play(); 
            }
        }
    }

    const rutaIdle = infoPais.acciones['idle'];
    
    gltfLoaderGlobal.load(rutaIdle, async (gltfIdle) => {
        procesarModeloCargado(gltfIdle, 'idle', index, anchor, infoPais);

        // AQUÍ ESTÁ LA MAGIA: Carga secuencial para no reventar la RAM
        for (const [accion, rutaArchivo] of Object.entries(infoPais.acciones)) {
            if (accion === 'idle') continue; 
            
            // Usamos await para que no cargue la siguiente animación hasta terminar esta
            await new Promise((resolve) => {
                gltfLoaderGlobal.load(rutaArchivo, (gltfSecundario) => {
                    procesarModeloCargado(gltfSecundario, accion, index, anchor, infoPais);
                    resolve(); // Avisa que ya terminó y puede seguir con el otro
                }, undefined, (e) => {
                    console.warn(`Error cargando ${accion} de país ${index}`);
                    resolve(); // Resuelve en caso de error para que no se trabe
                });
            });
        }

    }, undefined, (e) => console.warn(`Error cargando idle de país ${index}`));
}

window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR Persistente...");

    const container = document.querySelector("#ar-container");
    if (container) container.innerHTML = '';

    mixers = [];
    currentAnchorIndex = -1;
    currentVisibleModel = null;
    globalCurrentAction = 'idle';
    isTargetVisible = false; // Reiniciamos el estado
    
    paisesCargados = {}; 

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
            filterMinCF: 0.0001, 
            filterBeta: 0.001    
        });

        const { renderer, scene, camera } = mindarThree;

        audioListener = new THREE.AudioListener();
        camera.add(audioListener);
        
        if (!globalSound) globalSound = new THREE.Audio(audioListener);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(hemiLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        for (let i = 0; i < modelosPorPais.length; i++) {
            const anchor = mindarThree.addAnchor(i);
            const infoPais = modelosPorPais[i];

            anchor.onTargetFound = () => {
                if (window.isARPaused) return; 

                // AVISAMOS QUE HAY UN LOGO VISIBLE
                isTargetVisible = true; 
                console.log(`Detectado: ${infoPais.id}`);

                if (currentAnchorIndex !== i) {
                    resetearModeloAnterior();
                    currentAnchorIndex = i;
                    globalCurrentAction = 'idle'; 

                    if (!paisesCargados[i]) {
                        console.log(`Descargando modelos de ${infoPais.id}...`);
                        cargarRecursosDelPais(i, anchor, infoPais);
                        paisesCargados[i] = true;
                    } 
                } else {
                    if (globalSound && !globalSound.isPlaying && infoPais.audioBuffer && globalSound.buffer === infoPais.audioBuffer) {
                        globalSound.play();
                    }
                }

                lanzarConfetti(8000); 

                const btnConfetti = document.getElementById('btn-confetti');
                const audioControls = document.getElementById('audio-controls');
                const animControls = document.getElementById('anim-controls');

                if (btnConfetti) btnConfetti.classList.remove('hidden');
                if (audioControls) audioControls.classList.remove('hidden');
                if (animControls) animControls.classList.remove('hidden');

                if (window.mostrarInfoPais) window.mostrarInfoPais(i);
            };

            anchor.onTargetLost = () => {
                if (currentAnchorIndex === i) {
                    // AVISAMOS QUE YA NO ESTÁ VISIBLE
                    isTargetVisible = false; 
                    console.log(`Perdido: ${infoPais.id}`);
                    
                    document.getElementById('btn-confetti').classList.add('hidden');
                    document.getElementById('audio-controls').classList.add('hidden');
                    document.getElementById('anim-controls').classList.add('hidden');
                    
                    if (window.ocultarBottomSheetCompleto) {
                        window.ocultarBottomSheetCompleto();
                    }

                    if (globalSound && globalSound.isPlaying) {
                        globalSound.pause();
                    }

                    if (typeof detenerConfetiInmediato === 'function') {
                        detenerConfetiInmediato();
                    }
                }
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
        resetearModeloAnterior();

        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        isTargetVisible = false; // Limpieza profunda

        detenerConfetiInmediato();

        document.getElementById('btn-confetti').classList.add('hidden');
        document.getElementById('audio-controls').classList.add('hidden');
        document.getElementById('anim-controls').classList.add('hidden');

        mixers = [];
        paisesCargados = {};
        
        const container = document.querySelector("#ar-container");
        if (container) container.innerHTML = '';
        console.log("AR Detenido. Memoria liberada.");
    }
};