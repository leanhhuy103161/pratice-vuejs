<template>
  <div class="container">
    <h1 class="title">Pokemon's</h1>
    <pokemon-search
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl" />
    <pokemon-list 
      :imageUrl="imageUrl" 
      :apiUrl="apiUrl" 
      @setPokemonUrl="setPokemonUrl" />
    <pokemon-details
      v-if="showDetail" 
      :imageUrl="imageUrl" 
      :pokemonUrl="pokemonUrl"
      @closeDetail="closeDetail" />
  </div>
</template>

<script>
import PokemonDetails from './PokemonDetails.vue';
import PokemonList from "./PokemonList.vue";
import PokemonSearch from './PokemonSearch.vue';

export default {
  data() {
    return {
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: '',
      showDetail: false,
    };
  },
  components: {
    PokemonList,
    PokemonSearch,
    PokemonDetails,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = '';
      this.showDetail = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Acme');

.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  background: radial-gradient(#156F99, #0A2E50);

  font-family: 'Acme', arial;
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  margin-bottom: 40px;
  color: #efefef;
  font-size: 80px;
}
</style>