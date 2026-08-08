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
// お気に入りがない場合
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
// お気に入り問題取得
// ============================

else{

    const favoriteQuestions =
        questionBank.filter(function(question){

            return favorites.includes(question.id);

        });


    // ============================
    // 一覧表示
    // ============================

    favoriteQuestions.forEach(function(question){

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
                margin-bottom:12px;
            ">

                <div style="
                    font-size:20px;
                    font-weight:bold;
                    line-height:1.5;
                ">
                    ${question.japanese}
                </div>

                <button
                    class="remove"
                    style="
                        border:none;
                        background:none;
                        font-size:28px;
                        cursor:pointer;
                        flex-shrink:0;
                    "
                >
                    ⭐
                </button>

            </div>


            <p style="
                font-size:18px;
                font-weight:bold;
                line-height:1.6;
                margin:10px 0;
            ">
                ${question.english}
            </p>


            <button
                class="listen"
                style="
                    margin-top:8px;
                    padding:10px 18px;
                    border:none;
                    border-radius:12px;
                    cursor:pointer;
                "
            >
                🔊 Listen
            </button>


            ${
                question.tip
                ?
                `
                <p style="
                    margin-top:15px;
                    color:#666;
                    line-height:1.6;
                ">
                    💡 ${question.tip}
                </p>
                `
                :
                ""
            }


            ${
                question.extra
                ?
                `
                <p style="
                    color:#666;
                    line-height:1.6;
                ">
                    ✨ ${question.extra}
                </p>
                `
                :
                ""
            }


            ${
                question.pattern
                ?
                `
                <div style="
                    margin-top:15px;
                    padding:12px;
                    background:#f5f5f5;
                    border-radius:12px;
                    white-space:pre-line;
                    line-height:1.6;
                ">
                    🧩 ${question.pattern}
                </div>
                `
                :
                ""
            }

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

            speech.lang =
                "en-US";

            speech.rate =
                0.8;

            speechSynthesis.speak(
                speech
            );

        };


        // ============================
        // Favorite解除
        // ============================

        card.querySelector(".remove").onclick =
        function(){

            const index =
                favorites.indexOf(question.id);


            if(index !== -1){

                favorites.splice(index, 1);

            }


            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );


            // 画面を更新
            location.reload();

        };


        favoriteList.appendChild(card);

    });

}