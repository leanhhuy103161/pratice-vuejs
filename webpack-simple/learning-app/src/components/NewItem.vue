<template>
    <div class="row">
        <form>
            <div class="row">
                <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <label for="">You can say....</label>
                <textarea name="form-group" v-model="item" id="" cols="30" rows="10"></textarea>
            </div>

            </div>
                <div class="row">
                    <div class="ccol-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <button @click.prevent="createItem" class="btn btn-success">
                        Add 
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: ''
        }
    },
    methods: {
        createItem() {
            if (this.item == '') {
                return false;
            }
            else {
                this.$emit('itemAdded', this.item)
                this.item = ''
            }
        }
    },
}
</script>

<style scoped>
    textarea {
        width: 100%;
        resize: none;

    }
    form {
        width: 100%;
    }
</style>