/**
 * @param {number} n
 * @return {string}
 * 1, 11, 21, 1211, 111221, ...
 */
var countAndSay = function(n) {
  var ini = "1";
  if(n ==1) {
    return ini;
  }
  
  
  for(var i=1; i<n; i++) {
    var result = '';
    var num = null;
    var freq = 1;
    var arr = ini.split('');
    num = arr[0];

    for(var j=1; j<=arr.length; j++) {
      if(arr[j] == num) {
        freq++;
      } else {
        result += freq+''+num;
        freq = 1;
        num = arr[j];
      }
    }
    ini = result;
  }
  return ini;
};