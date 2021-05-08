<template>
    <div class="row">
        <app-items :key='index' v-for="(item, index) in itemsLO" @click.native='remoteItem(index)'>
            {{item}}
        </app-items>
    </div>
</template>

<script>
import Items from './Items.vue'

export default {
    props: ['itemsLO'],
    components: {
        appItems: Items
    },
    methods: {
        remoteItem(index) {
            this.$emit('itemRemoved', index)
        }
    },
} 
</script>

<style scoped>
    
</style>