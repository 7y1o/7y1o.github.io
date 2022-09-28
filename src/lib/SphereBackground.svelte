<script lang="ts">
    import {onMount} from "svelte";
    import * as T from 'three';

    const sphereGeo = new T.SphereGeometry(1, 32, 32);
    const pointsMat = new T.PointsMaterial();
    const points    = new T.Points(sphereGeo, pointsMat);
    const scene     = new T.Scene();
    const camera    = new T.PerspectiveCamera();

    pointsMat.size = .015;
    pointsMat.sizeAttenuation = true;
    pointsMat.color = new T.Color(0x000000);

    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
    points.position.set(0, 0, 0);
    scene.add(points);

    let canvas: HTMLCanvasElement;
    onMount(() => {
        const renderer = new T.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(500, 500);
        renderer.setPixelRatio(1.5);
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
            points.rotation.x += .002;
            points.rotation.y += .002;
            points.rotation.z += .002;
        })
    });
</script>

<canvas width="500" height="500" bind:this={canvas}></canvas>

<style>
    canvas {
        width: 100%;
        max-width: 500px;
        aspect-ratio: 1;
    }
</style>
