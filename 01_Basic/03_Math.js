const score = 100

//console.log(score);

const num = new Number(223.355);
console.log(num);

//console.log(`After used tofixed() function value of ${num} is ${num.toFixed(2)}`);
//console.log(`After used valueof() function value of ${num} is ${num.valueOf()}`);

//console.log(`After used toLocaleString() function value of ${num} is ${num.toLocaleString('en-IN')}`);

console.log(`After used toLocaleString() function value of ${num} is ${num.toPrecision(4)}`);

//<------------------Maths ----------------------->\\

//console.log(Math);  //Math is Object type Object [Math] {}

///console.log(Math.round(4.6));
//console.log(Math.abs(-89)); // abs() Make negative value to positive

const value1 = 1

const value2 = 10;

console.log(`random value is ${Math.floor(Math.random()*(value2-value1+1)) +1}`);








