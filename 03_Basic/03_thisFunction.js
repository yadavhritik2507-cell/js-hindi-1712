
const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
//  console.log(this);
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// function chai(){

//     console.log(this);
    
// }
// chai();

// const chai =() => {
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// console.log(addTwo(2,3));

const addTwo = (num1, num2) => num1 + num2; //implict 

console.log(addTwo(2,3));
const addTwo1 = (num1, num2) => (num1 + num2); //implict 

console.log(addTwo1(2,3));

const myArray = [2,3,4,5,6,7]

// myArray.forEach(() => []);

