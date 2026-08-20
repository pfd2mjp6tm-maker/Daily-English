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
// Review Stats読み込み
// ============================
// 問題ごとの復習履歴を保存します
//
// 例:
// {
//     "1": {
//         correct: 3,
//         incorrect: 1,
//         lastReviewed: "2026-08-20"
//     }
// }
//
// ============================

let reviewStats =
    JSON.parse(
        localStorage.getItem("reviewStats")
    )
    || {};


// ============================
// 全問題取得
// ============================

let allQuestions = [];

reviewHistory.forEach(function(lesson){

    if(
        lesson.questions
        &&
        Array.isArray(lesson.questions)
    ){

        allQuestions.push(
            ...lesson.questions
        );

    }

});


// ============================
// 問題の重複を削除
// ============================
// 同じidの問題が複数回
// reviewHistoryに入っていても
// 1問として扱います。
// ============================

const uniqueQuestions = [];

const usedIds = new Set();


allQuestions.forEach(function(question){

    if(
        question
        &&
        !usedIds.has(question.id)
    ){

        usedIds.add(
            question.id
        );

        uniqueQuestions.push(
            question
        );

    }

});


// ============================
// 今日の日付
// ============================

function getToday(){

    const date =
        new Date();

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return (
        year
        +
        "-"
        +
        month
        +
        "-"
        +
        day
    );

}


// ============================
// 日付の差を計算
// ============================

function getDaysSince(dateString){

    if(!dateString){

        return 999;

    }


    const today =
        new Date(
            getToday()
        );

    const lastReviewed =
        new Date(
            dateString
        );


    const difference =
        today.getTime()
        -
        lastReviewed.getTime();


    return Math.floor(
        difference
        /
        (
            1000
            *
            60
            *
            60
            *
            24
        )
    );

}


// ============================
// 復習優先度
// ============================
// 日数が経つほど
// 出やすくします。
//
// 未レビュー      → 100
// 15日以上        → 90
// 8～14日         → 70
// 4～7日          → 50
// 2～3日          → 30
// 1日             → 15
// 今日            → 5
//
// ============================

function getReviewWeight(question){

    const stats =
        reviewStats[
            String(question.id)
        ];


    // ============================
    // 一度もレビューしていない
    // ============================

    if(!stats){

        return 100;

    }


    const days =
        getDaysSince(
            stats.lastReviewed
        );


    if(days >= 15){

        return 90;

    }


    if(days >= 8){

        return 70;

    }


    if(days >= 4){

        return 50;

    }


    if(days >= 2){

        return 30;

    }


    if(days >= 1){

        return 15;

    }


    return 5;

}


// ============================
// 重み付きランダム
// ============================
// 優先度が高い問題ほど
// 選ばれやすくします。
// ============================

function weightedRandomQuestions(
    questions,
    count
){

    const pool =
        [...questions];

    const selected = [];


    while(
        pool.length > 0
        &&
        selected.length < count
    ){

        let totalWeight = 0;


        pool.forEach(function(question){

            totalWeight +=
                getReviewWeight(
                    question
                );

        });


        let random =
            Math.random()
            *
            totalWeight;


        let selectedIndex =
            0;


        for(
            let i = 0;
            i < pool.length;
            i++
        ){

            random -=
                getReviewWeight(
                    pool[i]
                );


            if(random <= 0){

                selectedIndex =
                    i;

                break;

            }

        }


        selected.push(
            pool[selectedIndex]
        );


        pool.splice(
            selectedIndex,
            1
        );

    }


    return selected;

}


// ============================
// Random 5問
// ============================

let reviewQuestions =
    weightedRandomQuestions(
        uniqueQuestions,
        5
    );


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

        favoriteButton.textContent =
            "★";

        favoriteButton.classList.add(
            "active"
        );

    }else{

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

            favorites.push(
                currentQuestion.id
            );

        }else{

            favorites.splice(
                index,
                1
            );

        }


        localStorage.setItem(
            "favorites",
            JSON.stringify(
                favorites
            )
        );


        updateFavoriteButton();

    };

}


// ============================
// Review結果保存
// ============================

function saveReviewResult(
    question,
    isCorrect
){

    const id =
        String(
            question.id
        );


    // ============================
    // 初回
    // ============================

    if(!reviewStats[id]){

        reviewStats[id] = {

            correct: 0,

            incorrect: 0,

            lastReviewed: null

        };

    }


    // ============================
    // 正解・不正解
    // ============================

    if(isCorrect){

        reviewStats[id].correct++;

    }else{

        reviewStats[id].incorrect++;

    }


    // ============================
    // 最終レビュー日
    // ============================

    reviewStats[id].lastReviewed =
        getToday();


    // ============================
    // 保存
    // ============================

    localStorage.setItem(
        "reviewStats",
        JSON.stringify(
            reviewStats
        )
    );

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
        [
            ...currentQuestion.choices
        ];


    choices.sort(
        () =>
            Math.random()
            -
            0.5
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

            const isCorrect =
                choice === correctAnswer;


            if(isCorrect){

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
            // Review結果保存
            // ============================

            saveReviewResult(
                currentQuestion,
                isCorrect
            );


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
        currentIndex
        <
        reviewQuestions.length - 1
    ){

        currentIndex++;

        showQuestion();


    }else{

        // ============================
        // 5問終了
        // ============================

        currentIndex = 0;

        score = 0;


        // ============================
        // 最新のReview Historyから
        // 問題を再取得
        // ============================

        let latestQuestions = [];


        reviewHistory.forEach(
            function(lesson){

                if(
                    lesson.questions
                    &&
                    Array.isArray(
                        lesson.questions
                    )
                ){

                    latestQuestions.push(
                        ...lesson.questions
                    );

                }

            }
        );


        // ============================
        // 重複削除
        // ============================

        const latestUniqueQuestions = [];

        const latestUsedIds =
            new Set();


        latestQuestions.forEach(
            function(question){

                if(
                    question
                    &&
                    !latestUsedIds.has(
                        question.id
                    )
                ){

                    latestUsedIds.add(
                        question.id
                    );

                    latestUniqueQuestions.push(
                        question
                    );

                }

            }
        );


        // ============================
        // 新しい5問を選ぶ
        // ============================

        const newQuestions =
            weightedRandomQuestions(
                latestUniqueQuestions,
                5
            );


        reviewQuestions.length =
            0;


        reviewQuestions.push(
            ...newQuestions
        );


        // ============================
        // 新しい5問を表示
        // ============================

        showQuestion();

    }

};


// ============================
// Start
// ============================

showQuestion();


}