/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for (let i= 0 ; i < s.length; i++){
        let str = "";

        for( let j=i;j<s.length;j++){
            if(str.includes(s[j])){
                break;
            }
            str += s[j];
            max=Math.max(max,str.length);
        }
    }
    return max;
    
};