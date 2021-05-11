<template>
  <div id="app" class="container">
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">
          {{ current.title }}
        </h2>
      </section>
    </main>
  </div>
</template>

<script>
import song1 from './assets/neffex-grateful.mp3'

export default {
  name: 'app',
  data () {
    return {
      current: {
        title: "SONG TITLE"
      },
      song: [
        {
          title: "Grateful",
          artist: 'Neffex',
          src: song1
        },
        // {
        //   title: "Invincible",
        //   artist: 'Deaf Kev',
        //   src: new Audio(require("./assets/deaf-kev-invicible.mp3"))
        // },
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #FFF; 
}

</style>
