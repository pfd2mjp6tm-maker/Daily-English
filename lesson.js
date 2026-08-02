let currentIndex = 0;

let score = 0;

let answered = false;


const TODAY = 1;


const questions = questionBank.filter(function(question){

    return question.day === TODAY;

});



function showQuestion(){


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



    const shuffledChoices =
        [...currentQuestion.choices];


    shuffledChoices.sort(() => Math.random() - 0.5);



    shuffledChoices.forEach(function(choice){


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


                result.textContent =
                    "⭕ Correct!";


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




document.getElementById("nextButton").onclick = function(){


    if(currentIndex < questions.length - 1){


        currentIndex++;


        showQuestion();


    }else{


        alert(
            "🎉 Today's Lesson Completed!\nScore: "
            + score
            + " / "
            + questions.length
        );


    }


};



showQuestion();