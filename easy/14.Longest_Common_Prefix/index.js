/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    //we declare a variable to store the result
    let result = '';

    //we declare a variable to store the first string in the array
    let first = strs[0];

    //we set the condition to stop the loop
    for (let i = 0; i < first.length; i++) {
        //we set the condition to stop the loop
        for (let j = 1; j < strs.length; j++) {
            //we check if the first letter of the first string is equal to the first letter of the second string
            //if it is not equal we return the result
            if (first[i] !== strs[j][i]) {
                return result;
            }
        }
        //we add the first letter of the first string to the result
        result += first[i];
    }
    //we return the result
    return result;

};
