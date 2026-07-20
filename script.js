const answers = document.querySelectorAll(".answer");

const correctAnswer = 0;


answers.forEach(function(button, index){

  button.addEventListener("click", function(){

    const result = document.getElementById("result");


    if(index === correctAnswer){

      result.textContent = "⭕ Correct!";

    } else {

      result.textContent = "❌ Try again!";

    }

  });

});