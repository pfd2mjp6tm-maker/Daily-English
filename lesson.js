let currentIndex = 0;
let score = 0;
let answered = false;


// ---------- 今日のDayを取得 ----------
let TODAY = Number(localStorage.getItem("today")) || 1;


// 今日の問題を取得
let questions = questionBank.filter(function(question){
    return question.day === TODAY;
});


// もし該当Dayが無ければDay1に戻す
if (questions.length === 0) {
    TODAY = 1;
    localStorage.setItem("today", 1);

    questions = questionBank.filter(function(question){
        return question.day === 1;
    });
}


// ---------- 問題表示 ----------
function showQuestion(){

    answered = false;

    const currentQuestion = questions[currentIndex];

    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;

    document.getElementById("question-text").textContent =
        currentQuestion.japanese;

    document.getElementById("result").innerHTML = "";

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    document.getElementById("nextButton").disabled = true;

    const shuffledChoices = [...currentQuestion.choices];
    shuffledChoices.sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(function(choice){

        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = choice;

        button.onclick = function(){

            if(answered) return;

            answered = true;

            document.getElementById("nextButton").disabled = false;

            const buttons =
                document.querySelectorAll(".answer");

            buttons.forEach(function(btn){
                btn.disabled = true;
            });

            const result =
                document.getElementById("result");

            if(choice === currentQuestion.english){

                score++;

                result.textContent = "⭕ Correct!";

            }else{

                result.innerHTML =
                    "❌ Try again!<br><br>" +
                    "Correct answer:<br>" +
                    currentQuestion.english;

            }

        };

        choicesDiv.appendChild(button);

    });

}


// ---------- Next ----------
document.getElementById("nextButton").onclick = function(){

    if(currentIndex < questions.length - 1){

        currentIndex++;
        showQuestion();

    }else{

        alert(
            "🎉 Today's Lesson Completed!\n\nScore : "
            + score
            + " / "
            + questions.length
        );

        // 次の日へ
        TODAY++;
        localStorage.setItem("today", TODAY);

        // リセット
        currentIndex = 0;
        score = 0;

    }

};


// ---------- スタート ----------
showQuestion();