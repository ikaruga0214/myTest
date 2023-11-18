const reverseString = (str) => {
  let toRevStr = [...str];
  let ans = "";
  while (toRevStr.length > 0) {
    ans = ans.concat(toRevStr.pop());
  }

  return ans;
};

console.log(reverseString("Hello"));
