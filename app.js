new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function(){
                return this.value < 37 ? "keep rolling" : "slow that roll"
            },
            watch: {
                value: function(val){
                    let vWatch = this
                    setTimeout(function() {
                        // if(vWatch.result = "slow that roll")
                        //     { return vWatch.value = 0 }
                        vWatch.value = 0
                    }, 5000);
                }
            },
        }
    });