let currentIndex = 0;
let currentQuestion = questions[currentIndex];

// 配列をシャッフルする関数
function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

function showQuestion() {

    currentQuestion = questions[currentIndex];

    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;

    document.getElementById("question-text").textContent =
        currentQuestion.japanese;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    document.getElementById("result").textContent = "";

    // 選択肢をシャッフル
    const shuffledChoices = shuffleArray(currentQuestion.choices);

    shuffledChoices.forEach(function(choice) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = choice;

        button.onclick = function() {

            const result = document.getElementById("result");

            if (choice === currentQuestion.choices[currentQuestion.answer]) {

                result.textContent = "⭕ Correct!";

            } else {

                result.innerHTML =
                    "❌ Incorrect!<br><br>" +
                    "Correct answer:<br>" +
                    currentQuestion.choices[currentQuestion.answer];

            }

        };

        choicesDiv.appendChild(button);

    });

}

// 最初の問題
showQuestion();

// Nextボタン
document.querySelector(".next").onclick = function() {

    if (currentIndex < questions.length - 1) {

        currentIndex++;

        showQuestion();

    } else {

        alert("🎉 Today's Lesson Completed!");

    }

};