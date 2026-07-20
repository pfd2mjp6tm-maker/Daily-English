const answers = document.querySelectorAll(".answer");

answers.forEach(function(button){

  button.addEventListener("click",function(){

    const result = document.getElementById("result");

    if(button.classList.contains("correct")){

      result.textContent = "⭕ Correct!";

    }else{

      result.textContent = "❌ Try again!";

    }

  });

});
