function repeat(str, num) {
var result = [];
  if(num < 0){
  return "";
  }
  else if(num > 0){
  for (i = num;i >0;i--){
  result.push(str);
  }
  }
  // 请把你的代码写在这里
  return result.join("");
}

repeat("abc", 3);
