function stringKeys(num, string){
  let result = {};
  let key = string;
  if(typeof num != "number" || typeof string != "string"){
    return -1;
  }
  if(num == 0){
    return result;
  }
  if(num == 1){
    result[key] = true;
    return result;
  }
  for (var i = 0; i < num; i++) {
    result[key] = true;
    key += string;
  }
  return result;
}

stringKeys(2,"hello")
module.exports = stringKeys
