/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num){
    if(num === 0) return "0";

    const negative = num < 0;
    let n = Math.abs(num);
    let digits = [];

    while (n > 0){
        const rem = n % 7;
        digits.push(String(rem));
        n = Math.floor(n / 7);
    }
    const base7 = digits.reverse().join("")
    return negative ? "-" + base7 :base7;

}
console.log(convertToBase7(100));