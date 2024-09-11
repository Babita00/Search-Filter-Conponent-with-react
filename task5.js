// Task 5: You are given an integer array nums and you have to return a
//  new counts array where counts[i] is the number of smaller elements to the right of nums[i].

const nums = [5, 2, 6, 1];
const counts = new Array(nums.length).fill(0);

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] < nums[i]) {
      counts[i]++;
    }
  }

  console.log(counts);
}
