function primeArr(min, max){

  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0)
          return false;
    }
    return num > 1;
}

  const answ = []
  for (let i = min; i <= max; i++){
    if (isPrime(i))
      answ.push(i)
  }
  return answ
}

console.log(primeArr(11,20))