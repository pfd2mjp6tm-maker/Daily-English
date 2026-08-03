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
// ============================

let learned = 0;


reviewHistory.forEach(function(lesson){

    learned += lesson.questions.length;

});



// ============================
// Streak計算
// ============================


// Lesson完了日を取得

const studyDates =
    JSON.parse(
        localStorage.getItem("studyDates")
    )
    || [];



function calculateStreak(){

    if(studyDates.length === 0){

        return 0;

    }


    let streak = 0;


    const today =
        new Date();


    today.setHours(0,0,0,0);



    for(
        let i = 0;
        i < studyDates.length;
        i++
    ){

        const date =
            new Date(studyDates[i]);


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