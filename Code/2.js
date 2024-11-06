function commonDiv(arr){
  const answ = []
  for(let j = 2; j < Math.min(...arr); j++){
    let flag = true
    for(let i = 0; i < arr.length; i++){
      if (arr[i] % j !== 0){
        flag = false
        break
      }
    }
    if(flag)
      answ.push(j)
  }
  return answ.length === 0 ? 1 : answ
}

const arr = [42, 12, 18]
console.log(commonDiv(arr))

