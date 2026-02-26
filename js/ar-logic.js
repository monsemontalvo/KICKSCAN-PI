// js/ar-logic.js
import * as THREE from 'three';

// --- CORRECCIÓN CRÍTICA ---
// 1. Exponemos THREE globalmente porque MindAR lo busca ahí.
window.THREE = THREE;
// 2. Importamos explícitamente la librería usando la clave del import-map
import 'mindar-image-three'; 
// --------------------------

let mindarThree = null;
let isARRunning = false;

window.iniciarAR = async () => {
    if (isARRunning) return;
    console.log("Intentando iniciar AR...");

    // Verificación de seguridad: ¿Cargó la librería?
    if (!window.MINDAR || !window.MINDAR.IMAGE) {
        alert("Error: La librería MindAR no se cargó correctamente. Revisa la consola.");
        console.error("MINDAR no está definido en window.");
        return;
    }

    try {
        // Configuración de MindAR
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.querySelector("#ar-container"),
            imageTargetSrc: "assets/targets/targets.mind", // Verifica que este archivo exista
            maxTrack: 1,
            uiLoading: "no", 
            uiScanning: "no", 
            uiError: "yes" // Cambiamos a 'yes' para ver si sale error en pantalla
        });

        const {renderer, scene, camera} = mindarThree;

        // Iluminación
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);

        // --- Configuración de Targets (0 a 5) ---
        for (let i = 0; i < 6; i++) {
            const anchor = mindarThree.addAnchor(i);
            
            // Debug visual: Anillo azul para confirmar detección
            const geometry = new THREE.RingGeometry(0.4, 0.5, 32);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x00aaff, side: THREE.DoubleSide, transparent: true, opacity: 0.8 
            });
            const ring = new THREE.Mesh(geometry, material);
            anchor.group.add(ring);
            
            anchor.onTargetFound = () => {
                console.log(`¡Target encontrado! Índice: ${i}`);
                if(window.mostrarInfoPais) window.mostrarInfoPais(i);
            };
        }

        // Iniciar
        await mindarThree.start();
        
        // Loop de renderizado
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

        isARRunning = true;
        console.log("Cámara iniciada correctamente.");

    } catch (error) {
        console.error("Error CRÍTICO al iniciar AR:", error);
        alert("No se pudo abrir la cámara. Revisa: 1. Permisos 2. HTTPS 3. Archivo .mind");
    }
}

window.detenerAR = () => {
    if (mindarThree) {
        mindarThree.stop();
        mindarThree.renderer.setAnimationLoop(null);
        isARRunning = false;
    }
};