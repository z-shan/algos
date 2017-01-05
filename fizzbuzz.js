/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ret = [];
    for(var i=1; i<=n; i++) {
        var str = '';
        if(i%3 === 0) {
            str += 'Fizz';
        }
        if(i%5 === 0) {
            str += 'Buzz';
        }
        ret.push(str || ''+i);
    }
    
    return ret;
};