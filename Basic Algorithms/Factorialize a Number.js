function factorialize(num) {
var result = 1;
  if(num == 1){
    result = 1;
  }
  else if(num != 1){
  for(i = 1;i <= num;i++){
  result *= i;
  }
  }
  // 请把你的代码写在这里
  return result;
}

factorialize(5);
