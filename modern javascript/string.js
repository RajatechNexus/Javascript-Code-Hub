let boy1 = "Promod"
let boy2 = "akash"
//akash is friend of pramod


//we can insert a variable directly in template literals this is called interpolation;
                                                                    

let sentance = `${boy2} is a friend of ${boy1}`
console.log(sentance);

// Escape Sequence characters '\'

let fruit = "hel\"lo";
//console.log(fruit)
console.log(fruit.length)


//properties and method of string

let name = "vishu";
console.log(name.toUpperCase())

let name1 = "AKSHU";
console.log(name1.toLowerCase())
console.log(name1.slice(1,4))  // index 4 value is not included
console.log(name1.replace("AK", "NI"))


// some practice set quetion

const sentance1 = "the quick brown fox jump over the lazy dog" 
const word = 'fox';
console.log(sentance1.includes(word))
console.log(`The word "${word}" ${sentance1.includes(word) ? 'is' : 'is not'} in the sentance`);


// problem 4
let str2 = "please give me 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// problem 5
let friend = "Deepika"
friend[3]= "R"
console.log(friend)  // friend is not change because string is immutable
