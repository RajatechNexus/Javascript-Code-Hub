let num = [551, 2,3,4,14,23,45,56]
num.splice(2,4,1021,1022,1023,1024)  // .splice(start index placing to remove , which deleted eelemnt, no of element added)
console.log(num)

let newNum = num.slice(3,5)
console.log(newNum)
