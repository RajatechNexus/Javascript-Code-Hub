// property and method of array
let num = [1,2,3,5];
 let b = num.toString()
 console.log(b ,typeof b)

 let c = num.join("_")
 console.log(c , typeof c)
let r= num.pop()
 console.log(r) // return the poppping value that is 5 as output

  let d = num.push(45) //push return the new array length
 console.log(num,d)

 let s =num.shift() //remove an element start from the array
 console.log(s,num)
 let s1 =num.unshift(67)// return new array length
 console.log(s1,num) 

 let arr = [1,2,3,4,5,6,8,23,56]
 delete arr[0]
 console.log(arr)

 let Num = [1,3,4,6,7,54,3];
 let Num1 = [3,4,5,6,7]
 let newArray = num.concat(Num,Num1) // concatinate more than two array in one array
 console.log(newArray);
  console.log(Num, Num1)

const compare = (a,b)=>{          //using compare function sort numerically order 
    return a-b;
}
let arr1 = [1,2,3,4,5,6,8,23,56]
arr.sort(compare)   // only sort method is uses sorting alphabetically not serialize 
arr1.reverse()
console.log(arr1)
