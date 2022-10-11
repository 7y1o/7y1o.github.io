<script lang="ts">
	  import anime from 'animejs';
    import {onMount} from 'svelte';
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

        mesh.scale.set(0, 0, 0);

        bg.appendChild(renderer.domElement);

        anime({
          targets: [mesh.scale],
          x: 1,
          y: 1,
          z: 1,
          duration: 3000,
          easing: 'easeOutExpo'
        })

        anime({
          duration: 1500,
          easing: 'easeOutExpo',
          targets: document.querySelector('h1')?.querySelectorAll('b'),
          opacity: 1,
          translateX: [64, 0],
          delay: (_, i) => i * 100 + 800
        })

        anime({
          targets: '.background',
          opacity: [0, 1],
          duration: 200
        })

        anime({
          targets: document.querySelector('p')?.querySelectorAll('b'),
          easing: 'easeOutExpo',
          opacity: [0, 1],
          marginLeft: [-4, 0],
          delay: (_, i) => i * 50 + 1000,
        })
    });
</script>

<!--DOM-->
<main>
    <div class="background" bind:this={bg}></div>
    <div class="content">
        <h1>{@html '7y1o'.split('').map(el => `<b style="opacity: 0;">${el}</b>`).join('')}</h1>
        <p>{@html 'This site is under construction'.split('').map(el => `<b style="opacity: 0;">${el}</b>`).join('')}</p>
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
