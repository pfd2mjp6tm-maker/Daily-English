let currentIndex = 0;
let currentQuestion = questions[currentIndex];
let answered = false;
let score = 0;


// 選択肢をシャッフルする関数
function shuffleArray(array) {

    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [newArray[i], newArray[j]] =
            [newArray[j], newArray[i]];
    }

    return newArray;
}


// 問題を表示する関数
function showQuestion() {

    answered = false;

    currentQuestion = questions[currentIndex];

    // 問題番号
    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;

    // 問題文
    document.getElementById("question-text").textContent =
        currentQuestion.japanese;

    // 結果表示をリセット
    document.getElementById("result").textContent = "";

    // Nextボタンを無効にする
    const nextButton = document.querySelector(".next");

    nextButton.disabled = true;

    // 選択肢を一度消す
    const choicesDiv = document.getElementById("choices");

    choicesDiv.innerHTML = "";

    // 正解
    const correctAnswer =
        currentQuestion.choices[currentQuestion.answer];

    // 選択肢をシャッフル
    const shuffledChoices =
        shuffleArray(currentQuestion.choices);


    // 選択肢を表示
    shuffledChoices.forEach(function(choice) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = choice;


        // 選択肢をタップしたとき
        button.onclick = function() {

            // すでに回答済みなら何もしない
            if (answered) return;

            answered = true;

            // Nextを有効にする
            nextButton.disabled = false;


            // すべての選択肢を取得
            const buttons =
                document.querySelectorAll(".answer");


            // 正解の選択肢を緑にする
            buttons.forEach(function(btn) {

                btn.disabled = true;

                if (btn.textContent === correctAnswer) {

                    btn.classList.add("correct");

                }

            });


            const result =
                document.getElementById("result");


            // 正解
            if (choice === correctAnswer) {

                score++;

                button.classList.add("correct");

                result.textContent = "⭕ Correct!";

            }

            // 不正解
            else {

                button.classList.add("wrong");

                result.innerHTML =
                    "❌ Incorrect!<br><br>" +
                    "Correct answer:<br>" +
                    correctAnswer;
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

        // 次の問題へ
        currentIndex++;

        showQuestion();

    }

    else {

        // 全問終了
        showFinishScreen();

    }

};


// 終了画面
function showFinishScreen() {

    const card = document.querySelector(".quiz");

    card.innerHTML = `

        <div style="
            text-align:center;
            padding:20px 0;
        ">

            <div style="
                font-size:48px;
                margin-bottom:15px;
            ">
                🎉
            </div>

            <h2 style="
                text-align:center;
                margin-bottom:10px;
            ">
                Great Job!
            </h2>

            <p style="
                color:#666;
                margin-bottom:25px;
            ">
                Today's Lesson Completed!
            </p>

            <p style="
                font-size:18px;
                color:#555;
                margin-bottom:5px;
            ">
                Score
            </p>

            <p style="
                font-size:36px;
                font-weight:bold;
                color:#3E7D3A;
                margin-top:5px;
            ">
                ${score} / ${questions.length}
            </p>

            <a href="index.html"
               style="
                   display:block;
                   margin-top:30px;
                   padding:15px;
                   background:#3E7D3A;
                   color:white;
                   text-decoration:none;
                   border-radius:15px;
                   font-weight:bold;
               ">
                🏠 Back to Home
            </a>

        </div>

    `;

}