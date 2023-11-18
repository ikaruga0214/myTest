function filterNumbersGreaterThanFive(numbers) {
  let ans = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) ans.push(numbers[i]);
  }

  return ans;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers));
