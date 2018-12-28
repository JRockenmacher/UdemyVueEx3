new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function(){
                return this.value < 26 ? "keep rolling" : "slow that roll"
            },
            watch: {

            }
        }
    });