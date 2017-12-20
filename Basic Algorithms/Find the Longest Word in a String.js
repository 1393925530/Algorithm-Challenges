function findLongestWord(str) {
  var arr = str.split(" ");//拆成数组
  var length = 0;
  for(i = 0;i < arr.length;i++){
  if(arr[i].length > length){
  length = arr[i].length;
  }
  }
  // 请把你的代码写在这里
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
