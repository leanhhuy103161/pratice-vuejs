<template>
  <div class="searchbar">
    <div class="input-group mb-3">
      <form @submit.prevent="setPokemonUrl">
        <input 
        type="text" 
        class="form-control" 
        placeholder="Search..."
        v-model="searchValue" />
      </form>
      <i class="fas fa-search" @click="setPokemonUrl"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  props: ["apiUrl"],
  methods: {
    setPokemonUrl() {
      if (this.searchValue !== "") {
        this.$emit("setPokemonUrl", this.apiUrl + this.searchValue);
      }
    },
  },
};
</script>

<style scoped>
.searchbar {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding-bottom: 20px;
  margin: auto;
}

.searchbar input {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 40px 10px 10px;
  width: calc(100% + 140px);
  font-size: 1rem;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2),
              0 10px 10px rgba(0,0,0,0.2); 
}

.searchbar div {
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2),
              0 10px 10px rgba(0,0,0,0.2); 
}

i {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.25rem;
  color: #0a2e50;
  cursor: pointer;
  /* border-radius: 5px; */
}

</style>