<template>
    <div>
        <h2>This is about page!</h2>        
    </div>
</template>

<script>
export default {
    created() {
      console.log('About created');  
    },
    activated() {
        console.log('About activated');
    },
    deactivated() {
        console.log('About deactivated')
    },
    destroyed() {
        console.log('About destroyed');
    },
}
</script>

<style scoped>

</style>