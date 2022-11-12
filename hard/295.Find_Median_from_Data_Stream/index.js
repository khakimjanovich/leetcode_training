let MedianFinder = function () {

    this.arr = []
    // this.small = []
    // this.large = []
    //
    this.even = true;
    this.len = 0;
};

MedianFinder.prototype.addNum = function (num) {
    this.arr.push(num)
    this.even = !this.even
    this.len++;

    // if (this.even) {
    //     this.small.push(num) // 1. small = [1], large = [] 6. small = [1,3]
    //     this.small.sort((a, b) => a - b);
    //     this.large.push(this.small.pop()) // 2. small = [], large = [1], 7. large = [2,3], small = [1]
    //     this.large.sort((a, b) => a - b)
    // } else {
    //     this.large.push(num) //3. large = [1,2]
    //     this.large.sort((a, b) => a - b)
    //     this.small.push(this.large.shift()) // 4. small = [1], large = [2]
    //     this.small.sort((a, b) => a - b)
    // }
    //
    // this.even = !this.even
};

MedianFinder.prototype.findMedian = function () {
    // if (this.even) {
    //     return (this.small[this.small.length - 1] + this.large[0]) / 2
    // }
    // return this.large[0]

    this.arr.sort((a, b) => a - b);
    if (this.even) {
        return (this.arr[this.len / 2 - 1] + this.arr[this.len / 2]) / 2
    }

    return this.arr[(this.len - 1) / 2]
};

medianFinder = new MedianFinder();
medianFinder.addNum(-1);
console.log(medianFinder.findMedian());
medianFinder.addNum(-2);
console.log(medianFinder.findMedian());
medianFinder.addNum(-3);
console.log(medianFinder.findMedian());
medianFinder.addNum(-4);
console.log(medianFinder.findMedian());
medianFinder.addNum(-5);
console.log(medianFinder.findMedian());


