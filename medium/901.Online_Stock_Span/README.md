Design an algorithm that collects daily price quotes for some stock and 
returns __the span__ of that stock's price for the current day.

The __span__ of the stock's price today is defined as the maximum number of consecutive days 
(starting from today and going backward) for which the stock price was less than or equal to today's price.

For example, if the price of a stock over the next `7` days were `[100,80,60,70,60,75,85]`, 
then the stock spans would be `[1,1,1,2,1,4,6]`.

Implement the `StockSpanner` class:

1. `StockSpanner()` Initializes the object of the class.
2. `int` `next(int price)` Returns the __span__ of the stock's price given that today's price is `price`.


__Example 1:__
```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```

__Constraints:__
1. `1 <= price <= 105`
2. At most `10^4` calls will be made to `next`.
