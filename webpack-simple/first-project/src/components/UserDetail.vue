<template>
    <div class="component">
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My name: {{emitName}}</p>
        <p>My name was reversed: {{ reverseName() }}</p>
        <p>My age: {{ editAge }}</p>
        <button @click="resetName()">reset name</button>
        <button @click="resetNameFn()">reset with call back</button>
    </div>
</template>

<script>
import {eventBus} from '../main'

// props dung de truyen du lieu tu component cha qua component con
// con chuyen sang cha qua cac su kien
export default {
    data() {
        return {
            emitName: this.customName,
            editAge: this.userAge
        }
    },
    props: {
        customName: {
            type: String,
            default: function() {
                return "Thunder Lord"
            }
        },
        userAge: Number,
        resetNameFn: Function
    },
    methods: {
        reverseName() {
            this.emitName = this.customName
            return this.emitName.split("").reverse().join("")
        },
        resetName() {
            this.emitName = "Zues"
            this.$emit('nameWasReseted', this.emitName)
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.editAge = age   
        })
    },
}
</script>

<style scoped>
    div {
        background-color:brown
    }
</style>