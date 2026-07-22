const currentQuestion = questions[0];

// 問題番号
document.getElementById("question-number").textContent = "Q1 / " + questions.length;

// 問題文
document.getElementById("question-text").textContent = currentQuestion.japanese;

// 選択肢
const choicesDiv = document.getElementById("choices");

currentQuestion.choices.forEach(function(choice){

    const button = document.createElement("button");

    button.className = "answer";

    button.textContent = choice;

    choicesDiv.appendChild(button);

});

const buttons = document.querySelectorAll(".answer");

buttons.forEach(function(button, index){

    button.addEventListener("click", function(){

        const result = document.getElementById("result");

        if(index === currentQuestion.answer){

            result.textContent = "⭕ Correct!";

        } else {

            result.textContent = "❌ Try again!";

        }

    });

});