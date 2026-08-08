// ============================
// Review History読み込み
// ============================

const reviewHistory =
    JSON.parse(
        localStorage.getItem("reviewHistory")
    )
    || [];


// ============================
// Favorites読み込み
// ============================

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    )
    || [];


// ============================
// 全問題取得
// ============================

let allQuestions = [];

reviewHistory.forEach(function(lesson){

    allQuestions.push(
        ...lesson.questions
    );

});


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
// Random 5問
// ============================

let reviewQuestions =
    shuffleArray(allQuestions)
        .slice(0, 5);


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
// Favorite表示更新
// ============================

function updateFavoriteButton(){

    const favoriteButton =
        document.getElementById(
            "favoriteButton"
        );

    if(!favoriteButton)
        return;


    const currentQuestion =
        reviewQuestions[currentIndex];


    if(
        favorites.includes(
            currentQuestion.id
        )
    ){

        // ============================
        // お気に入り済み
        // ============================

        favoriteButton.textContent =
            "★";

        favoriteButton.classList.add(
            "active"
        );

    }else{

        // ============================
        // 未登録
        // ============================

        favoriteButton.textContent =
            "☆";

        favoriteButton.classList.remove(
            "active"
        );

    }

}


// ============================
// Favoriteボタン
// ============================

const favoriteButton =
    document.getElementById(
        "favoriteButton"
    );


if(favoriteButton){

    favoriteButton.onclick =
    function(){

        const currentQuestion =
            reviewQuestions[currentIndex];


        const index =
            favorites.indexOf(
                currentQuestion.id
            );


        if(index === -1){

            // ============================
            // お気に入り登録
            // ============================

            favorites.push(
                currentQuestion.id
            );

        }else{

            // ============================
            // お気に入り解除
            // ============================

            favorites.splice(
                index,
                1
            );

        }


        // ============================
        // 保存
        // ============================

        localStorage.setItem(
            "favorites",
            JSON.stringify(
                favorites
            )
        );


        // ============================
        // 星の表示更新
        // ============================

        updateFavoriteButton();

    };

}


// ============================
// 問題表示
// ============================

function showQuestion(){

    answered = false;


    const currentQuestion =
        reviewQuestions[currentIndex];


    // ============================
    // 問題番号
    // ============================

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


    // ============================
    // 日本語
    // ============================

    document.getElementById(
        "question-text"
    ).textContent =

        currentQuestion.japanese;


    // ============================
    // 結果リセット
    // ============================

    document.getElementById(
        "result"
    ).innerHTML = "";


    // ============================
    // 選択肢リセット
    // ============================

    const choicesDiv =
        document.getElementById(
            "choices"
        );

    choicesDiv.innerHTML = "";


    // ============================
    // Nextボタン
    // ============================

    const nextButton =
        document.querySelector(
            ".next"
        );

    nextButton.disabled =
        true;


    // ============================
    // Favorite表示
    // ============================

    updateFavoriteButton();


    // ============================
    // 正解
    // ============================

    const correctAnswer =
        currentQuestion.english;


    // ============================
    // 選択肢シャッフル
    // ============================

    const choices =
        shuffleArray(
            currentQuestion.choices
        );


    // ============================
    // 選択肢作成
    // ============================

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


            // ============================
            // 全ボタン無効化
            // ============================

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


            // ============================
            // 正誤判定
            // ============================

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


            // ============================
            // Listenボタン
            // ============================

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


            // ============================
            // Next有効化
            // ============================

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

        // ============================
        // 5問終了したら
        // 新しい5問を作る
        // ============================

        currentIndex = 0;

        score = 0;


        allQuestions = [];


        reviewHistory.forEach(
            function(lesson){

                allQuestions.push(
                    ...lesson.questions
                );

            }
        );


        const newQuestions =
            shuffleArray(
                allQuestions
            ).slice(0, 5);


        reviewQuestions.length =
            0;


        reviewQuestions.push(
            ...newQuestions
        );


        showQuestion();

    }

};


// ============================
// Start
// ============================

showQuestion();


}