function convertComputerNumber(num){
  if (num == 11 || num == 12)
    return `${num} компьютеров`
  const numStr = String(num)[String(num).length - 1]
  if (numStr === '0' || numStr === '5' || numStr === '6' || numStr === '7' || numStr === '8' || numStr === '9')
    return `${num} компьютеров`
  if (numStr === '1')
    return `${num} компьютер`
  if (numStr === '2' || numStr === '3' || numStr === '4')
    return `${num} компьютерa`
}

console.log(convertComputerNumber(25))
console.log(convertComputerNumber(41))
console.log(convertComputerNumber(1048))