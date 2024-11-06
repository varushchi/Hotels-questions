function returnMultTable(num){
  const answ = []
  for (let i = 0; i <= num; i++){
    let row = []
    if (i === 0){
      row.push('')
      for (let k = 1; k <= num; k++){
        row.push(k)
      }
      answ.push(row)
      continue
    }
    for (let j = 0; j <= num; j++){
      j === 0 ? row.push(i) : row.push(i*j)
    }
    answ.push(row)
    row = []
  }
  return answ
}

function printMultTable(num){
  for(let i = 0; i <= num; i++){
    let row = ''
    if (i === 0){
      row = row + '\t' + ''
      for (let k = 1; k <= num; k++){
        row = row + '\t' + k
      }
      console.log(row)
      continue
    }
    for (let j = 0; j <= num; j++){
      j === 0 ? row = row + '\t' + i : row = row + '\t' + i*j
    }
    console.log(row)
    row = ''
  }
}

console.log(returnMultTable(5))
printMultTable(5)