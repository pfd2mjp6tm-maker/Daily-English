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
                gap:15px;
            ">


                <!-- 日本語 -->

                <h3 style="
                    margin:0;
                    line-height:1.5;
                    font-size:24px;
                    font-family:inherit;
                    flex:1;
                ">
                    ${question.japanese}
                </h3>


                <!-- お気に入り -->

                <button
                    class="remove favorite-icon"
                >
                    ★
                </button>

            </div>


            <!-- 英語 -->

            <p style="
                margin-top:15px;
                margin-bottom:18px;
                font-size:20px;
                line-height:1.6;
                font-family:inherit;
                font-weight:normal;
            ">
                ${question.english}
            </p>


            <!-- Listen -->

            <button
                class="listen"
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