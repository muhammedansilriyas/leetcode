/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(arr) {
  let index = 0;  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

