/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */
var strStr = function(haystack, needle) {
    if(haystack == needle) {
        return 0;
    } else {
        for(var i=0; i<haystack.length; i++) {
            if(haystack.substr(i, needle.length) == needle) {
                return i;
            }
        }
        return -1;
    }
};