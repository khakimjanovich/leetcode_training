let StockSpanner = function () {
    this.arr = [];
    this.stock = [];
};

/**
 * @param {number} price
 * @return {number|null}
 */
StockSpanner.prototype.next = function (price) {
    if (!price) return null;
    // we insert price to the arr array;
    this.arr.push(price)

    //we get the current price index;
    let index = this.arr.length - 1

    //we calculate the length of the stock and check if the array is not empty if yes then
    //we check if the arr price is less than current price if yes
    while (this.stock.length > 0 && this.arr[this.stock[this.stock.length - 1]] <= price) {
        this.stock.pop()
    }

    //we get the total consecutive days
    // if the stock length is equal to 0 then it has to be index + 1;
    // if the stock length is greater than 0 then it has to be the
    let result = this.stock.length > 0 ? index - this.stock[this.stock.length - 1] : index + 1

    // we push the total consecutive days to the stock
    this.stock.push(index)

    return result
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
