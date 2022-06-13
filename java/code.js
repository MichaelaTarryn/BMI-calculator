

// if ((age>=18)&&(height>=5000)){ 
//     console.log('your weight is '.concat(height)+'cm');
// } 


// else if((age<18)&&(height>=5000)){
//     console.log('your nice'.concat(height)+'cm');
//     }
    
//     else{
//     console.log('your are underweight');
// }

function displayName() 
{
    const age =document.getElementById("age").value;
    const height =document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    let bmi =weight/ (height*height);
    document.getElementById('form').innerHTML =`your bmi is ${bmi}You need to go on a diet!`;


if (bmi < 18.5) {
    document.getElementById("form").innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    document.getElementById("form").innerHTML= "Healthy weight";
  } else if (bmi > 25 && bmi <= 30) {
    document.getElementById("form").value = "Overweight";
  } else if (bmi > 30 && bmi <= 35) {
    document.getElementById("form").value = "Obese Class 1";
  } else if (bmi > 35 && bmi <= 40) {
    document.getElementById("form").value = "Obese Class 2";
  } else if (bmi > 40) {
    document.getElementById("form").value = "Obese Class 3";
  }
}