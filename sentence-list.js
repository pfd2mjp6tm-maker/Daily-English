// ==================================================
// Sentence List
// ==================================================


// ==================================================
// 表示場所
// ==================================================

const sentenceList =
    document.getElementById(
        "sentenceList"
    );


// ==================================================
// カテゴリー取得
// questionBankから自動生成
// ==================================================

const categories = [];


questionBank.forEach(function(question){

    if(
        !categories.includes(
            question.category
        )
    ){

        categories.push(
            question.category
        );

    }

});


// ==================================================
// URLからカテゴリー取得
// ==================================================

const params =
    new URLSearchParams(
        window.location.search
    );


const selectedCategory =
    params.get(
        "category"
    );


// ==================================================
// 全問題表示
// ==================================================

if(
    selectedCategory === "all"
){

    showAllQuestions();

}


// ==================================================
// カテゴリー表示
// ==================================================

else if(
    selectedCategory
){

    showCategoryQuestions(
        selectedCategory
    );

}


// ==================================================
// カテゴリー一覧表示
// ==================================================

else{

    showCategoryList();

}


// ==================================================
// カテゴリー一覧
// ==================================================

function showCategoryList(){


    // ==================================================
    // タイトル
    // ==================================================

    document.getElementById(
        "pageTitle"
    ).textContent =
        "📖 Sentence List";


    document.getElementById(
        "pageSubtitle"
    ).textContent =
        "Browse all the phrases you've learned.";


    // ==================================================
    // All Sentences
    // ==================================================

    const allCard =
        document.createElement(
            "div"
        );


    allCard.className =
        "card";


    allCard.style.cursor =
        "pointer";


    allCard.innerHTML = `

        <div style="
            display:flex;
            align-items:center;
            justify-content:space-between;
        ">

            <div>

                <div style="
                    font-size:18px;
                    font-weight:bold;
                    margin-bottom:6px;
                ">
                    📚 All Sentences
                </div>

                <div style="
                    color:#666;
                    font-size:14px;
                ">
                    ${questionBank.length} sentences
                </div>

            </div>


            <div style="
                font-size:26px;
                color:#aaa;
            ">
                ›
            </div>

        </div>

    `;


    allCard.onclick =
    function(){

        window.location.href =
            "sentence-list.html?category=all";

    };


    sentenceList.appendChild(
        allCard
    );


    // ==================================================
    // Categories見出し
    // ==================================================

    const categoryTitle =
        document.createElement(
            "h2"
        );


    categoryTitle.textContent =
        "Categories";


    categoryTitle.style.marginTop =
        "30px";


    categoryTitle.style.marginBottom =
        "15px";


    sentenceList.appendChild(
        categoryTitle
    );


    // ==================================================
    // カテゴリー一覧
    // ==================================================

    categories.forEach(
        function(category){


            // ----------------------------
            // そのカテゴリーの問題
            // ----------------------------

            const questions =
                questionBank.filter(
                    function(question){

                        return (
                            question.category ===
                            category
                        );

                    }
                );


            // ----------------------------
            // カード
            // ----------------------------

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "card";


            card.style.cursor =
                "pointer";


            // ----------------------------
            // カード内容
            // ----------------------------

            card.innerHTML = `

                <div style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                ">

                    <div>

                        <div style="
                            font-size:18px;
                            font-weight:bold;
                            margin-bottom:6px;
                        ">
                            ${category}
                        </div>

                        <div style="
                            color:#666;
                            font-size:14px;
                        ">
                            ${questions.length} sentences
                        </div>

                    </div>


                    <div style="
                        font-size:26px;
                        color:#aaa;
                    ">
                        ›
                    </div>

                </div>

            `;


            // ----------------------------
            // カテゴリーを開く
            // ----------------------------

            card.onclick =
            function(){

                window.location.href =
                    "sentence-list.html?category="
                    +
                    encodeURIComponent(
                        category
                    );

            };


            sentenceList.appendChild(
                card
            );

        }
    );

}


// ==================================================
// 全問題表示
// ==================================================

function showAllQuestions(){


    // ==================================================
    // 戻る
    // ==================================================

    document.querySelector(
        ".back"
    ).textContent =
        "← Categories";


    document.querySelector(
        ".back"
    ).href =
        "sentence-list.html";


    // ==================================================
    // タイトル
    // ==================================================

    document.getElementById(
        "pageTitle"
    ).textContent =
        "📚 All Sentences";


    document.getElementById(
        "pageSubtitle"
    ).textContent =
        questionBank.length
        +
        " sentences";


    // ==================================================
    // 問題表示
    // 新しい問題を上に表示
    // ==================================================

    questionBank
        .slice()
        .sort(function(a,b){

            return b.id - a.id;

        })
        .forEach(
            function(question){

                createQuestionCard(
                    question
                );

            }
        );

}


// ==================================================
// カテゴリー内の問題表示
// ==================================================

function showCategoryQuestions(
    category
){


    // ==================================================
    // カテゴリーの問題取得
    // ==================================================

    const questions =
        questionBank.filter(
            function(question){

                return (
                    question.category ===
                    category
                );

            }
        );


    // ==================================================
    // 戻る
    // ==================================================

    document.querySelector(
        ".back"
    ).textContent =
        "← Categories";


    document.querySelector(
        ".back"
    ).href =
        "sentence-list.html";


    // ==================================================
    // タイトル
    // ==================================================

    document.getElementById(
        "pageTitle"
    ).textContent =
        category;


    document.getElementById(
        "pageSubtitle"
    ).textContent =
        questions.length
        +
        " sentences";


    // ==================================================
    // 問題がない場合
    // ==================================================

    if(
        questions.length === 0
    ){

        sentenceList.innerHTML = `

            <div class="card">

                <div style="
                    text-align:center;
                    padding:30px 10px;
                ">

                    <div style="
                        font-size:48px;
                        margin-bottom:15px;
                    ">
                        📚
                    </div>

                    <h2>
                        No Sentences
                    </h2>

                    <p style="
                        color:#666;
                        line-height:1.7;
                    ">
                        No sentences were found.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    // ==================================================
    // 問題表示
    // 新しい問題を上に表示
    // ==================================================

    questions
        .slice()
        .sort(function(a,b){

            return b.id - a.id;

        })
        .forEach(
            function(question){

                createQuestionCard(
                    question
                );

            }
        );

}


// ==================================================
// 問題カード作成
// ==================================================

function createQuestionCard(
    question
){


    // ==================================================
    // カード
    // ==================================================

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "card";


    card.style.marginBottom =
        "20px";


    // ==================================================
    // カード内容
// ==================================================

    card.innerHTML = `

        <!-- ============================
             Day / Category
        ============================= -->

        <div style="
            color:#888;
            font-size:13px;
            margin-bottom:12px;
        ">

            Day ${question.day}
            ・
            ${question.category}

        </div>


        <!-- ============================
             日本語
        ============================= -->

        <div style="
            font-size:16px;
            line-height:1.6;
            margin-bottom:16px;
        ">

            ${question.japanese}

        </div>


        <!-- ============================
             英語
        ============================= -->

        <div
            class="sentence-english"
            style="
                display:none;

                font-size:18px;
                line-height:1.5;
                font-weight:bold;
                font-family:Arial, Helvetica, sans-serif;

                margin-bottom:18px;
            "
        >

            ${question.english}

        </div>


        <!-- ============================
             Show Answer
        ============================= -->

        <button
            class="show-answer"
            style="
                width:100%;

                margin-bottom:12px;

                padding:12px 15px;

                border:none;
                border-radius:12px;

                background:#f1f1f1;

                color:#333;

                font-size:15px;
                font-weight:bold;

                cursor:pointer;
            "
        >
            👀 Show Answer
        </button>


        <!-- ============================
             Listen
        ============================= -->

        <button
            class="listen"
        >
            🔊 Listen
        </button>

    `;


    sentenceList.appendChild(
        card
    );


    // ==================================================
    // 英語
    // ==================================================

    const englishText =
        card.querySelector(
            ".sentence-english"
        );


    // ==================================================
    // Show Answer
    // ==================================================

    const showAnswerButton =
        card.querySelector(
            ".show-answer"
        );


    showAnswerButton.onclick =
    function(){

        const isHidden =
            englishText.style.display ===
            "none";


        if(isHidden){

            // ----------------------------
            // 英語を表示
            // ----------------------------

            englishText.style.display =
                "block";


            showAnswerButton.textContent =
                "🙈 Hide Answer";


        }else{

            // ----------------------------
            // 英語を非表示
            // ----------------------------

            englishText.style.display =
                "none";


            showAnswerButton.textContent =
                "👀 Show Answer";

        }

    };


    // ==================================================
    // Listen
    // ==================================================

    const listenButton =
        card.querySelector(
            ".listen"
        );


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


    // ==================================================
    // 英語フォントをListenと合わせる
    // ==================================================

    const listenStyle =
        getComputedStyle(
            listenButton
        );


    englishText.style.fontFamily =
        listenStyle.fontFamily;


    englishText.style.fontWeight =
        listenStyle.fontWeight;

}