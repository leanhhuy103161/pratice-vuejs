<template>
    <div>
        <div class="col-sm-12">
            <h3>Item Added</h3>
            <div class="progress">
                <div :class='progressStatus' 
                role="progressbar" 
                :style="{width: (itemCount / itemMax) * 100 + '%'}" 
                aria-valuenow="50" aria-valuemin="0" 
                aria-valuemax="100">
                {{(itemCount / itemMax) * 100}}%</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // (itemCount / itemMax) * 100 + '%'
    props: ['itemCount', 'itemMax'],
    data() {
        return {
            progressStatus: 'progress-bar',
        }
    },
    watch: {
        itemCount: function() {
            if ((this.itemCount / this.itemMax) * 100 < 40 && (this.itemCount / this.itemMax) * 100 > 20) {
                this.progressStatus = 'progress-bar'
                return this.progressStatus = this.progressStatus + ' bg-success'
            }
            else if ((this.itemCount / this.itemMax) * 100 < 60 && (this.itemCount / this.itemMax) * 100 > 40)  {
                this.progressStatus = 'progress-bar'
                return this.progressStatus = this.progressStatus + ' bg-info'
            }
            else if ((this.itemCount / this.itemMax) * 100 < 80 && (this.itemCount / this.itemMax) * 100 > 60) {
                this.progressStatus = 'progress-bar'
                return this.progressStatus = this.progressStatus + ' bg-warning'
            }
            else if ((this.itemCount / this.itemMax) * 100 > 80){
                this.progressStatus = 'progress-bar'
                return this.progressStatus = this.progressStatus + ' bg-danger'
            }
        }
    },

}
</script>

<style scoped>

</style>