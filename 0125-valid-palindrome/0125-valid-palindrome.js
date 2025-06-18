// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     let newStr = "";
//     let originalStr = "";
//     console.log(s.trim()?.length, "s.trim()?.length")
//     if(s.length === 1 || s.length === 2){
//         if((s.length === 2 && s[1] === s[0]) || s.length === 1){
//             return true
//         }
//     }
//     if(s.trim()?.length){
//         for(let i=0; i<=s.length; i++) {
//             if (s[i] !== " " && s[i] && /^[a-zA-Z0-9]+$/.test(s[i])) {
//                 originalStr += s[i]
//             }
//             if(s[s.length-i] !== " " && s[s.length-i] && /^[a-zA-Z0-9]+$/.test(s[s.length - i])) {
//                 newStr += s[s.length-i]
//             }
//         }
//     } else {
//         if(s.trim()?.length !== s.length) {
//             return true
//         }
//         return false
//     }
//     console.log(originalStr.toLowerCase(),"      test      ", newStr.toLowerCase())
//     return newStr && originalStr && originalStr.toLowerCase() === newStr.toLowerCase()
// };

var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase())
            return false;

        left++;
        right--;
    }

    return true;
};

function isAlphaNum(c) {
    return /^[a-z0-9]$/i.test(c);
}