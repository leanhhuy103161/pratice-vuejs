<template>
    <div class="component">
        <h3>You can edit the User in here</h3>
        <p>Edit me!</p>
        <p>My age: {{ age }}</p>
        <button @click="editAge"> Edit age </button>
    </div>
</template>

<script>
import {eventBus} from '../main'

export default {
    data() {
        return {
            age: this.userAge
        }
    },
    props: {
        userAge: Number
    },
    methods: {
        editAge: function() {
            this.age = 18
            // this.$emit('ageWasEdited', this.age)
            eventBus.$emit('ageWasEdited', this.age)
        }
    },
}
</script>

<style scoped>
    div {
        background-color: coral;
    }
</style>