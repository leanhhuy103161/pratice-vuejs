<template>
    <div class="component">
        <h1>The user component</h1>
        <p>I'm the awesome Developer! kono Huy da</p>
        <b>My name: {{ name }}</b>
        <br/>
        <b>My age: {{ age }}</b>
        <br/>
        <button @click="changeName">Change Name</button>
        <hr/>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    v-bind:customName='name' 
                    @nameWasReseted="name = $event"
                    :resetNameFn='resetName'
                    :userAge='age'>
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge='age'
                    @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail'
import UserEdit from './UserEdit'

export default {
    data() {
        return {
            name: 'The Flash',
            age: 22
        }
    },
    methods: {
        changeName() {
            this.name = 'CZ Chi Cho'
        },
        resetName() {
            this.name = 'call back'
        }
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
}
</script>

<style scoped>
    div {
        background-color: rgb(18, 85, 145);
    }
    button {
        background-color: rgb(223, 97, 13);
    }
</style>