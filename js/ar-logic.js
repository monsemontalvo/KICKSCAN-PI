// js/ar-logic.js

let mindarThree = null;
let isARRunning = false;

// Hacemos la función accesible globalmente para que main.js pueda llamarla
window.iniciarAR = async () => {
    // Si ya está corriendo, no hacemos nada
    if (isARRunning) return;

    console.log("Inicializando MindAR...");

    try {
        // 1. Configuración de MindAR
        mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.querySelector("#ar-container"),
            imageTargetSrc: "assets/targets/targets.mind", // RUTA IMPORTANTE
            filterMinCF: 0.0001, 
            filterBeta: 0.001,
        });

        const {renderer, scene, camera} = mindarThree;

        // 2. Iluminación
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);

        // 3. Cargar el Modelo 3D (Balón)
        const loader = new THREE.GLTFLoader();
        loader.load('assets/models/low_poly_soccer_ball_or_football.glb', (gltf) => {
            const model = gltf.scene;
            
            // Ajustes del modelo (escala y posición)
            model.scale.set(0.2, 0.2, 0.2); 
            model.position.set(0, -0.4, 0); 
            
            // Anclar el modelo al primer target (índice 0) del archivo .mind
            const anchor = mindarThree.addAnchor(0);
            anchor.group.add(model);
            
            // Animación: Rotar el balón constantemente
            // Usamos el loop de renderizado para animar
            const clock = new THREE.Clock();
            renderer.setAnimationLoop(() => {
                const delta = clock.getDelta();
                if (model) model.rotation.y += 1.5 * delta; // Velocidad de rotación
                renderer.render(scene, camera);
            });
        });

        // 4. Iniciar el motor
        await mindarThree.start();
        isARRunning = true;
        console.log("AR listo y escaneando...");

    } catch (error) {
        console.error("Error crítico al iniciar AR:", error);
        alert("No se pudo iniciar la cámara AR. Verifica permisos y HTTPS.");
    }
}