/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * a = "11", b = "1" - Return "100".
 */
var addBinary = function(a, b) {
    var rea = a.split('').reverse().join('');
    var reb = b.split('').reverse().join('');
    var result = '';
    var carry = 0;
    var length = Math.max(rea.length, reb.length);

    for(var i=0; i<length; i++) {
        var x = (i < rea.length) ? parseInt(rea.substr(i,1)) : 0;
        var y = (i < reb.length) ? parseInt(reb.substr(i,1)) : 0;
        var sum = x+y+carry;
        carry = (sum>1) ? 1 : 0;
        
        result += (sum%2 === 0) ? '0' : '1';
    }
    if(carry) {
        result += '1';
    }
    return result.split('').reverse().join('');
};