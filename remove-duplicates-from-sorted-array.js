/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var n = nums[0];
    var length = nums.length;
    for(var i=1; i<length; i++) {
      if(n === nums[i]) {
            nums.splice(i,1);
            i--;
            length--;
        } else {
            n = nums[i];
        }
    }
    return nums;
};