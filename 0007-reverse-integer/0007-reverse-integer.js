/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let num =x;
    while (num !==0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = parseInt(num / 10);
    }
    if (rev < -(2**31) || rev > (2**31 - 1)){
        return 0;
    }
    return rev;
    
};