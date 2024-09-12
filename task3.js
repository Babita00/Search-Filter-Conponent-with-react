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

console.log(longestChain);

//Or we can do as following

let array = [100, 5, 9, 7, 6];
console.log(array);
// converting array to object
let setArr = new Set(array);
console.log(setArr);
let longChain = 0;
let logestSeq = [];
setArr.forEach((num) => {
  if (!setArr.has(num - 1)) {
    let currentNum = num;
    let currentChain = 1;
    let currentSeq = [currentNum];

    while (setArr.has(currentNum)) {
      currentNum++;
      currentChain++;
      currentSeq.push(currentNum);
    }
    if (currentChain > longChain) {
      longChain = currentChain;
      logestSeq = currentSeq;
    }
  }
});
console.log(logestSeq);
console.log(longChain);
