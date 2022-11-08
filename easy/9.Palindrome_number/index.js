let isPalindrome = function (number) {
    //initialize a variable for collecting numbers
    let reverse = 0;

    //initialize a variable for storing the given number
    let num = number;

    //while loop is used for collecting the number in reverse order
    while (num > 0) {
        //get the last digit of the given number
        //add the last digit to the reverse variable
        reverse = reverse * 10 + num % 10;
        //remove the last digit from the given number
        num = Math.floor(num / 10);
    }

    //check if the given number is equal to the reverse number
    return reverse === number;
}
