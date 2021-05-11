<template>
  <div id="app" class="container">
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">
          {{ current.title }} - <span>{{ current.artist }}</span>
        </h2>
        <div class="control">
          <button 
            class="prev" @click="prevSong">Prev</button>
          <button
            @click="playAudio" 
            class="play" 
            v-if="!isPlaying">Play</button>
          <button
            @click="pauseAudio" 
            class="pause" v-else>Pause</button>
          <button 
            class="next" @click="nextSong">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3>The Playlist</h3>
        <button 
          v-for="song in songs" 
          :key="song.src" 
          @click="playAudio(song)"
          :class="(song.src==current.src)?'song playing':'song'">
          {{ song.title}} - {{ song.artist }}</button>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      current: {
      },
      isPlaying: false,
      index: 0,
      songs: [
        {
          title: "Grateful",
          artist: 'Neffex',
          src: require('./assets/neffex-grateful.mp3')
        },
        {
          title: "Invincible",
          artist: 'Deaf Kev',
          src: require("./assets/deaf-kev-invincible.mp3")
        },
        {
          title: "The Chain",
          artist: 'Fleetwood Mac',
          src: require("./assets/fleetwood-mac-the_chain.mp3")
        },
        {
          title: "Bohemian Rhasody",
          artist: 'Queen',
          src: require("./assets/Queen-BohemianRhapsody.mp3")
        },
        {
          title: "Don't Stop Me Now",
          artist: 'Queen',
          src: require("./assets/Queen-DontStopMeNow.mp3")
        },
      ],
      player: new Audio()
    }
  },
  created() {
    this.current = this.songs[this.index]
    this.player.src = this.current.src
    // console.log(this.player.src);
    // this.player.play();
  },
  methods: {
    playAudio(song) {
      console.log(this.index);
      if(typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src
      }
      this.isPlaying = true
      this.player.play()

      // this.player.addEventListener('ended', function () {
      //   this.index++;
      //   if (this.index > this.songs.length - 1) {
      //     this.index = 0
      //   }

      //   this.current = this.songs[this.index]
      //   this.playAudio(this.current);
      // }).bind(this)
      
    },
    pauseAudio() { 
      this.isPlaying = false
      this.player.pause()
    },
    nextSong() {
      console.log(this.index);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.playAudio(this.current)
    },
    prevSong() {
      console.log(this.index);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.playAudio(this.current)
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

main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}

.song-title {
  color: #53565a;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-title span {
  font-weight: 400;
  font-style: italic;
}

.control {
  display: flex;
  justify-content: center;
  padding: 30px 15px;
  align-items: center;
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.play, .pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #FFF;
  background-color: #cc2e5d;
}

button:hover {
  opacity: 0.8;
}

.next, .prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #FFF;
  background-color: #FF5858;
} 

.playlist {
  padding: 0px 30px;
}

.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

}

.playlist .song:hover {
  color: #FF5858;
}

.playlist .song.playing {
  color: #FFF;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
}

</style>
