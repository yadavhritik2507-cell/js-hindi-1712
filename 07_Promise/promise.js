const prmiseone = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task is complete");
    resolve();
  },1000)
});

prmiseone.then(function(){
    console.log("promise consumed");
    
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tast 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Chai",password:"123"})
        }else{
            reject('Error : Something went wrong')
        }
      
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("the promise is either resloved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript",password:"123"})
        }else{
            reject('Error : JS went wrong')
        }
      
    },1000)
})

async function consumePromiseFive(){
    try {
        const respone = await promiseFive;
    console.log(respone);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive();

async function getAllUsers(){
    try {
        const respone = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await respone.json()
        console.log(data);
        
    } catch (error) {
        console.log("E: ",error);
        
    }
    
}

getAllUsers();


const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms))

async function run() {
    console.log("Hello")
    await sleep(1000);
    console.log("World");
    
}
run();