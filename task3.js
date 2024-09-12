const nums = [100, 4, 200, 1, 3, 2];

const numSet = new Set(nums);
let longestChain = 0;

for (let num of numSet) {
  if (!numSet.has(num - 1)) {
    let currentNum = num;
    let currentChain = 1;

    while (numSet.has(currentNum + 1)) {
      currentNum += 1;
      currentChain += 1;
    }

    longestChain = Math.max(longestChain, currentChain);
  }
}

console.log(longestChain); // Output: 4
