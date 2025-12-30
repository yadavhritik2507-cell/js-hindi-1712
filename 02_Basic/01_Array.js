const myArr = [1,2,3,4,5,6]

const Hero = ["Iron Man","Captain America","Hulk"]

// javascript array copy-opertion creates shollow copies


const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0])
//console.log(myArr);
//console.log(myArr.length)
myArr.push(6)
//console.log(myArr);
//console.log(myArr.length)
myArr.pop()

//console.log(myArr);
//console.log(myArr.length)

//myArr.find(4)

//const myArr3 = console.log(myArr.slice(0,3))
//const myArr4 = console.log(myArr.slice(3,6))

const newarry  = myArr.join()
// join() function change typeof arrya object to string
//console.log(typeof myArr);
//console.log(typeof newarry);

const array1 = [10,20,30,40,50,60]

console.log("A",array1)

console.log(array1.slice(1,3));
console.log("B",array1)

// splice change orginial array but slice not change orginial array
// slice exlcued last index but splice include last index.

console.log("C",array1.splice(1,3));

console.log(array1);









