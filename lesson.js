let currentIndex = 0;
let score = 0;
let answered = false;


// 今日の問題
const questions = questionBank;


// 問題表示
function showQuestion() {

    answered = false;

    const currentQuestion = questions[currentIndex];


    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;


    document.getElementById("question-text").textContent =
        currentQuestion.japanese;


    document.getElementById("result").innerHTML = "";


    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";


    document.getElementById("nextButton").disabled = true;



    // 選択肢をコピーしてシャッフル
    const choices =
        [...currentQuestion.choices];


    choices.sort(() => Math.random() - 0.5);



    choices.forEach(function(choice){


        const button =
            document.createElement("button");


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

                button.textContent =
                    "⭕ " + choice;


                result.innerHTML =
                    "⭕ Correct!";


            } else {


                button.textContent =
                    "❌ " + choice;


                result.innerHTML =
                    "❌ Try again!<br><br>" +
                    "Correct answer:<br>" +
                    currentQuestion.english;

            }



            // 音声ボタン

            const listenButton =
                document.createElement("button");


            listenButton.textContent =
                "🔊 Listen";


            listenButton.style.marginTop =
                "15px";


            listenButton.onclick = function(){

                speak(currentQuestion.english);

            };


            result.appendChild(listenButton);


        };


        choicesDiv.appendChild(button);


    });

}



// 音声

function speak(text){

    const utterance =
        new SpeechSynthesisUtterance(text);


    utterance.lang =
        "en-US";


    utterance.rate =
        0.9;


    speechSynthesis.cancel();

    speechSynthesis.speak(utterance);

}



// Next

document.getElementById("nextButton").onclick =
function(){


    if(currentIndex < questions.length - 1){


        currentIndex++;

        showQuestion();


    } else {


        finishLesson();


    }

};



// 終了

function finishLesson(){


    const quiz =
        document.querySelector(".quiz");



    quiz.innerHTML = `

    <div style="text-align:center">

    <h2>🎉 Great Job!</h2>

    <p>Today's Lesson Completed!</p>


    <h2>
    Score
    </h2>


    <p style="
    font-size:32px;
    color:#3E7D3A;
    font-weight:bold;
    ">
    ${score} / ${questions.length}
    </p>


    <a href="index.html"
    style="
    display:block;
    margin-top:25px;
    padding:15px;
    background:#3E7D3A;
    color:white;
    border-radius:15px;
    text-decoration:none;
    ">
    🏠 Home
    </a>


    </div>

    `;


    // 後でReview用に使う保存
    localStorage.setItem(
        "lastLesson",
        JSON.stringify(questions)
    );


}



// スタート

showQuestion();