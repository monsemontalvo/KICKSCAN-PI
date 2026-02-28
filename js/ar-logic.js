import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exponemos THREE globalmente para MindAR
window.THREE = THREE;
import 'mindar-image-three';

// --- CONFIGURACIÓN DE MODELOS 3D POR PAÍS ---
const modelosPorPais = [
    {
        // Índice 0: MÉXICO
        archivo: 'assets/models/ajolotebailador.glb', 
        scale: [0.5, 0.5, 0.5], 
        position: [0, -0.4, 0]
    },
    {
        // Índice 1: COLOMBIA
        archivo: 'assets/models/low_poly_soccer_ball_or_football.glb',
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        // Índice 2: IRLANDA
        archivo: 'assets/models/irlanda_hat.glb', 
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        // Índice 3: ESPAÑA
        archivo: 'assets/models/espana_bull.glb', 
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        // Índice 4: COREA
        archivo: 'assets/models/corea_tiger.glb', 
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    },
    {
        // Índice 5: JAPÓN
        archivo: 'assets/models/japon_samurai.glb', 
        scale: [0.5, 0.5, 0.5],
        position: [0, 0, 0]
    }
];

let mindarThree = null;
let isARRunning = false;
let mixers = []; 
let clock = new THREE.Clock();

// VARIABLES DE CONTROL DE ESTADO
let currentModel = null;     
let currentAnchor = null;  
let allLoadedModels = []; // Lista maestra para limpieza forzosa  

// --- FUNCIÓN CLAVE: RESETEAR MODELO ---
function resetearModeloAnterior() {
    // Si hay un modelo activo, lo apagamos
    if (currentModel) {
        // 1. Ocultarlo INMEDIATAMENTE
        currentModel.visible = false;

        // 2. Si sabemos de dónde vino, lo devolvemos a su caja (anchor) y reseteamos posición
        if (currentAnchor) {
            currentAnchor.group.add(currentModel);
            
            const index = currentModel.userData.countryIndex;
            const config = modelosPorPais[index];
            if (config) {
                currentModel.position.set(...config.position);
                currentModel.scale.set(...config.scale);
                currentModel.rotation.set(0, 0, 0); 
            }
        }
    }
    // Limpiar referencias
    currentModel = null;
    currentAnchor = null;
}

window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR (Modo Limpio)...");

    if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.error("Librería MindAR no cargada.");
        return;
    }

    // --- LIMPIEZA PREVENTIVA ---
    // Borramos cualquier canvas viejo que haya quedado en el contenedor
    const container = document.querySelector("#ar-container");
    if (container) container.innerHTML = '';
    
    // Reiniciamos variables
    mixers = [];
    allLoadedModels = [];
    currentModel = null;
    currentAnchor = null;

    try {
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: container,
            imageTargetSrc: "assets/targets/targets.mind", 
            maxTrack: 1, 
            uiLoading: "no", uiScanning: "no", uiError: "yes"
        });

        const {renderer, scene, camera} = mindarThree;

        // Luces
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

            if (infoModelo && infoModelo.archivo) {
                loader.load(infoModelo.archivo, (gltf) => {
                    const model = gltf.scene;
                    
                    // Configuración inicial
                    model.scale.set(...infoModelo.scale);
                    model.position.set(...infoModelo.position);
                    model.visible = false; // Oculto por defecto
                    
                    model.userData.countryIndex = i;
                    model.userData.originalAnchor = anchor; // Guardamos su "casa"

                    // Animaciones
                    if (gltf.animations && gltf.animations.length > 0) {
                        const mixer = new THREE.AnimationMixer(model);
                        const action = mixer.clipAction(gltf.animations[0]); 
                        action.play();
                        mixers.push(mixer);
                    }

                    // Agregar al ancla
                    anchor.group.add(model);
                    
                    // Guardar en la lista maestra para poder limpiarlos luego
                    allLoadedModels.push(model);
                    
                    console.log(`Modelo cargado índice ${i}`);

                }, undefined, (error) => {
                    console.warn(`Error modelo ${i}: ${infoModelo.archivo}`);
                });
            }
            
            // --- LÓGICA DE DETECCIÓN ---
            anchor.onTargetFound = () => {
                // Si ya estamos viendo este mismo país, ignorar
                if (currentModel && currentModel.userData.countryIndex === i) return;

                console.log(`¡Target encontrado: ${i}!`);

                // 1. LIMPIAR EL ANTERIOR (Si existe)
                resetearModeloAnterior();

                // 2. MOSTRAR EL NUEVO
                if (anchor.group.children.length > 0) {
                    // Buscamos el modelo dentro del anchor (a veces hay luces u otros objetos, buscamos el Scene/Group)
                    // Filtramos por el que tiene nuestro userData
                    const newModel = anchor.group.children.find(child => child.userData.countryIndex === i) || anchor.group.children[0];
                    
                    if (newModel) {
                        // Truco de Persistencia: Pegarlo a la escena global
                        scene.attach(newModel); 
                        newModel.visible = true;

                        currentModel = newModel;
                        currentAnchor = anchor;
                    }
                }

                // 3. UI
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
        alert("Error al iniciar cámara AR.");
    }
}

// --- DETENER Y LIMPIAR ---
window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        
        // 1. Limpiar modelo activo
        resetearModeloAnterior();

        // 2. SEGURIDAD ADICIONAL: Apagar todos los modelos cargados
        // Esto evita que quede alguno flotando si la lógica falló
        allLoadedModels.forEach(model => {
            model.visible = false;
            // Opcional: devolverlos a sus anchors originales si quieres ser muy limpio
            if (model.userData.originalAnchor) {
                model.userData.originalAnchor.group.add(model);
            }
        });

        // 3. Limpiar arrays
        mixers = [];
        allLoadedModels = [];
        
        // 4. Limpiar el canvas del DOM para evitar superposiciones
        const container = document.querySelector("#ar-container");
        if (container) container.innerHTML = '';
    }
};