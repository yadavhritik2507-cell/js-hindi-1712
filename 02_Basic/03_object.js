// singleton create when we create the object through constructor
//Object.create;

// object literals
const mysym = Symbol("key1")
const JsUser = {
    name : "Hriitk Yadav",
    "Full Name " : "Hritik Yadav", // Full Name Key not acess through JsUser.Full Name JsUser["Full Name"]
    age : 23,
    location : "Noida",
    email : "hritik@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"],
    [mysym] : "Mykey1",

}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser);
JsUser.email = "Hritik@ndtv.com";

//Object.freeze(JsUser)
JsUser.email = "Hritik@email.com";
//console.log(JsUser.email);

JsUser.greeting = function(){
   console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting) // [Function (anonymous)]

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser)








