let test = {
    prop: 1,
    other: 'hey',
    fun: function() {
        console.log(this)
        // return true
    }
}
let stat = test.fun();
// console.log(stat);