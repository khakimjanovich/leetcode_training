## Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:

I pick a number from `1` to `n`. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API `int guess(int num)`, which returns three possible results:

* `-1`: Your guess is higher than the number I picked (i.e. `num > pick`).
* `1`: Your guess is lower than the number I picked (i.e. `num < pick`).
* `0`: your guess is equal to the number I picked (i.e. `num == pick`).
  *Return the number that I picked*.

__Example 1:__

```
Input: n = 10, pick = 6
Output: 6
```

__Example 2:__

```
Input: n = 1, pick = 1
Output: 1
```

__Example 3:__

```
Input: n = 2, pick = 1
Output: 1
```

__Constraints:__

* `1 <= n <= 2^31 - 1`
* `1 <= pick <= n`
