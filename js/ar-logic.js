// js/ar-logic.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exponemos THREE globalmente para MindAR
window.THREE = THREE;
import 'mindar-image-three';

// --- CONFIGURACIÓN DE MODELOS 3D POR PAÍS ---
// Asegúrate de tener los archivos .glb en tu carpeta assets/models/
const modelosPorPais = [
    {
        // Índice 0: MÉXICO
        archivo: 'assets/models/ajolotebailador.glb', 
        scale: [0.5, 0.5, 0.5], // Ajusta el tamaño (x, y, z) si sale muy grande o chico
        position: [0, -0.4, 0]  // Ajusta la posición (x, y, z) para que pise el logo
    },
    {
        // Índice 1: COLOMBIA (Ejemplo)
        archivo: 'assets/models/colombia_ball.glb', // Pon aquí tus otros modelos
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
let mixers = []; // Aquí guardaremos los controladores de animación
let clock = new THREE.Clock(); // Reloj para las animaciones

window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Iniciando AR con modelos 3D...");

    if (!window.MINDAR || !window.MINDAR.IMAGE) {
        console.error("Librería MindAR no cargada.");
        return;
    }

    try {
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.querySelector("#ar-container"),
            imageTargetSrc: "assets/targets/targets.mind", 
            maxTrack: 1, // Solo un país a la vez
            uiLoading: "no", uiScanning: "no", uiError: "yes"
        });

        const {renderer, scene, camera} = mindarThree;

        // Iluminación para los modelos 3D
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(hemisphereLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5); // Luz tipo sol
        scene.add(directionalLight);

        // Cargador de modelos GLB
        const loader = new GLTFLoader();

        // Configurar los 6 Targets (Anchors)
        for (let i = 0; i < 6; i++) {
            const anchor = mindarThree.addAnchor(i);
            const infoModelo = modelosPorPais[i];

            // 1. Cargar el modelo 3D específico para este índice
            // Si no tienes modelo para alguno, puedes comentar la carga para que no de error 404
            if (infoModelo && infoModelo.archivo) {
                loader.load(infoModelo.archivo, (gltf) => {
                    const model = gltf.scene;

                    // Aplicar configuración personalizada (escala y posición)
                    model.scale.set(...infoModelo.scale);
                    model.position.set(...infoModelo.position);

                    // --- MANEJO DE ANIMACIONES (EL AJOLOTE BAILADOR) ---
                    // Si el modelo trae animaciones, reproducimos la primera (Track 0)
                    if (gltf.animations && gltf.animations.length > 0) {
                        const mixer = new THREE.AnimationMixer(model);
                        const action = mixer.clipAction(gltf.animations[0]); 
                        action.play();
                        mixers.push(mixer); // Guardamos para actualizar en el loop
                    }

                    // Agregar modelo al anchor (se pega a la imagen real)
                    anchor.group.add(model);
                    console.log(`Modelo cargado para índice ${i}: ${infoModelo.archivo}`);

                }, undefined, (error) => {
                    console.warn(`No se pudo cargar modelo para índice ${i}. Verifica la ruta: ${infoModelo.archivo}`);
                });
            }
            
            // 2. Eventos de Detección (Muestra la Ventana Deslizante)
            anchor.onTargetFound = () => {
                if(window.mostrarInfoPais) window.mostrarInfoPais(i);
            };
        }

        await mindarThree.start();
        
        // Loop de Renderizado (Actualiza gráficos y animaciones)
        renderer.setAnimationLoop(() => {
            const delta = clock.getDelta();
            
            // Actualizar todas las animaciones (bailes)
            mixers.forEach(mixer => mixer.update(delta));

            renderer.render(scene, camera);
        });
        
        isARRunning = true;

    } catch (error) {
        console.error("Error AR:", error);
        alert("Error al iniciar cámara AR.");
    }
}

window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
        // Limpiar mixers de animación
        mixers = [];
    }
};