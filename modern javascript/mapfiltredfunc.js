let arr = [23,56,34,67];
let a = arr.map((value ,index ,array) =>{          // map(value , index , array)
    console.log(value ,index, array)
    return value +index;   // preform any opration at place index 
})
console.log(a);


// using map method in array
 let arr2 = [12,33,32,55,23]
let a1 = arr2.map((element , index) =>{
    console.log(element , index);
    return element *2;
 })
 console.log(a1);

 //Array reduce method
  let arr3 = [1,3,45,2,3,6,7];
  let a3 = arr3.reduce((a , b) => {
    return a + b;
  })
  console.log(a3);

  // create using function 
  let arr4 = [2,4,5,6,7,8];
  const reduce_func = (h1 ,h2) =>{
    return h1 + h2;
  }
  let a4 = arr4.reduce(reduce_func)
  console.log(a4)