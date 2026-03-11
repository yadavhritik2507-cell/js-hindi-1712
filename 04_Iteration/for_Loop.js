// const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);   
// }

const greeting = "Hello World"


for(const greet of greeting )
{
    if ( greet == " ")
    {
        continue;
    }
    console.log(`Each char is ${greet}`);
    
}