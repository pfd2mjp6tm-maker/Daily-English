let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

let answered = false;


// ====================
// Day管理
// ====================

let TODAY = Number(localStorage.getItem("today")) || 1;


let questions = questionBank.filter(function(question){

    return question.day === TODAY;

});


// Dayが存在しない場合はDay1へ戻す
if(questions.length === 0){

    TODAY = 1;

    localStorage.setItem("today", TODAY);


    questions = questionBank.filter(function(question){

        return question.day === TODAY;

    });

}



// ====================
// 問題表示
// ====================

function showQuestion(){


    answered = false;

    selectedAnswer = null;


    const currentQuestion = questions[currentIndex];



    document.getElementById("question-number").textContent =
        "Q" + (currentIndex + 1) + " / " + questions.length;



    document.getElementById("question-text").textContent =
        currentQuestion.japanese;



    document.getElementById("result").innerHTML = "";


    document.getElementById("tip").textContent = "";

    document.getElementById("extra").textContent = "";



    document.getElementById("nextButton").disabled = true;



    const choicesDiv =
        document.getElementById("choices");


    choicesDiv.innerHTML = "";



    const checkButton =
        document.getElementById("checkButton");


    checkButton.disabled = true;



    let choices = [...currentQuestion.choices];


    choices.sort(() => Math.random() - 0.5);



    choices.forEach(function(choice){



        const button =
            document.createElement("button");



        button.className = "answer";


        button.textContent = choice;



        button.onclick = function(){


            if(answered) return;



            selectedAnswer = choice;



            const buttons =
                document.querySelectorAll(".answer");



            buttons.forEach(function(btn){

                btn.style.border = "1px solid #ddd";

            });



            button.style.border =
                "3px solid #3E7D3A";



            checkButton.disabled = false;


        };



        choicesDiv.appendChild(button);



    });


}



// ====================
// 正誤判定
// ====================

document.getElementById("checkButton").onclick = function(){


    if(selectedAnswer === null) return;



    if(answered) return;



    answered = true;



    const currentQuestion =
        questions[currentIndex];



    const result =
        document.getElementById("result");



    if(selectedAnswer === currentQuestion.english){


        score++;


        result.textContent =
            "⭕ Correct!";


    }else{


        result.innerHTML =
            "❌ Try again!<br><br>" +
            "Correct answer:<br>" +
            currentQuestion.english;


    }



    document.getElementById("tip").textContent =
        "💡 " + currentQuestion.tip;



    document.getElementById("extra").textContent =
        "✨ " + currentQuestion.extra;



    document.getElementById("nextButton").disabled = false;



    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(function(btn){

        btn.disabled = true;

    });


};




// ====================
// 音声
// ====================

document.getElementById("soundButton").onclick = function(){


    const currentQuestion =
        questions[currentIndex];


    const speech =
        new SpeechSynthesisUtterance(
            currentQuestion.english
        );


    speech.lang = "en-US";


    speech.rate = 0.8;


    speechSynthesis.speak(speech);


};




// ====================
// NEXT
// ====================

document.getElementById("nextButton").onclick = function(){



    if(currentIndex < questions.length - 1){



        currentIndex++;


        showQuestion();



    }else{



        alert(
            "🎉 Lesson Complete!\n\nScore: "
            + score
            + " / "
            + questions.length
        );



        // 次の日へ保存

        TODAY++;


        localStorage.setItem(
            "today",
            TODAY
        );



        currentIndex = 0;

        score = 0;



    }



};




// ====================
// Start
// ====================

showQuestion();