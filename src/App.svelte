<script lang="ts">
    import {onMount} from "svelte";
    import anime from "animejs";
    import Cube from './lib/SphereBackground.svelte';
    import Icon from '@iconify/svelte';

    onMount(() => {
        const preloader = document.querySelector<HTMLDivElement>('#preloader');
        if (preloader)
            anime({
                targets: preloader,
                autoplay: true,
                easing: 'easeInCirc',
                duration: 1000,
                opacity: 0,
                complete: (_) => preloader.remove()
            });
    });
</script>

<main>
    <button>{@html 'портфолио'.split('').join('<br/>')}</button>
    <div class="card">
        <div class="background"><Cube/></div>
        <div class="foreground">
            <h1>hello, tylo!</h1>
            <div class="links">
                <a href="https://vk.com/tdesu" target="_blank">
                    <Icon
                        icon="bxl:vk"
                        width="32"
                        color="black"/>
                </a>
                <a href="https://t.me/nullperson" target="_blank">
                    <Icon
                        icon="bxl:telegram"
                        width="32"
                        color="black"/>
                </a>
                <a href="https://wa.link/r2jz9f" target="_blank">
                    <Icon
                        icon="bxl:whatsapp"
                        width="32"
                        color="black"/>
                </a>
                <a href="https://github.com/7y1o" target="_blank">
                    <Icon
                        icon="bxl:github"
                        width="32"
                        color="black"/>
                </a>
            </div>
        </div>
    </div>
    <button>{@html 'знания'.split('').join('<br/>')}</button>
</main>

<style lang="sass">
    main
      position: fixed
      z-index: 1
      top: 0
      left: 0
      right: 0
      bottom: 0
      display: flex
      flex-flow: row nowrap
      align-items: center
      justify-content: space-between

      button
        height: 100%
        width: 10vw
        border: none
        background: none
        text-transform: uppercase
        text-effect: engrave
        writing-mode: vertical-lr
        font: 400 1.5rem 'Golos'
        letter-spacing: 1rem
        text-align: center
        line-height: 1.6

      .card
        position: relative
        z-index: 4
        width: 100%
        max-width: 500px
        display: flex
        align-items: center
        justify-content: center

        .foreground
          position: absolute
          z-index: 3
          top: 0
          left: 0
          right: 0
          bottom: 0
          display: flex
          flex-flow: column
          align-items: center
          justify-content: center

          h1
            font: 800 1.6rem 'Golos'
            padding: 0
            margin: 0 0 3rem
            text-transform: uppercase

          .links
            width: fit-content
            display: flex
            flex-flow: row nowrap
            align-items: center
            justify-content: center

            a
              width: 32px
              height: 32px
              opacity: .5
              border-radius: .25rem
              transition: all .25s cubic-bezier(.25, 0, 0, 1)
              
              &:hover
                opacity: 1
                transform: scale(.95)

              &:not(:last-child)
                margin-right: 1rem


    @media only screen and (max-width: 500px)
      button
        display: none !important
</style>
