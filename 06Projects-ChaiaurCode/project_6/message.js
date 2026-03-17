let message = document.getElementById('message')


const add = document.getElementById('addtext')

const lastMessage = document.getElementById('lastMessage')

add.addEventListener('click',function(){
   

lastMessage.innerHTML = document.getElementById('message').value

inputGet();
    
})


const hide = document.getElementById('blank')

function timeout()
{
   hide.style.display = "none"
}


function inputGet(){
    if (message.value == ''){
        hide.style.display = "block";
        var time = setTimeout(timeout,2000)
    }
}