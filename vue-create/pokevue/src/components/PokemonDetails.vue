<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <div class="image" v-if="pokemon">
        <img :src="imageUrl + pokemon.id + '.png'" alt="pokemon image">
      </div>
      <div class="data" v-if="(typeof pokemon)  != 'undefined'">
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">
            {{ pokemon.base_experience }} XP
          </div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">
            {{ pokemon.height / 10 }} m
          </div>
        </div>

        <div class="property">
          <div class="left">Weight</div>
          <div class="right">
            {{ pokemon.weight / 10 }} kg
          </div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div 
            class="type" 
            v-for="(value, index) in pokemon.types"
            :key="'type'+index">
            {{ value.type.name }}</div>
        </div>

        <h3>Abilities</h3>
        <div class="abilities">
          <div 
            class="ability" 
            v-for="(value, index) in pokemon.abilities"
            :key="'value'+index">
            {{ value.ability.name }}</div>
        </div>
      </div>
      <h2 v-else>The pokemon was not found</h2>
      <button class="close" @click="closeDetail">
        X
      </button>
    </div>
    <i v-else class="spinner-border"></i>    
  </div>
</template>

<script>
export default {
  props: [
    'pokemonUrl',
    'imageUrl'
  ],
  data() {
    return {
      show: false,
      pokemon: {}
    }
  },
  methods: {
    fetchData() {
      // console.log(this.pokemonUrl);
      let req = new Request(this.pokemonUrl)
      fetch(req)
        .then((res) => {
          if(res.status == '200') {
            return res.json()
          }
        })
        .then((data) => {
          this.pokemon = data;
          // console.log(this.pokemon.types);
          this.show = true;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    closeDetail() {
      this.$emit('closeDetail')
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
  .detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    padding: 90px 10px 10px;
    width: calc(100% - 0px);
    height: calc(100vh - 0px);
    background: rgba(0,0,0, 0.7);
  }

  .detail .detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 510px;
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0, 0.2),
                0 10px 10px rgba(0,0,0, 0.2);
  }

  .detail .detail-view img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -60px;
    width: 120px;
    margin-left: -59px;
    background-color: #333;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0, 0.2),
                0 10px 10px rgba(0,0,0, 0.2);
  }

  .detail .detail-view h2 {
    text-transform: capitalize;
  }

  .detail .detail-view .data {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
  }

  .detail .detail-view .data .property {
    width: 90%;
    max-width: 400px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .detail .detail-view .data .property .left {
    float: left;
  }

  .detail .detail-view .data .property .right {
    float: right;
  }

  .detail .detail-view .data h3 {
    width: 90%;
    max-width: 400px;
    border-bottom: 1px solid #ccc;

  }

  .detail .detail-view .data .types {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    max-width: 400px;
  }

  .detail .detail-view .data .abilities {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    max-width: 400px;
  }

  .detail .detail-view .data .types .type {
    margin: 0 10px 10px 0;
    padding: 5px 10px;
    border-radius: 20px;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    word-wrap: none;
    word-break: keep-all;
  }

  .detail .detail-view .data .abilities .ability {
    margin: 0 10px 10px 0;
    padding: 5px 10px;
    border-radius: 20px;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    word-wrap: none;
    word-break: keep-all;
  }

  .detail .detail-view .data .types .type {
    background-color: #0A2E50;
  }

  .detail .detail-view .data .abilities .ability {
    background-color: #c73015;
  }

  .detail .detail-view .close {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #efefef;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .detail i {
    font-size: 2rem;
    color: #efefef;
  }


</style>