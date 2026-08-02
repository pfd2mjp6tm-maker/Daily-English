// ============================
// Review History読み込み
// ============================

const reviewHistory =
    JSON.parse(
        localStorage.getItem("reviewHistory")
    )
    || [];


// ============================
// Reviewする問題取得
// 最新Lessonのみ
// ============================

let reviewQuestions = [];


if(reviewHistory.length > 0){

    const latestLesson =
        reviewHistory[
            reviewHistory.length - 1
        ];

    reviewQuestions =
        latestLesson.questions;

}


// ============================
// 問題なし
// ============================

if(reviewQuestions.length === 0){


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


}else{


// ============================
// 基本設定
// ============================

let currentIndex = 0;

let score = 0;

let answered = false;



// ============================
// シャッフル
// ============================

function shuffleArray(array){

    const newArray =
        [...array];


    return newArray.sort(
        () => Math.random() - 0.5
    );

}



// ============================
// 音声
// ============================

function speakEnglish(text){


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "en-US";


    speech.rate =
        0.8;


    speechSynthesis.speak(
        speech
    );


}



// ============================
// 問題表示
// ============================

function showQuestion(){


    answered = false;


    const currentQuestion =
        reviewQuestions[currentIndex];



    document.getElementById(
        "question-number"
    ).textContent =

        "Q"
        +
        (currentIndex + 1)
        +
        " / "
        +
        reviewQuestions.length;



    document.getElementById(
        "question-text"
    ).textContent =

        currentQuestion.japanese;



    document.getElementById(
        "result"
    ).innerHTML = "";



    const choicesDiv =
        document.getElementById(
            "choices"
        );


    choicesDiv.innerHTML = "";



    const nextButton =
        document.querySelector(
            ".next"
        );


    nextButton.disabled =
        true;



    const correctAnswer =
        currentQuestion.english;



    const choices =
        shuffleArray(
            currentQuestion.choices
        );



    choices.forEach(function(choice){


        const button =
            document.createElement(
                "button"
            );


        button.className =
            "answer";


        button.textContent =
            choice;



        button.onclick =
        function(){


            if(answered)
                return;


            answered = true;


            const buttons =
                document.querySelectorAll(
                    ".answer"
                );


            buttons.forEach(
                function(btn){

                    btn.disabled =
                        true;

                }
            );



            const result =
                document.getElementById(
                    "result"
                );



            if(choice === correctAnswer){


                score++;


                button.style.border =
                    "3px solid #3E7D3A";


                result.textContent =
                    "⭕ Correct!";


            }else{


                button.style.border =
                    "3px solid #d9534f";


                result.innerHTML =

                    "❌ Incorrect!<br><br>"
                    +
                    "Correct answer:<br>"
                    +
                    correctAnswer;


            }



            const listenButton =
                document.createElement(
                    "button"
                );


            listenButton.textContent =
                "🔊 Listen";


            listenButton.onclick =
            function(){

                speakEnglish(
                    correctAnswer
                );

            };


            result.appendChild(
                listenButton
            );



            nextButton.disabled =
                false;


        };



        choicesDiv.appendChild(
            button
        );


    });


}



// ============================
// Next
// ============================

document.querySelector(
    ".next"
).onclick =
function(){


    if(
        currentIndex <
        reviewQuestions.length - 1
    ){


        currentIndex++;


        showQuestion();


    }else{


        showFinishScreen();


    }


};



// ============================
// 完了画面
// ============================

function showFinishScreen(){


    document.querySelector(
        ".quiz"
    ).innerHTML = `


    <div style="
        text-align:center;
        padding:20px 0;
    ">


    <div style="
        font-size:48px;
    ">
    🎉
    </div>


    <h2>
    Review Completed!
    </h2>


    <p>
    Score
    </p>


    <p style="
        font-size:36px;
        font-weight:bold;
        color:#3E7D3A;
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
       ">
       🏠 Back to Home
    </a>


    </div>


    `;


}



// ============================
// Start
// ============================

showQuestion();


}