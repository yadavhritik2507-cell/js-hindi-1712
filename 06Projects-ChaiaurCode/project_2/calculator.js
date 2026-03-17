const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const weigt_guide = document.querySelector('#range')
    

    if(height == "" || height <0 || isNaN(height) ){
        result.innerHTML = `InValid Value Height ${height}`
    }else if(weight == "" || weight <0 || isNaN(weight) ){
        result.innerHTML = `InValid Value Weight ${weight}`
    }else{
        const bmi = (weight/(height*height/10000)).toFixed(2)
          
       // result.innerHTML = `${bmi}`

        if(bmi < 18.6){
            weigt_guide.textContent = `Your body Weight in under BMI range ${bmi}`
        }
        else if(bmi >= 18.6 && bmi <= 25){
            weigt_guide.textContent = `Your body Weight in Normal BMI range ${bmi}`
        }
        else{
            weigt_guide.textContent = `Your body Weight in overweight BMI range ${bmi}`
        }
    }

   

})
