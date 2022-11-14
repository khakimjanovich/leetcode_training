class UnionFind {
  constructor() {
    this.parent = {};
    this.count = 0;
  }

  find(key) {
    if (this.parent[key] === undefined) {
      this.parent[key] = key;
      this.count++;
    }
    if (this.parent[key] !== key) {
      this.parent[key] = this.find(this.parent[key]);
    }
    return this.parent[key];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) return;
    this.parent[x] = y;
    this.count--;
  }
}

let removeStones = function(stones) {
    const uf = new UnionFind();
    for (const [x, y] of stones) {
        uf.union(x, ~y);
    }
    return stones.length - uf.count;
};
