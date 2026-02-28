// js/ar-logic.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exponemos THREE globalmente para MindAR
window.THREE = THREE;
import 'mindar-image-three';

// --- CONFIGURACIÓN DE MODELOS 3D POR PAÍS ---
const modelosPorPais = [
    {
        archivo: 'assets/models/ajolotebailador.glb', 
        scale: [0.5, 0.5, 0.5], 
        position: [0, -0.4, 0]
    },
    {
        archivo: 'assets/models/low_poly_soccer_ball_or_football.glb', // Ejemplo temporal
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    // ... (El resto de tu configuración de modelos sigue igual)
    { archivo: '', scale: [1,1,1], position: [0,0,0] }, // Irlanda
    { archivo: '', scale: [1,1,1], position: [0,0,0] }, // España
    { archivo: '', scale: [1,1,1], position: [0,0,0] }, // Corea
    { archivo: '', scale: [1,1,1], position: [0,0,0] }  // Japón
];

let mindarThree = null;
let isARRunning = false;
let mixers = []; 
let clock = new THREE.Clock();

// VARIABLES PARA CONTROLAR LA PERSISTENCIA
let currentModel = null;     // El modelo que estamos viendo actualmente
let currentAnchor = null;    // El ancla (target) al que pertenece ese modelo original

window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR con modelos persistentes...");

    if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.error("Librería MindAR no cargada.");
        return;
    }

    try {
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.querySelector("#ar-container"),
            imageTargetSrc: "assets/targets/targets.mind", 
            maxTrack: 1, 
            uiLoading: "no", uiScanning: "no", uiError: "yes"
        });

        const {renderer, scene, camera} = mindarThree;

        // Iluminación
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(hemisphereLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5); 
        scene.add(directionalLight);

        const loader = new GLTFLoader();

        // Configurar los 6 Targets
        for (let i = 0; i < 6; i++) {
            const anchor = mindarThree.addAnchor(i);
            const infoModelo = modelosPorPais[i];

            // 1. Cargar modelo
            if (infoModelo && infoModelo.archivo) {
                loader.load(infoModelo.archivo, (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(...infoModelo.scale);
                    model.position.set(...infoModelo.position);
                    
                    // Guardamos una referencia al ID del país en el modelo para usarlo luego
                    model.userData.countryIndex = i;

                    if (gltf.animations && gltf.animations.length > 0) {
                        const mixer = new THREE.AnimationMixer(model);
                        const action = mixer.clipAction(gltf.animations[0]); 
                        action.play();
                        mixers.push(mixer);
                    }

                    anchor.group.add(model);
                    console.log(`Modelo cargado para índice ${i}`);

                }, undefined, (error) => {
                    console.warn(`Error cargando modelo ${i}: ${infoModelo.archivo}`);
                });
            }
            
            // 2. LÓGICA DE DETECCIÓN MODIFICADA (AQUÍ ESTÁ LA MAGIA)
            anchor.onTargetFound = () => {
                // Si ya estamos mostrando ESTE mismo país, no hacemos nada
                if (currentModel && currentModel.userData.countryIndex === i) return;

                console.log("Target detectado: " + i);

                // A. Si había otro modelo mostrándose, lo devolvemos a su ancla original y lo ocultamos
                if (currentModel && currentAnchor) {
                    currentAnchor.group.attach(currentModel); // Regresa a casa
                    currentModel.visible = false; // Se oculta porque el target no está visible
                }

                // B. Buscamos el modelo nuevo dentro del ancla detectada
                if (anchor.group.children.length > 0) {
                    const newModel = anchor.group.children[0];
                    
                    // C. ¡TRUCO! Lo pegamos a la escena principal ("scene")
                    // .attach() mueve el objeto manteniendo su posición visual actual en el mundo
                    scene.attach(newModel);
                    newModel.visible = true;

                    // D. Actualizamos las referencias
                    currentModel = newModel;
                    currentAnchor = anchor;
                }

                // E. Mostrar UI
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
        alert("Error al iniciar cámara AR. Asegúrate de estar en HTTPS.");
    }
}

window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        mixers = [];
        currentModel = null;
        currentAnchor = null;
    }
};