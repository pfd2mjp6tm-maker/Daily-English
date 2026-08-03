// ============================
// Home 学習記録表示
// ============================


// Review History取得

const reviewHistory =
    JSON.parse(
        localStorage.getItem("reviewHistory")
    )
    || [];


// ============================
// Learned Sentences
// 重複なし
// ============================

const learnedIds = [];


reviewHistory.forEach(function(lesson){

    lesson.questions.forEach(function(question){

        if(!learnedIds.includes(question.id)){

            learnedIds.push(question.id);

        }

    });

});


const learned =
    learnedIds.length;




// ============================
// Streak計算
// ============================

const studyDates =
    JSON.parse(
        localStorage.getItem("studyDates")
    )
    || [];



function calculateStreak(){


    if(studyDates.length === 0){

        return 0;

    }



    // 日付を新しい順に整理

    const dates =
        [...new Set(studyDates)]
        .sort(function(a,b){

            return new Date(b) - new Date(a);

        });



    let streak = 0;


    const today =
        new Date();


    today.setHours(0,0,0,0);



    for(let i = 0; i < dates.length; i++){


        const date =
            new Date(dates[i]);


        date.setHours(0,0,0,0);



        const diff =
            (today - date)
            /
            (1000 * 60 * 60 * 24);



        if(diff === i){

            streak++;

        }else{

            break;

        }

    }


    return streak;

}



const streak =
    calculateStreak();



// ============================
// 表示
// ============================

document.getElementById("streak").textContent =
    streak;


document.getElementById("learned").textContent =
    learned;
    
    