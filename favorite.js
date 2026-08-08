// ============================
// Favorites取得
// ============================

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


// ============================
// 表示場所
// ============================

const favoriteList =
    document.getElementById("favoriteList");


// ============================
// お気に入りなし
// ============================

if(favorites.length === 0){

    favoriteList.innerHTML = `

        <div style="
            text-align:center;
            padding:30px 10px;
        ">

            <div style="
                font-size:48px;
                margin-bottom:15px;
            ">
                ⭐
            </div>

            <h2>
                No Favorites Yet
            </h2>

            <p style="
                color:#666;
                line-height:1.7;
            ">
                Favorite phrases will appear here.
            </p>

        </div>

    `;

}


// ============================
// お気に入り表示
// ============================

else{

    favorites.forEach(function(favoriteId){

        const question =
            questionBank.find(function(q){

                return q.id === favoriteId;

            });


        // 問題が見つからない場合
        if(!question){

            return;

        }


        const card =
            document.createElement("div");

        card.className = "card";

        card.style.marginBottom = "20px";


        card.innerHTML = `

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:flex-start;
                gap:10px;
            ">

                <h3 style="
                    margin:0;
                    line-height:1.5;
                ">
                    ${question.japanese}
                </h3>

                <button
                    class="remove"
                    style="
                        border:none;
                        background:none;
                        font-size:24px;
                        cursor:pointer;
                    "
                >
                    ⭐
                </button>

            </div>


            <p style="
                font-weight:bold;
                line-height:1.6;
                margin-top:12px;
            ">
                ${question.english}
            </p>


            <button
                class="listen"
                style="
                    padding:10px 18px;
                    border:none;
                    border-radius:12px;
                    cursor:pointer;
                "
            >
                🔊 Listen
            </button>

        `;


        // ============================
        // Listen
        // ============================

        card.querySelector(".listen").onclick =
        function(){

            const speech =
                new SpeechSynthesisUtterance(
                    question.english
                );

            speech.lang = "en-US";

            speech.rate = 0.8;

            speechSynthesis.speak(speech);

        };


        // ============================
        // Favorite解除
        // ============================

        card.querySelector(".remove").onclick =
        function(){

            const index =
                favorites.indexOf(
                    question.id
                );


            if(index !== -1){

                favorites.splice(index, 1);

            }


            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );


            location.reload();

        };


        favoriteList.appendChild(card);

    });

}