let num = [1,3,5,3,5];
num.forEach((i) =>{            //i is initialise that is indexing each element in an array 
    console.log(i*i);
}
)


// Array.from()   used to create an array form object or string ,another things.

const name = "123456";
let arr = Array.from(name);
console.log(arr);
 

// for...of
 for(let item of num){
    console.log(item);
 }

 // for...in
  for(let i in num ){
    
     console.log(i);
  }