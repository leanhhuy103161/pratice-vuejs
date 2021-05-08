<template>
    <div>
        <div class="title">
            <slot name="title">slot default</slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['cardWords'],
    created() {
      console.log('Card created');  
    },
    activated() {
        console.log('Card activated');
    },
    deactivated() {
        console.log('Card deactivated')
    },
    destroyed() {
        console.log('Card destroyed');
    },
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }

    h2 {
        color: rebeccapurple;
    }

    .title {
        font-style: italic;
    }
</style>