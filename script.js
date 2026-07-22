let currentIndex = 0;
let currentQuestion = questions[currentIndex];

function showQuestion() {

    currentQuestion = questions[currentIndex];

    // 問題番号
    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;

    // 問題文
    document.getElementById("question-text").textContent =
        currentQuestion.japanese;

    // 選択肢
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    // 結果表示をリセット
    document.getElementById("result").textContent = "";

    currentQuestion.choices.forEach(function(choice, index) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = choice;

        button.onclick = function() {

            const result = document.getElementById("result");

            if (index === currentQuestion.answer) {
                result.textContent = "⭕ Correct!";
            } else {
                result.textContent = "❌ Try again!";
            }

        };

        choicesDiv.appendChild(button);

    });

}

// 最初の問題を表示
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