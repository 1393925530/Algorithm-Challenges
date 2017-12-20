function titleCase(str) {
  var arr = str.toLowerCase().split(" ");//转换成小写后转成数组
  for(i = 0;i < arr.length;i++){
  var char = arr[i].charAt(0);//char为每个分解的字符串的首字母
  arr[i] = arr[i].replace(char,function replace(char){//使用replace()方法 替换char的首字母为大写
  return char.toUpperCase();
  });
  }
  // 请把你的代码写在这里
  return arr.join(" ");
}

titleCase("I'm a little tea pot");
