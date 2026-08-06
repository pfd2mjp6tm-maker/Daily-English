// ====================
// Favorites取得
// ====================

const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteList =
    document.getElementById("favoriteList");


// お気に入りが0件

if(favorites.length === 0){

    favoriteList.innerHTML =
        "<p style='text-align:center;'>まだお気に入りはありません⭐</p>";

}else{

    const favoriteQuestions =
        questionBank.filter(function(question){

            return favorites.includes(question.id);

        });


    favoriteQuestions.forEach(function(question){

        const card =
            document.createElement("div");

        card.className = "card";

        card.style.marginBottom = "15px";


        card.innerHTML =

        "<h3>" + question.japanese + "</h3>" +

        "<p><strong>" +
        question.english +
        "</strong></p>" +

        "<button class='listen'>🔊 Listen</button>" +

        "<button class='remove'>⭐ Remove</button>";


        // Listen
        card.querySelector(".listen").onclick = function(){

            const speech =
                new SpeechSynthesisUtterance(question.english);

            speech.lang = "en-US";
            speech.rate = 0.8;

            speechSynthesis.speak(speech);

        };


        // Remove
        card.querySelector(".remove").onclick = function(){

            const index =
                favorites.indexOf(question.id);

            favorites.splice(index,1);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            location.reload();

        };


        favoriteList.appendChild(card);

    });

}