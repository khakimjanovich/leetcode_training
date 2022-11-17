## Count Complete Tree Nodes


Given the `root` of a __complete__ binary tree, return the number of the nodes in the tree.

According to **Wikipedia**, every level, except possibly the last, is completely filled in a complete binary tree, 
and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last 
level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.


__Example 1:__

![](https://assets.leetcode.com/uploads/2021/01/14/complete.jpg)

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

__Example 2:__

```
Input: root = []
Output: 0
```

__Example 3:__

```
Input: root = [1]
Output: 1
```

__Constraints:__

* The number of nodes in the tree is in the range `[0, 5 * 10^4]`.
* `0 <= Node.val <= 5 * 10^4`
* The tree is guaranteed to be **complete**.
