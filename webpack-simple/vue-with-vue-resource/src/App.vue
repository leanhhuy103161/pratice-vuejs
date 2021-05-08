<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left">
        <h1 class="text-center">Vue resource</h1>
          <div class="form-group">
            <label for="username">username</label>
            <input 
                placeholder="user name"
                id="username"
                type="text"
                class="form-control"
                v-model="user.userName"/>
          </div>
          <div class="form-group">
            <label for="email">email</label>
            <input 
                placeholder="email"
                id="email"
                type="email"
                class="form-control"
                v-model="user.email"/>
          </div>
          <button 
                class="btn btn-block btn-success"
                type="submit"
                @click="submit">Submit
          </button>
          <br>
          <button
                class="btn btn-block btn-dark"
                @click="getData">Get
          </button>
          <br>
          <ul class="list-group">
            <li 
                v-for="(user, index) in userGot"
                :key="index" 
                class="list-group-item">Email: {{user.email}} 
                Name: {{user.userName}}
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        userName: '',
        email: ''
      },
      userGot: []
    }
  },
  methods: {
    submit() {
      // console.log("submir: "+ this.user.email);
      this.$http.post('', this.user)
          .then(res => {
            console.log(res);
          }, err => {
            console.log(err);
          })
    },
    getData() {
      this.$http.get('')
          .then(res => {
            return res.json()
          }, err => {
            console.log(err);
          }).then(data => {
            // console.log(data);
            for (const key in data) {
              // console.log(key);
              this.userGot.push(data[key])
            }
          })
    }
  },
}
</script>

<style>

</style>
