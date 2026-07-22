let currentIndex = 0;
let currentQuestion = questions[currentIndex];
let answered = false;

// 配列をシャッフル
function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

function showQuestion() {

    answered = false;

    currentQuestion = questions[currentIndex];

    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;

    document.getElementById("question-text").textContent =
        currentQuestion.japanese;

    document.getElementById("result").textContent = "";

    const nextButton = document.querySelector(".next");
    nextButton.disabled = true;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    const correctAnswer =
        currentQuestion.choices[currentQuestion.answer];

    const shuffledChoices =
        shuffleArray(currentQuestion.choices);

    shuffledChoices.forEach(function(choice) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = choice;

        button.onclick = function() {

            if (answered) return;

            answered = true;

            nextButton.disabled = false;

            const buttons =
                document.querySelectorAll(".answer");

            buttons.forEach(function(btn){

                btn.disabled = true;

                if(btn.textContent === correctAnswer){

                    btn.classList.add("correct");

                }

            });

            const result =
                document.getElementById("result");

            if(choice === correctAnswer){

                result.textContent = "⭕ Correct!";

            }else{

                button.classList.add("wrong");

                result.innerHTML =
                    "❌ Incorrect!<br><br>Correct answer:<br>" +
                    correctAnswer;

            }

        };

        choicesDiv.appendChild(button);

    });

}

showQuestion();

document.querySelector(".next").onclick = function(){

    if(currentIndex < questions.length - 1){

        currentIndex++;

        showQuestion();

    }else{

        alert("🎉 Today's Lesson Completed!");

    }

};