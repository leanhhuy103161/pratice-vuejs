<template>
    <div class="text-center">
        <h3>Error</h3>
        <p>Something not right...</p>
        <button 
            class="btn btn-primary"
            @click="$router.push({ name: 'homepage' })">
                Back to Home page
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>