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

// Audio
let audioListener = null;
let currentSound = null;

// --- SISTEMA DE CONFETI 2D (PANTALLA COMPLETA) ---
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;
let confettiActive = false;
let confettiTimeout = null;

function initConfettiSystem() {
    // Si ya existe, no lo creamos de nuevo
    if (document.getElementById('confetti-overlay')) return;

    confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-overlay';
    // Estilos para asegurar que esté SIEMPRE encima de todo
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none'; // Permitir clicks a través
    confettiCanvas.style.zIndex = '9999'; // Encima de todo
    document.body.appendChild(confettiCanvas);

    confettiCtx = confettiCanvas.getContext('2d');
    
    // Ajustar tamaño al redimensionar
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
        x: Math.random() * window.innerWidth, // Posición horizontal aleatoria
        y: -20, // Empieza arriba fuera de pantalla
        size: Math.random() * 10 + 5, // Tamaño variado
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2, // Velocidad de caída
        speedX: Math.random() * 2 - 1, // Oscilación lateral
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
    };
}

function updateConfetti() {
    if (!confettiCtx || !confettiCanvas) return;

    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    // Si está activo, generamos nuevas partículas constantemente
    if (confettiActive && confettiParticles.length < 150) {
        confettiParticles.push(createParticle());
    }

    // Actualizar y dibujar partículas existentes
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

        // Eliminar si sale de pantalla
        if (p.y > window.innerHeight) {
            confettiParticles.splice(i, 1);
            i--;
        }
    }

    // Loop de animación
    if (confettiActive || confettiParticles.length > 0) {
        confettiAnimationId = requestAnimationFrame(updateConfetti);
    } else {
        // Si no está activo y no hay partículas, paramos el loop completamente
        confettiAnimationId = null;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

// Función global para el botón
window.lanzarConfettiManual = () => {
    lanzarConfetti(10000); // 10 Segundos
};

function lanzarConfetti(duracion = 10000) {
    initConfettiSystem();
    
    // Reiniciar si ya estaba corriendo
    if (confettiTimeout) clearTimeout(confettiTimeout);
    
    confettiActive = true;
    
    // Si el loop no estaba corriendo, iniciarlo
    if (!confettiAnimationId) {
        updateConfetti();
    }

    // Detener generación tras X segundos
    confettiTimeout = setTimeout(() => {
        confettiActive = false;
    }, duracion);
}

function detenerConfetiInmediato() {
    confettiActive = false;
    confettiParticles = []; 
    
    // MATA el loop de animación anterior para que no interfiera al re-iniciar
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
    // 1. Limpiar Modelo 3D
    if (currentModel) {
        currentModel.visible = false;
        
        // Devolver a su anchor original
        if (currentAnchor) {
            currentAnchor.group.attach(currentModel);
            
            // Resetear transformaciones
            const index = currentModel.userData.countryIndex;
            const config = modelosPorPais[index];
            if (config) {
                currentModel.position.set(...config.position);
                currentModel.scale.set(...config.scale);
                currentModel.rotation.set(0, 0, 0); 
            }
        }
    }

    // 2. Detener Audio
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
    
    // Inicializar sistema de confeti y limpiar cualquier rastro anterior
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

        // Audio Listener
        audioListener = new THREE.AudioListener();
        camera.add(audioListener);

        // Luces
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

            // Cargar Modelo
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

            // Cargar Audio
            if (infoModelo && infoModelo.song) {
                audioLoader.load(infoModelo.song, (buffer) => {
                    infoModelo.audioBuffer = buffer;
                });
            }
            
            // --- EVENTO DETECCIÓN ---
            anchor.onTargetFound = () => {
                if (currentModel && currentModel.userData.countryIndex === i) return;

                console.log(`¡Fiesta en ${i}!`);

                // 1. Mostrar Botón de Confeti
                const btn = document.getElementById('btn-confetti');
                if(btn) btn.classList.remove('hidden');

                // 2. Limpiar anterior
                resetearModeloAnterior();

                // 3. Activar Nuevo Modelo
                const newModel = anchor.group.children.find(child => child.userData.countryIndex === i) || anchor.group.children[0];

                if (newModel) {
                    scene.attach(newModel); 
                    newModel.visible = true;
                    currentModel = newModel;
                    currentAnchor = anchor;

                    // 4. ACTIVAR CONFETI AUTOMÁTICO
                    lanzarConfetti(10000); 
                }

                // 5. MÚSICA
                if (infoModelo.audioBuffer) {
                    if (currentSound && currentSound.isPlaying) currentSound.stop();
                    currentSound = new THREE.Audio(audioListener);
                    currentSound.setBuffer(infoModelo.audioBuffer);
                    currentSound.setLoop(true); 
                    currentSound.setVolume(0.5);
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

// --- LIMPIEZA TOTAL AL SALIR ---
window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        
        resetearModeloAnterior();
        detenerConfetiInmediato(); 
        
        // Ocultar Botón Confeti al salir
        const btn = document.getElementById('btn-confetti');
        if(btn) btn.classList.add('hidden');

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