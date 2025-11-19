/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right){
        let leftsq = nums[left] * nums[left];
        let rightsq = nums[right] * nums[right];

        if (leftsq > rightsq) {
            result[index] = leftsq;
            left++;
        } else {
            result[index] = rightsq;
            right--;
        }
        index--;
    }
    return result;
    
};
sortedSquares([-4,-1,0,3,100]);