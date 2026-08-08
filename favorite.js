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
            padding:40px 10px;
        ">

            <div style="
                font-size:48px;
                margin-bottom:15px;
            ">
                ☆
            </div>

            <h2 style="
                font-family:Arial, sans-serif;
            ">
                No Favorites Yet
            </h2>

            <p style="
                color:#666;
                line-height:1.7;
                font-family:Arial, sans-serif;
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


        // ============================
        // カード
        // ============================

        const card =
            document.createElement("div");

        card.className = "card";

        card.style.marginBottom = "20px";


        card.innerHTML = `

            <div style="
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
                gap:15px;
            ">


                <!-- ==================
                     日本語
                =================== -->

                <div
                    class="favorite-japanese"
                    style="
                        flex:1;
                        font-size:22px;
                        line-height:1.6;
                        margin:0;
                        font-weight:normal;
                    "
                >
                    ${question.japanese}
                </div>


                <!-- ==================
                     Favorite
                =================== -->

                <button
                    class="favorite-star"
                    aria-label="Remove favorite"
                    style="
                        border:none;
                        background:none;
                        padding:0;
                        margin:0;
                        font-size:52px;
                        line-height:1;
                        cursor:pointer;
                        color:#FFD21C;
                        flex-shrink:0;
                    "
                >
                    ★
                </button>

            </div>


            <!-- ==================
                 英語
            =================== -->

            <div
                class="favorite-english"
                style="
                    margin-top:18px;
                    margin-bottom:18px;
                    font-size:22px;
                    line-height:1.5;
                    font-weight:bold;
                "
            >
                ${question.english}
            </div>


            <!-- ==================
                 Listen
            =================== -->

            <button
                class="listen"
            >
                🔊 Listen
            </button>

        `;


        favoriteList.appendChild(card);


        // ============================
        // Listen
        // ============================

        const listenButton =
            card.querySelector(".listen");


        listenButton.onclick =
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
        // 英語のフォントを
        // Listenと完全に合わせる
        // ============================

        const englishText =
            card.querySelector(
                ".favorite-english"
            );


        const listenStyle =
            getComputedStyle(
                listenButton
            );


        englishText.style.fontFamily =
            listenStyle.fontFamily;


        englishText.style.fontWeight =
            listenStyle.fontWeight;



        // ============================
        // Favorite解除
        // ============================

        const favoriteButton =
            card.querySelector(
                ".favorite-star"
            );


        favoriteButton.onclick =
        function(){

            showRemoveFavoritePopup(
                question,
                card
            );

        };

    });

}


// ==================================================
// お気に入り解除確認ポップアップ
// ==================================================

function showRemoveFavoritePopup(
    question,
    card
){


    // すでに表示されていたら作らない

    if(
        document.getElementById(
            "favoriteModal"
        )
    ){

        return;

    }


    // ============================
    // 背景
    // ============================

    const overlay =
        document.createElement("div");


    overlay.id =
        "favoriteModal";


    overlay.style.cssText = `

        position:fixed;
        inset:0;

        background:rgba(0,0,0,0.35);

        display:flex;
        align-items:center;
        justify-content:center;

        z-index:9999;

        padding:20px;

        box-sizing:border-box;

    `;


    // ============================
    // ポップアップ
    // ============================

    const modal =
        document.createElement("div");


    modal.style.cssText = `

        width:100%;
        max-width:420px;

        background:white;

        border-radius:25px;

        padding:30px 25px 25px;

        box-sizing:border-box;

        text-align:center;

        box-shadow:
            0 15px 40px
            rgba(0,0,0,0.20);

        font-family:Arial, sans-serif;

    `;


    modal.innerHTML = `

        <!-- ==================
             アイコン
        =================== -->

        <div style="
            width:70px;
            height:70px;

            margin:0 auto 20px;

            border-radius:50%;

            background:#FFF7D6;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:40px;

            color:#F2B900;
        ">
            ?
        </div>


        <!-- ==================
             タイトル
        =================== -->

        <h2 style="
            margin:0 0 15px;

            font-size:22px;

            color:#333;
        ">
            お気に入りを解除しますか？
        </h2>


        <!-- ==================
             説明
        =================== -->

        <p style="
            margin:0 0 25px;

            color:#666;

            font-size:15px;

            line-height:1.7;
        ">
            このフレーズをお気に入りから<br>
            削除します。
        </p>


        <!-- ==================
             ボタン
        =================== -->

        <div style="
            display:flex;
            gap:12px;
        ">

            <button
                id="cancelFavorite"
                style="
                    flex:1;

                    padding:14px 10px;

                    border:none;
                    border-radius:14px;

                    background:#eeeeee;

                    color:#333;

                    font-size:16px;
                    font-weight:bold;

                    cursor:pointer;
                "
            >
                キャンセル
            </button>


            <button
                id="confirmFavorite"
                style="
                    flex:1;

                    padding:14px 10px;

                    border:none;
                    border-radius:14px;

                    background:#e85b4a;

                    color:white;

                    font-size:16px;
                    font-weight:bold;

                    cursor:pointer;
                "
            >
                解除する
            </button>

        </div>

    `;


    overlay.appendChild(modal);

    document.body.appendChild(overlay);


    // ============================
    // キャンセル
    // ============================

    document.getElementById(
        "cancelFavorite"
    ).onclick =
    function(){

        overlay.remove();

    };


    // ============================
    // 解除する
    // ============================

    document.getElementById(
        "confirmFavorite"
    ).onclick =
    function(){


        const index =
            favorites.indexOf(
                question.id
            );


        if(index !== -1){

            favorites.splice(
                index,
                1
            );

        }


        localStorage.setItem(
            "favorites",
            JSON.stringify(
                favorites
            )
        );


        // ポップアップを閉じる

        overlay.remove();


        // カードを消す

        card.style.opacity =
            "0";


        card.style.transform =
            "translateY(-10px)";


        card.style.transition =
            "0.2s";


        setTimeout(
            function(){

                card.remove();


                // 全部なくなった場合

                if(
                    favorites.length === 0
                ){

                    location.reload();

                }

            },
            200
        );

    };

}