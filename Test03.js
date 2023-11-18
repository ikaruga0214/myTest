// 我的想法是使用ternary operator比起使用if迴圈看起來比較簡潔

function formatName(firstName, lastName) {
  let formattedName = "";

  formattedName += firstName ? `${firstName}` : "";

  formattedName += lastName ? ` ${lastName}` : "";

  return formattedName;
}

console.log(formatName("yaya"));
