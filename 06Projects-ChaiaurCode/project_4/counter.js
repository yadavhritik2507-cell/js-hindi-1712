//const Temp = document.querySelector('#counter');
const counter = document.querySelector('#counter');

let count = 0;

counter.innerHTML = count;

const Temp1 = document.getElementById('counter');
function numbercounter() {
    if(Number(count) > 0)
    {
        Temp1.style.color = 'green';
    }else if(Number(count) < 0){
        Temp1.style.color = 'red';
    }
    else if(Number(count) == 0){
        Temp1.style.color = 'white';
    }
    
}

const add = document.getElementById('addnum');
add.addEventListener('click',function(){
    count = count +1;
    counter.innerHTML = count;
    numbercounter();
})

const lower = document.getElementById('Lowernum');
lower.addEventListener('click',function(){
     count = count -1;
    counter.innerHTML = count;
    numbercounter();
})