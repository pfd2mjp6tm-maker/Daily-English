let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

let answered = false;

// ====================
// Favorites
// ====================

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    )
    || [];


// ====================
// Day管理
// ====================


// 完了済みDay取得

let completedDays =
    JSON.parse(
        localStorage.getItem("completedDays")
    )
    || [];


// ============================
// 旧todayデータ移行
// ============================

const oldToday =
    Number(
        localStorage.getItem("today")
    );



if(
    completedDays.length === 0
    &&
    oldToday > 1
){

    for(
        let i = 1;
        i < oldToday;
        i++
    ){

        completedDays.push(i);

    }


    localStorage.setItem(
        "completedDays",
        JSON.stringify(completedDays)
    );

}



// ============================
// 次にやるDay決定
// ============================

let TODAY = 1;


while(
    completedDays.includes(TODAY)
){

    TODAY++;

}


// 問題取得

let questions =
    questionBank.filter(function(question){

        return question.day === TODAY;

    });


// 問題がない場合

if(questions.length === 0){

    TODAY = 1;

    questions =
        questionBank.filter(function(question){

            return question.day === TODAY;

        });

}



// ====================
// 問題表示
// ====================

function showQuestion(){


    answered = false;

    selectedAnswer = null;


    const currentQuestion =
        questions[currentIndex];



    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1)
        + " / "
        + questions.length;



    document.getElementById("question-text").textContent =
        currentQuestion.japanese;



    document.getElementById("result").innerHTML =
        "";



    document.getElementById("tip").textContent =
        "";



    document.getElementById("extra").textContent =
        "";



    document.getElementById("pattern").textContent =
        "";



    document.getElementById("nextButton").disabled =
        true;



    const choicesDiv =
        document.getElementById("choices");


    choicesDiv.innerHTML =
        "";



    document.getElementById("checkButton").disabled =
        true;



    let choices =
        [...currentQuestion.choices];



    choices.sort(
        () => Math.random() - 0.5
    );



    choices.forEach(function(choice){


        const button =
            document.createElement("button");



        button.className =
            "answer";



        button.textContent =
            choice;



        button.onclick =
        function(){


            if(answered)
                return;



            selectedAnswer =
                choice;



            const buttons =
                document.querySelectorAll(".answer");



            buttons.forEach(function(btn){

                btn.style.border =
                    "1px solid #ddd";

            });



            button.style.border =
                "3px solid #3E7D3A";



            document.getElementById("checkButton").disabled =
                false;


        };



        choicesDiv.appendChild(button);


    });
    
// ====================
// Favorite表示更新
// ====================

const favoriteButton =
    document.getElementById("favoriteButton");

if(favoriteButton){

    if(favorites.includes(currentQuestion.id)){

        favoriteButton.textContent =
            "⭐ Favorited";

    }else{

        favoriteButton.textContent =
            "🤍 Add Favorite";

    }

}


// ====================
// 正誤判定
// ====================

document.getElementById("checkButton").onclick =
function(){


    if(selectedAnswer === null)
        return;



    if(answered)
        return;



    answered = true;



    const currentQuestion =
        questions[currentIndex];



    const result =
        document.getElementById("result");



    if(
        selectedAnswer === currentQuestion.english
    ){


        score++;


        result.textContent =
            "⭕ Correct!";


    }else{


        result.innerHTML =
            "❌ Try again!<br><br>"
            +
            "Correct answer:<br>"
            +
            currentQuestion.english;


    }



    document.getElementById("tip").textContent =
        "💡 "
        +
        currentQuestion.tip;



    document.getElementById("extra").textContent =
        "✨ "
        +
        currentQuestion.extra;



    document.getElementById("pattern").textContent =
        currentQuestion.pattern
        ?
        "🧩 "
        +
        currentQuestion.pattern
        :
        "";



    document.getElementById("nextButton").disabled =
        false;



    document.querySelectorAll(".answer")
    .forEach(function(btn){

        btn.disabled =
            true;

    });


};




// ====================
// 音声
// ====================

document.getElementById("soundButton").onclick =
function(){


    const currentQuestion =
        questions[currentIndex];



    const speech =
        new SpeechSynthesisUtterance(
            currentQuestion.english
        );



    speech.lang =
        "en-US";


    speech.rate =
        0.8;



    speechSynthesis.speak(
        speech
    );


};




// ====================
// NEXT
// ====================

document.getElementById("nextButton").onclick =
function(){


    if(
        currentIndex < questions.length - 1
    ){


        currentIndex++;


        showQuestion();


    }else{


        alert(
            "🎉 Lesson Complete!\n\nScore: "
            +
            score
            +
            " / "
            +
            questions.length
        );



// ============================
// Review保存
// ============================


let reviewHistory =
    JSON.parse(
        localStorage.getItem("reviewHistory")
    )
    || [];



reviewHistory.push({

    day: TODAY,

    questions: questions,

    score: score

});



localStorage.setItem(
    "reviewHistory",
    JSON.stringify(reviewHistory)
);




// ============================
// 完了Day保存
// ============================


let completedDays =
    JSON.parse(
        localStorage.getItem("completedDays")
    )
    || [];



if(
    !completedDays.includes(TODAY)
){

    completedDays.push(TODAY);

}



localStorage.setItem(
    "completedDays",
    JSON.stringify(completedDays)
);




// ============================
// Streak保存
// ============================


let studyDates =
    JSON.parse(
        localStorage.getItem("studyDates")
    )
    || [];



const today =
    new Date()
    .toISOString()
    .split("T")[0];



if(
    !studyDates.includes(today)
){

    studyDates.push(today);

}



localStorage.setItem(
    "studyDates",
    JSON.stringify(studyDates)
);



currentIndex = 0;

score = 0;



location.reload();



    }


};




// ====================
// Start
// ====================

showQuestion();

// ====================
// Favoriteボタン
// ====================

const favoriteButton =
    document.getElementById("favoriteButton");

if(favoriteButton){

favoriteButton.onclick = function(){

    const currentQuestion =
        questions[currentIndex];

    const index =
        favorites.indexOf(currentQuestion.id);

    if(index === -1){

        favorites.push(currentQuestion.id);

    }else{

        favorites.splice(index,1);

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    if(favorites.includes(currentQuestion.id)){

        this.textContent =
            "⭐ Favorited";

    }else{

        this.textContent =
            "🤍 Add Favorite";

    }

};

}