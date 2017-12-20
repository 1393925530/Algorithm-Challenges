function palindrome(str) {
  var re = /[\W_]/g; ///[\W_]/g  匹配任何非单词字符，即只要不是a-z、A-Z、0-9
  var lowerRegStr = str.toLowerCase().replace(re,"");//消除非单词字符
  var reverseStr = lowerRegStr.split("").reverse().join("");//将转换好的字符串分割为数组再反转后重新转换成字符串
  return lowerRegStr == reverseStr;
  // 请把你的代码写在这里
}



palindrome("eye");
