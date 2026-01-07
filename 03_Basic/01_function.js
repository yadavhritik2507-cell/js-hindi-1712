function symyName()
{
console.log("H");
console.log("r");
console.log("i");
console.log("t");
console.log("i");
console.log("k");

}

// symyName();

// function addTwoNum(number1 , number2){
//  console.log(number1+number2);

// }

// const result1 = addTwoNum(3,5);

// console.log(`Result1 : ${result1}`);

// addTwoNum(3,4)
// addTwoNum(3,"4")
// addTwoNum(3,"a")
// addTwoNum()

function addTwoNum(number1 , number2){    // after return call next line never excute.
  let result = number1 + number2;
    console.log("Hitesh")
  return result

}

// const result = addTwoNum(3,4);

// console.log(`Result : ${result}`);


function loginUserMessage(username){
    if (username === undefined)
    {
        console.log("Please Enter username");
        return;
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

function calculateCartPrice(...num1){
  return num1;
}

const Total = calculateCartPrice(200,300,400)


let grandTotal = 0;

for(let i = 0; i < Total.length; i++) {

    grandTotal = grandTotal +  Total[i]

}

// console.log(grandTotal);

const user = {
  username : "hitesh",
  prices : 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArray = [200,300,400,700]

function returnSecondValue(getArray){
    console.log(getArray[1]);
}

returnSecondValue(myNewArray)







