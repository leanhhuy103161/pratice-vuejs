<template>
    <div>
        <h1>User</h1>
        <button @click="backToHome" class="btn btn-primary">back Home</button>
        <button @click="goToUserDetail" class="btn btn-danger">User Details</button>
        <button @click="goToUserEdit" class="btn btn-success">Go to User Edit</button>
        <router-view></router-view>
    </div>    
</template>

<script>
import UserDetail from './UserDetail.vue'
export default {
    methods: {
        backToHome() {
            this.$router.push({name: 'homepage'})
        },
        goToUserDetail() {
            this.$router.push('/user/1')
        },
        goToUserEdit() {
            this.$router.push('/user/1/edit')
        }
    },
    components: {
        UserDetail
    }
}
</script>

<style scoped>

</style>