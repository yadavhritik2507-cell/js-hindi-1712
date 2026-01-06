// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "RT15181";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "hritikYadav@gmial.com",
    fullName : {
        userFullName : {
            firstName : "Hritik",
            lastName : "Yadav"
        }
    }
}

//console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a",2:"b"};

const obj2 = {3:"c",4:"d"};

//const obj3 = {obj1, obj2};

const obj3 = Object.assign({}, obj1,obj2);
//console.log(obj1);
//console.log(obj3);

const User = [
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:2,
        email : "r@gmail.com"
    },
    {
        id:3,
        email : "i@gmail.com"
    }
]

//console.log(User[0].email);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser);


console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "hitesh"
}
//course.courseinstructor


const {courseinstructor} = course

const {courseinstructor : instructor} = course

console.log(instructor);

//const navbar = ({company}) => {

//};

//navbar(company = "hitesh")

// {
//     "name" : "hitesh",
//     "course" : "js in hindi",
//     "price" : "free"
// }








