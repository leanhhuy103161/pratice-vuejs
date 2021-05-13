<template>
  <div class="list">
    <article 
      v-for="(pokemon, index) in pokemons" :key="'poke'+index"
      @click="setPokemonUrl(pokemon.url)">
      <img :src="imageUrl + pokemon.id + '.png'" alt="">
      <h3>{{ pokemon.name }}</h3>
    </article>
    <div 
      id="scroll-trigger"
      ref="infinitescrolltrigger">loading...<i class="spinner-border"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data() {
    return {
      pokemons: [],
      nextUrl: '',
      currentUrl: '',
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.currentUrl)
      fetch(req)
        .then((res) => {
          if(res.status == '200') {
            // console.log("calling fetch 200");
            // console.log(res);
            return res.json()
          }
        })
        .then((data) => {
          this.nextUrl = data.next
          data.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')
              .filter((part) => {
                return !!part;
              }).pop()
            this.pokemons.push(pokemon)
          });
        })
        .catch((err) => {
          console.log(err);
        })
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        })
      })

      observer.observe(this.$refs.infinitescrolltrigger)
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.fetchData()
    },
    setPokemonUrl(url) {
      this.$emit('setPokemonUrl', url)
    }
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  },
  mounted() {
    this.scrollTrigger();
  }
};
</script>

<style scoped>
img {
  width: 70px;  
  height: 70px;
  margin-bottom: 20px;
  margin-top: 20px
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  width: 100%;
  max-width: 510px;
  margin-left: auto;
  margin-right: auto;
}

.list article {
  cursor: pointer;
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2)
}

#scroll-trigger {
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}

</style>