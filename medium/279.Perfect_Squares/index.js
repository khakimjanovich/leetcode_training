/**
 * @param {number} n
 * @return {number}
 */
let numSquares = function (n) {
    //returns if the number x is a valid square root ( can be represented as the square of an integer)
    let isSquare = x => Math.floor(Math.sqrt(x)) ** 2 === x

    if (isSquare(n))
        return 1 // that would be the fact that its equal to itself

    // Legendre's three square theorem: A natural number n can be represented as
    // the sum of AT MOST three squares of integers if and only if : n!= 4^x ( 8*m+7)
    while (n % 4 === 0)
        n /= 4
    //Try contradicting Legendre
    if (n % 8 === 7)
        return 4

    // Manually checking for result 2, because Legendre states  AT MOST 3,
    // so 2 is possible as well
    for (let i = 0; i <= n; i++)
        // if x=n-i*i   and x is a valid square then OBVIOUSLY
        // n=i^2 +sqrt(x)^2  ,so n is a square of two numbers
        if (isSquare(n - i * i))
            return 2

    // Legendre applies
    return 3
};
