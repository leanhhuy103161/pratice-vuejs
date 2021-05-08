<template>
    <div>
        <h2>This is contact page!</h2>
        <button @click="++count">Count</button> 
        <p>{{count}}</p>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
      console.log('Contact created');  
    },
    activated() {
        console.log('Contact activated');
    },
    deactivated() {
        console.log('Contact deactivated')
    },
    destroyed() {
        console.log('Contact destroyed');
    },
}
</script>

<style scoped>

</style>