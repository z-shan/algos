/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */
var indexOfSubstr = function(haystack, needle) {
    for(var i=0; i<haystack.length; i++) {
        if(haystack.substr(i, needle.length) == needle) {
            return i;
        }
    }
    return -1;
};


// without using substr method
var indexOfSubstr2 = function(haystack, needle) {
    for(var i=0, j=0; i<haystack.length && j<needle.length; i++) {
        if(haystack.charAt(i) == needle.charAt(j)) {
            if(j == needle.length - 1) {
                return i - needle.length + 1;
            }
            j++;
        } else {
            i -= j;
            j=0;
        }
    }
    return needle.length === 0 ? 0 : -1;
};