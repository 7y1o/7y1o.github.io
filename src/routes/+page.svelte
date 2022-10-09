<script lang="ts">
    import {onMount} from "svelte";
    import {
        WebGLRenderer,
        Scene,
        PerspectiveCamera,
        Points,
        SphereGeometry,
        PointsMaterial
    } from 'three';

    // Load on mount
    let bg: HTMLDivElement;
    onMount(() => {
        const renderer = new WebGLRenderer({
            alpha: true,
            antialias: true
        });
        const scene  = new Scene();
        const camera = new PerspectiveCamera();
        const sphere = new SphereGeometry(2);
        const mat    = new PointsMaterial({
            color: 0x000000
        });
        const mesh   = new Points(sphere, mat);

        scene.add(mesh);

        mat.sizeAttenuation = true;
        mat.size = .025;

        camera.aspect = 1;
        camera.position.set(3, 3, 3);
        camera.lookAt(0, 0, 0);

        renderer.setSize(bg.clientWidth, bg.clientHeight);
        renderer.setAnimationLoop(() => {
            mesh.rotation.x += .0025;
            mesh.rotation.y += .0025;
            renderer.render(scene, camera);
        });

        bg.appendChild(renderer.domElement);
    });
</script>

<!--DOM-->
<main>
    <div class="background" bind:this={bg}></div>
    <div class="content">
        <h1>7y1o</h1>
        <p>This site is under construction</p>
    </div>
</main>

<!--Styles-->
<style lang="scss">
    main {
      position: fixed;
      z-index: 3;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #efefef;

      .background {
        position: absolute;
        z-index: 1;
        width: 500px;
        height: 500px;
      }

      .content {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 300px;
        margin: 2rem;

        h1 {
          font: 900 5rem 'Valky';
          color: black;
          text-align: center;
          padding: 0;
          margin: 0;
        }

        p {
          font: 500 1rem 'Inter';
          color: rgba(black, .5);
          text-align: center;
          padding: 0;
          margin: 1rem 0 0;
        }
      }
    }
</style>
