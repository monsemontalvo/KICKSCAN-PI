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

let mindarThree = null;
let isARRunning = false;
let mixers = []; 
let clock = new THREE.Clock();

// Variables de Control
let currentModel = null;     
let currentAnchor = null;  
let allLoadedModels = []; 

// Variables Audio y Confeti
let audioListener = null;
let currentSound = null;
let confettiSystem = null;

// --- SISTEMA DE CONFETI (HIJO DEL MODELO) ---
function crearConfeti() {
    // NOTA: Creamos las posiciones relativas al centro (0,0,0)
    // porque agregaremos este sistema DENTRO del modelo.
    const particleCount = 400; 
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];
    const colors = [];

    const colorPalette = [
        new THREE.Color(0x00ff00), // Verde
        new THREE.Color(0xffffff), // Blanco
        new THREE.Color(0xff0000), // Rojo
        new THREE.Color(0xffff00), // Amarillo
        new THREE.Color(0x00ccff)  // Azul claro
    ];

    for (let i = 0; i < particleCount; i++) {
        // Origen: un poco arriba del centro (Y=0.5) para que salga de la "cabeza" del modelo
        positions.push(
            (Math.random() - 0.5) * 0.5, // X (rango pequeño inicial)
            (Math.random() * 0.5) + 0.5, // Y 
            (Math.random() - 0.5) * 0.5  // Z
        );
        
        // Velocidad explosiva
        velocities.push(
            (Math.random() - 0.5) * 3,   // X explosión
            (Math.random() * 3) + 2,     // Y explosión fuerte arriba
            (Math.random() - 0.5) * 3    // Z explosión
        );

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.2, // TAMAÑO GRANDE para asegurar visibilidad (compensando escala del modelo)
        vertexColors: true,
        transparent: true,
        opacity: 1.0,
        depthWrite: false, // Ayuda a que se vean brillantes y no se oculten entre sí
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData = { velocities: velocities };
    return particles;
}

function actualizarConfeti() {
    if (!confettiSystem) return;

    const positions = confettiSystem.geometry.attributes.position.array;
    const velocities = confettiSystem.userData.velocities;
    
    // Si la opacidad es 0, borrar
    if (confettiSystem.material.opacity <= 0) {
        if (confettiSystem.parent) confettiSystem.parent.remove(confettiSystem);
        confettiSystem = null;
        return;
    }

    for (let i = 0; i < positions.length / 3; i++) {
        // Mover partícula según velocidad
        positions[i * 3] += velocities[i * 3] * 0.01;     
        positions[i * 3 + 1] += velocities[i * 3 + 1] * 0.01; 
        positions[i * 3 + 2] += velocities[i * 3 + 2] * 0.01; 

        // Gravedad
        velocities[i * 3 + 1] -= 0.05; 
    }
    
    confettiSystem.geometry.attributes.position.needsUpdate = true;
    confettiSystem.material.opacity -= 0.008; // Desvanecer lento
}

// --- FUNCIÓN DE LIMPIEZA TOTAL ---
function resetearModeloAnterior() {
    // 1. Limpiar Confeti (Antes de mover el modelo)
    if (confettiSystem && currentModel) {
        currentModel.remove(confettiSystem); // Quitar confeti del modelo
        confettiSystem = null;
    }

    // 2. Limpiar Modelo 3D
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

    // 3. Detener Audio
    if (currentSound && currentSound.isPlaying) {
        currentSound.stop();
    }

    currentModel = null;
    currentAnchor = null;
}

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
    confettiSystem = null;

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
            
            // --- DETECCIÓN ---
            anchor.onTargetFound = () => {
                if (currentModel && currentModel.userData.countryIndex === i) return;

                console.log(`¡Fiesta en ${i}!`);

                // 1. Limpiar anterior
                resetearModeloAnterior();

                // 2. Activar Nuevo
                const newModel = anchor.group.children.find(child => child.userData.countryIndex === i) || anchor.group.children[0];

                if (newModel) {
                    // PERSISTENCIA (Amazon Style): Pegar a la escena
                    scene.attach(newModel); 
                    newModel.visible = true;
                    currentModel = newModel;
                    currentAnchor = anchor;

                    // 3. AGREGAR CONFETI AL MODELO (HIJO)
                    // Al ser hijo, se mueve con el modelo fijo
                    confettiSystem = crearConfeti();
                    newModel.add(confettiSystem);
                }

                // 4. MÚSICA
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
            
            // ANIMAR CONFETI
            actualizarConfeti();

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