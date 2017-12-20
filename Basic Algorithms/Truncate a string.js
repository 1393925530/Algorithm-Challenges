function truncate(str, num) {
  var result = "";
  if(num <= 3){
  result = str.slice(0,num) + "...";
  }
  else if(str.length > num){
  result = str.slice(0,num - 3) + "...";
  }
  else if(str.length <= num){
    result = str;
  }
  // 请把你的代码写在这里
  return result;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
