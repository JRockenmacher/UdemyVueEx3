new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function() {
                // changed comp operator from "<" to "=="
                return this.value >= 37 ? "slow that roll" : "keep rolling" 
            },
            watch: {
                // took out parameter in the watch function
                // changed what is being watched from value to result
                result: function() {
                    // changed vWatch to vm like example
                    // changed var declaration from "let" to "var"
                    var vm = this
                    setTimeout(function() {
                        vm.value = 0
                    }, 5000);
                }
            },
        }
    });