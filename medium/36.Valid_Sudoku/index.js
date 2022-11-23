/**
 * @param {number[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
    let seen = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let number = board[i][j];
            if (number !== '.') {
                if (!seen.pushIfNotExist(number + " in row " + i) ||
                    !seen.pushIfNotExist(number + " in column " + j) ||
                    !seen.pushIfNotExist(number + " in block " + Math.floor(i / 3) + "-" + Math.floor(j / 3)))
                    return false;
            }
        }
    }
    return true;
};


Array.prototype.pushIfNotExist = function (element) {
    if (!this.includes(element)) {
        this.push(element);
        return true;
    }
    return false;
};
