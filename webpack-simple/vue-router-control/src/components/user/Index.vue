<template>
  <div>
    <h3>Please select user to manage:</h3>
    <ul class="list-group">
      <router-link to="/user/1" custom v-slot="{ navigate }">
        <li class="list-group-item" style="cursor: pointer" @click="navigate">
          User 01
        </li>
      </router-link>
      <router-link to="/user/2" custom v-slot="{ navigate }">
        <li class="list-group-item" style="cursor: pointer" @click="navigate">
          User 02
        </li>
      </router-link>
      <router-link to="/user/3" custom v-slot="{ navigate }">
        <li class="list-group-item" style="cursor: pointer" @click="navigate">
          User 03
        </li>
      </router-link>
      <router-link to="/user/4" custom v-slot="{ navigate }">
        <li class="list-group-item" style="cursor: pointer" @click="navigate">
          User 04
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>