// ============================
// 前回のLessonを読み込む
// ============================

const savedLesson =
    localStorage.getItem("dailyEnglishLastLesson");


// Reviewする問題
let reviewQuestions = [];


// 保存されたLessonがある場合
if (savedLesson) {

    const reviewData =
        JSON.parse(savedLesson);

    reviewQuestions =
        reviewData.questions;

}


// ============================
// 問題がない場合
// ============================

if (reviewQuestions.length === 0) {

    document.querySelector(".quiz").innerHTML = `

        <div style="
            text-align:center;
            padding:20px 0;
        ">

            <div style="
                font-size:48px;
                margin-bottom:15px;
            ">
                🌱
            </div>

            <h2>
                No Review Yet
            </h2>

            <p style="
                color:#666;
                line-height:1.7;
            ">
                Complete Today's Lesson first!
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


// ============================
// Review開始
// ============================

else {

    let currentIndex = 0;

    let currentQuestion =
        reviewQuestions[currentIndex];

    let answered = false;

    let score = 0;


    // ============================
    // シャッフル
    // ============================

    function shuffleArray(array) {

        const newArray = [...array];

        for (
            let i = newArray.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [newArray[i], newArray[j]] =
                [newArray[j], newArray[i]];

        }

        return newArray;

    }


    // ============================
    // 音声
    // ============================

    function speakEnglish(text) {

        if (!("speechSynthesis" in window)) {

            alert(
                "Sorry, your browser does not support audio."
            );

            return;
        }

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(text);

        utterance.lang = "en-US";

        utterance.rate = 0.9;

        utterance.pitch = 1.0;

        window.speechSynthesis.speak(utterance);

    }


    // ============================
    // 問題表示
    // ============================

    function showQuestion() {

        answered = false;

        currentQuestion =
            reviewQuestions[currentIndex];


        document.getElementById(
            "question-number"
        ).textContent =
            "Q" +
            (currentIndex + 1) +
            " / " +
            reviewQuestions.length;


        document.getElementById(
            "question-text"
        ).textContent =
            currentQuestion.japanese;


        document.getElementById(
            "result"
        ).textContent = "";


        const choicesDiv =
            document.getElementById("choices");

        choicesDiv.innerHTML = "";


        const nextButton =
            document.querySelector(".next");

        nextButton.disabled = true;


        const correctAnswer =
            currentQuestion.choices[
                currentQuestion.answer
            ];


        const shuffledChoices =
            shuffleArray(
                currentQuestion.choices
            );


        shuffledChoices.forEach(
            function(choice) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "answer";


                button.textContent =
                    choice;


                button.onclick =
                    function() {

                        if (answered) return;

                        answered = true;

                        nextButton.disabled =
                            false;


                        const buttons =
                            document.querySelectorAll(
                                ".answer"
                            );


                        buttons.forEach(
                            function(btn) {

                                btn.disabled =
                                    true;


                                if (
                                    btn.textContent ===
                                    correctAnswer
                                ) {

                                    btn.classList.add(
                                        "correct"
                                    );

                                }

                            }
                        );


                        const result =
                            document.getElementById(
                                "result"
                            );


                        if (
                            choice ===
                            correctAnswer
                        ) {

                            score++;

                            button.classList.add(
                                "correct"
                            );

                            result.textContent =
                                "⭕ Correct!";

                        }

                        else {

                            button.classList.add(
                                "wrong"
                            );

                            result.innerHTML =
                                "❌ Incorrect!<br><br>" +
                                "Correct answer:<br>" +
                                correctAnswer;

                        }


                        // Listen
                        const listenButton =
                            document.createElement(
                                "button"
                            );


                        listenButton.textContent =
                            "🔊 Listen";


                        listenButton.style.marginTop =
                            "15px";


                        listenButton.style.background =
                            "#6FCF97";


                        listenButton.style.fontSize =
                            "16px";


                        listenButton.onclick =
                            function() {

                                speakEnglish(
                                    correctAnswer
                                );

                            };


                        result.appendChild(
                            listenButton
                        );

                    };


                choicesDiv.appendChild(
                    button
                );

            }
        );

    }


    // ============================
    // 最初の問題
    // ============================

    showQuestion();


    // ============================
    // Next
    // ============================

    document.querySelector(
        ".next"
    ).onclick = function() {


        if (
            currentIndex <
            reviewQuestions.length - 1
        ) {

            currentIndex++;

            showQuestion();

        }

        else {

            showFinishScreen();

        }

    };


    // ============================
    // 完了画面
    // ============================

    function showFinishScreen() {

        const card =
            document.querySelector(
                ".quiz"
            );


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
                    Review Completed!
                </h2>

                <p style="
                    color:#666;
                    margin-bottom:25px;
                ">
                    Great job reviewing!
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
                    ${score} / ${reviewQuestions.length}
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

}