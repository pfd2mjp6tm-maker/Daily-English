let currentIndex = 0;
let currentQuestion = questions[currentIndex];
let answered = false;
let score = 0;


// ============================
// 選択肢をシャッフル
// ============================

function shuffleArray(array) {

    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [newArray[i], newArray[j]] =
            [newArray[j], newArray[i]];
    }

    return newArray;
}


// ============================
// 英語を読み上げる
// ============================

function speakEnglish(text) {

    if (!("speechSynthesis" in window)) {

        alert("Sorry, your browser does not support audio.");

        return;
    }

    // 前の音声を止める
    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(text);

    // アメリカ英語
    utterance.lang = "en-US";

    // 少しゆっくり
    utterance.rate = 0.9;

    // 少し低めの音程
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
}


// ============================
// 問題を表示
// ============================

function showQuestion() {

    answered = false;

    currentQuestion = questions[currentIndex];


    // 問題番号
    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) +
        " / " +
        questions.length;


    // 問題文
    document.getElementById("question-text").textContent =
        currentQuestion.japanese;


    // 結果表示をリセット
    document.getElementById("result").textContent = "";


    // 選択肢
    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";


    // Nextを無効にする
    const nextButton =
        document.querySelector(".next");

    nextButton.disabled = true;


    // 正解
    const correctAnswer =
        currentQuestion.choices[
            currentQuestion.answer
        ];


    // 選択肢をシャッフル
    const shuffledChoices =
        shuffleArray(currentQuestion.choices);


    // ============================
    // 選択肢を表示
    // ============================

    shuffledChoices.forEach(function(choice) {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = choice;


        // 回答
        button.onclick = function() {

            // 回答済みなら何もしない
            if (answered) return;

            answered = true;


            // Nextを有効にする
            nextButton.disabled = false;


            // 全ボタンを取得
            const buttons =
                document.querySelectorAll(".answer");


            // 全ボタンを無効化
            buttons.forEach(function(btn) {

                btn.disabled = true;


                // 正解を緑にする
                if (btn.textContent === correctAnswer) {

                    btn.classList.add("correct");

                }

            });


            const result =
                document.getElementById("result");


            // ============================
            // 正解
            // ============================

            if (choice === correctAnswer) {

                score++;

                button.classList.add("correct");

                result.textContent =
                    "⭕ Correct!";

            }


            // ============================
            // 不正解
            // ============================

            else {

                button.classList.add("wrong");

                result.innerHTML =
                    "❌ Incorrect!<br><br>" +
                    "Correct answer:<br>" +
                    correctAnswer;

            }


            // ============================
            // 🔊 Listenボタン
            // ============================

            const listenButton =
                document.createElement("button");

            listenButton.textContent =
                "🔊 Listen";

            listenButton.style.marginTop =
                "15px";

            listenButton.style.background =
                "#6FCF97";

            listenButton.style.fontSize =
                "16px";


            listenButton.onclick = function() {

                speakEnglish(correctAnswer);

            };


            result.appendChild(listenButton);

        };


        choicesDiv.appendChild(button);

    });

}


// ============================
// 最初の問題
// ============================

showQuestion();


// ============================
// Nextボタン
// ============================

document.querySelector(".next").onclick = function() {

    if (currentIndex < questions.length - 1) {

        currentIndex++;

        showQuestion();

    }

    else {

        showFinishScreen();

    }

};


// ============================
// 終了画面
// ============================

function showFinishScreen() {

    const card =
        document.querySelector(".quiz");


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