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
// 学習したDay数
// ============================

const streak =
    reviewHistory.length;



// ============================
// 学習した文章数
// ============================

let learned = 0;


reviewHistory.forEach(function(lesson){

    learned += lesson.questions.length;

});



// ============================
// 表示
// ============================

document.getElementById("streak").textContent =
    streak;


document.getElementById("learned").textContent =
    learned;