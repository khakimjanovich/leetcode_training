/**
 * @param {string} s
 * @return {string}
 */
let removeDuplicates = function (s) {
    // initialize an array for collecting letters
    let array = [];

    for(let i=0; i<s.length; i++){
        //array.length === 0 is used for the initial case!
        // Math.abs gets the absolute value of given number
        // String.prototype.charCodeAt(i) returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
        // We get subtraction of two char codes if it is zero then it is the same letter
        // array.push method adds given value to the next key!
        // array.pop method removes last value from the array
        if(array.length === 0 || Math.abs(s.charCodeAt(i) - array[array.length-1].charCodeAt(0)) !== 0){
            array.push(s[i]);
        } else {
            array.pop();
        }
    }

    //array.join method joins all the array values with the given value and creates new string
    return array.join("");
};
