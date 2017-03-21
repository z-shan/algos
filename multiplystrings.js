// multiply two strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var product = new Array(num1.length+num2.length).fill(0);
  
  
  for(var i=num1.length-1; i>=0; i--) {
    var ch1 = num1.charAt(i).charCodeAt()-'0'.charCodeAt();
    
    for(var j=num2.length-1; j>=0; j--) {
      var ch2 = num2.charAt(j).charCodeAt()-'0'.charCodeAt();
      
      var mul = ch1*ch2;
      
      var pos1 = i+j;
      var pos2 = i+j+1;
      
      var sum = mul+product[pos2]; // present mul result + previous digit 

      product[pos1] += parseInt(sum/10); // store carry
      product[pos2] = sum%10; // store mul result + previous digit result
      
    }
  }
  
  //console.log(product);
  var str = "";
  for( i = 0; i<product.length; i++) {
      if(!(product[i] === 0 && str.length === 0)) {
          str += product[i];
      }
  }
  return str;
};


console.log(multiply("123", "456")); // time O(mn)
