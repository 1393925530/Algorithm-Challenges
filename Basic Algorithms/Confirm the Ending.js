function confirmEnding(str, target) {
  var result = str.substr(-target.length);
  // 请把你的代码写在这里
  return result == target;
}

confirmEnding("Bastian", "n");

