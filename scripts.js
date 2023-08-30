// scripts.js
const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ],
};

// Only edit below
const [first = 1] = data.lists[0][1] || [];
const [second = 1] = data.lists[1][1] || [];
const [third = 1] = data.lists[2][1] || [];
const result = [];

const extractBiggest = () => {
  if (first > second && first > third) {
const biggest = data.lists[0][1].pop();
    result.push(biggest);
    return biggest;
  }
  if (second > third) {
    const biggest = data.lists[1][1].pop();
result.push(biggest);
    return biggest;
  }
  const biggest = data.lists[2][1].pop();
  result.push(biggest);
  return biggest;
};
// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
console.log(result);