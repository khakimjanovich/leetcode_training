/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
    //we create roman numbers chart according to what it means in normal numeric
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    //we declare a variable to store the result
    let result = 0;

    //we run the loop s.length number of times! to calculate the result
    for (let i = 0; i < s.length; i++) {
        // the reason why we decrease the result in case it is IV and result is 0 eventually we add V
        // after we decrease I from the result
        if (roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
    }

    //we return the result!
    return result;
};
