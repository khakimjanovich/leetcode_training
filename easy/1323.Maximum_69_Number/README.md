You are given a positive integer `num` consisting only of digits `6` and `9`.

Return *the maximum number you can get by changing __at most__ one digit (`6` becomes `9`, and `9` becomes `6`)*.

__Example 1:__

```
Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
```
__Example 2:__
```
Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
```

__Example 3:__
```
Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
```

__Constraints:__

1. `1 <= num <= 10^4`
2. `num` consists of only `6` and `9` digits.
