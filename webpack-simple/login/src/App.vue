<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">Form section</h1>
          <hr/>
          <div class="form-group">
            <label for="email">Mail</label>
            <br>
            <input 
                  type="text" 
                  id="email" 
                  class="form-cotrol"
                  :value="userData.email"
                  @input="userData.email = $event.target.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <br>
            <input 
                  type="password" 
                  id="password" 
                  class="form-cotrol"
                  v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <br>
            <input 
                  type="number" 
                  id="age" 
                  class="form-cotrol"
                  v-model="userData.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea 
                    id="message" 
                    rows="5" 
                    class="form-control"
                    v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input 
                    type="checkbox" 
                    id="sendmail" 
                    value="Sendmail"
                    v-model="sendMail">Sendmail
            </label>
            <label for="sendInfoMail">
              <input 
                    type="checkbox" 
                    id="sendInfoMail" 
                    value="SendInfoMail"
                    v-model="sendMail">Send Infomail
            </label>
            <label for="cutMail">
              <input 
                    type="checkbox" 
                    id="cutMail" 
                    value="cutMail"
                    v-model="sendMail">cut Mail
            </label>        
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input 
                  type="radio" 
                  id="male" 
                  value="Male"
                  v-model="gender">Male
          </label>
          <label for="female">
            <input 
                  type="radio" 
                  id="femail" 
                  value="Female"
                  v-model="gender">Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="priority">Priority</label>
            <select 
                  id="priority" 
                  class="form-control">
              <option v-for="(item, index) in priorities" 
                      :key="index" 
                      :selected="item == 'MEDIUM'">{{ item }}</option>
            </select>
        </div>
      </div> 
       <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="switched">Switched:</label>
          <app-custom-control
                @switchChange="changeSwitch" :value="switchData"></app-custom-control>
        </div>
      </div>   
      <hr/>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <button class="btn btn-primary">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr/>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{ userData.email }}</p>
              <p>Password: {{ userData.password }}</p>
              <p>Age: {{ userData.age }}</p>
              <p style="white-space: pre">Message: {{ message }}</p>
              <p><strong>Send Mail?</strong></p>
              <ul>
                <li v-for="(item, index) in sendMail" 
                    :key="index"> {{ item }}
                </li>
              </ul>
              <p>Gender: {{ gender }}</p>
              <p>Priority</p>
              <p>Switched: {{switchData}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CustomControl from './components/CustomControl.vue'

export default {
  name: 'app',
  data () {
    return {
      userData: {
        email: '',
        password: '',
        age: 0
      },
      message: '',
      sendMail: [],
      gender: 'Male',
      priorities: ['LOW', 'MEDIUM', 'HIGH'],
      switchData: true
    }
  },
  components: {
        appCustomControl: CustomControl
      },
  methods: {
    changeSwitch(value) {
      this.switchData = value
    }
  },
}
</script>

<style>

</style>
