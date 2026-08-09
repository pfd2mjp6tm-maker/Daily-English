// ============================================================
// questionBank Validator
// Daily English 問題チェック用
// ============================================================
//
// このファイルは questionBank.js の問題を自動チェックします。
//
// チェック内容
// ① IDの重複
// ② 日本語の完全重複
// ③ 英文の完全重複
// ④ 似た英文
// ⑤ 似た日本語
// ⑥ Dayの抜け
// ⑦ 1 Day 5問になっているか
// ⑧ 必須項目の抜け
// ⑨ answerの異常
// ⑩ 正解英文とchoicesの不一致
//
// ============================================================


// ============================================================
// 設定
// ============================================================

const VALIDATOR_CONFIG = {

    // 1 Day あたりの問題数
    QUESTIONS_PER_DAY: 5,

    // 似ていると判断する基準
    // 数字を小さくすると厳しくなる
    SIMILARITY_THRESHOLD: 0.65,

    // 似ている問題を最大何件表示するか
    MAX_SIMILAR_RESULTS: 30

};


// ============================================================
// メイン
// ============================================================

function validateQuestionBank() {

    console.clear();

    console.log("======================================");
    console.log("📚 Daily English");
    console.log("Question Bank Validator");
    console.log("======================================");

    // questionBank が存在するか確認
    if (
        typeof questionBank === "undefined" ||
        !Array.isArray(questionBank)
    ) {

        console.error(
            "❌ questionBank が見つかりません。"
        );

        console.error(
            "questionBank.js が先に読み込まれているか確認してください。"
        );

        return;

    }


    console.log(
        `📊 問題数：${questionBank.length}問`
    );

    console.log("");


    // --------------------------------------------------------
    // 各チェック
    // --------------------------------------------------------

    const idErrors =
        checkDuplicateIds();

    const japaneseErrors =
        checkDuplicateJapanese();

    const englishErrors =
        checkDuplicateEnglish();

    const similarResults =
        checkSimilarQuestions();

    const dayErrors =
        checkDays();

    const countErrors =
        checkQuestionCount();

    const fieldErrors =
        checkRequiredFields();

    const answerErrors =
        checkAnswers();


    // --------------------------------------------------------
    // 結果
    // --------------------------------------------------------

    console.log("");
    console.log("======================================");
    console.log("📋 CHECK RESULT");
    console.log("======================================");


    const errorCount =
        idErrors.length +
        japaneseErrors.length +
        englishErrors.length +
        dayErrors.length +
        countErrors.length +
        fieldErrors.length +
        answerErrors.length;


    const warningCount =
        similarResults.length;


    console.log(
        `❌ エラー：${errorCount}件`
    );

    console.log(
        `⚠️ 類似候補：${warningCount}件`
    );


    if (errorCount === 0 && warningCount === 0) {

        console.log("");
        console.log(
            "🎉 問題ありません！"
        );

        console.log(
            "Question Bank is clean!"
        );

    }


    if (errorCount === 0 && warningCount > 0) {

        console.log("");
        console.log(
            "✅ 致命的なエラーはありません。"
        );

        console.log(
            "⚠️ ただし、似た問題が見つかっています。"
        );

    }


    console.log("");
    console.log("======================================");


    return {

        errors: {

            duplicateIds:
                idErrors,

            duplicateJapanese:
                japaneseErrors,

            duplicateEnglish:
                englishErrors,

            days:
                dayErrors,

            questionCount:
                countErrors,

            requiredFields:
                fieldErrors,

            answers:
                answerErrors

        },

        warnings: {

            similarQuestions:
                similarResults

        }

    };

}



// ============================================================
// ① ID重複チェック
// ============================================================

function checkDuplicateIds() {

    const results = [];

    const idMap = {};


    questionBank.forEach(function(question) {

        if (
            question.id === undefined ||
            question.id === null
        ) {
            return;
        }


        if (!idMap[question.id]) {

            idMap[question.id] = [];

        }


        idMap[question.id].push(question);

    });


    Object.keys(idMap).forEach(function(id) {

        if (idMap[id].length > 1) {

            console.error("");
            console.error(
                `❌ ID重複: ${id}`
            );


            idMap[id].forEach(function(question) {

                console.error(
                    `   Day ${question.day}: ${question.english}`
                );

            });


            results.push(id);

        }

    });


    return results;

}



// ============================================================
// ② 日本語完全重複
// ============================================================

function checkDuplicateJapanese() {

    const results = [];

    const map = {};


    questionBank.forEach(function(question) {

        if (!question.japanese) {
            return;
        }


        const text =
            normalizeJapanese(question.japanese);


        if (!map[text]) {

            map[text] = [];

        }


        map[text].push(question);

    });


    Object.keys(map).forEach(function(text) {

        if (map[text].length > 1) {

            console.warn("");
            console.warn(
                "⚠️ 日本語が重複しています:"
            );


            map[text].forEach(function(question) {

                console.warn(
                    `   ID ${question.id} / Day ${question.day} / ${question.japanese}`
                );

            });


            results.push(map[text]);

        }

    });


    return results;

}



// ============================================================
// ③ 英文完全重複
// ============================================================

function checkDuplicateEnglish() {

    const results = [];

    const map = {};


    questionBank.forEach(function(question) {

        if (!question.english) {
            return;
        }


        const text =
            normalizeEnglish(question.english);


        if (!map[text]) {

            map[text] = [];

        }


        map[text].push(question);

    });


    Object.keys(map).forEach(function(text) {

        if (map[text].length > 1) {

            console.warn("");
            console.warn(
                "⚠️ 英文が重複しています:"
            );


            map[text].forEach(function(question) {

                console.warn(
                    `   ID ${question.id} / Day ${question.day} / ${question.english}`
                );

            });


            results.push(map[text]);

        }

    });


    return results;

}



// ============================================================
// ④ 似た問題チェック
// ============================================================

function checkSimilarQuestions() {

    const results = [];


    for (
        let i = 0;
        i < questionBank.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < questionBank.length;
            j++
        ) {

            const q1 =
                questionBank[i];

            const q2 =
                questionBank[j];


            // 同じ英文なら完全重複なので
            // ここでは除外
            if (
                normalizeEnglish(q1.english) ===
                normalizeEnglish(q2.english)
            ) {
                continue;
            }


            const englishSimilarity =
                calculateSimilarity(
                    q1.english,
                    q2.english
                );


            const japaneseSimilarity =
                calculateSimilarity(
                    q1.japanese,
                    q2.japanese
                );


            // 英文または日本語がかなり似ている場合
            if (
                englishSimilarity >=
                    VALIDATOR_CONFIG.SIMILARITY_THRESHOLD
                ||
                japaneseSimilarity >=
                    VALIDATOR_CONFIG.SIMILARITY_THRESHOLD
            ) {

                results.push({

                    id1: q1.id,
                    id2: q2.id,

                    day1: q1.day,
                    day2: q2.day,

                    english1: q1.english,
                    english2: q2.english,

                    japanese1: q1.japanese,
                    japanese2: q2.japanese,

                    englishSimilarity:
                        Math.round(
                            englishSimilarity * 100
                        ),

                    japaneseSimilarity:
                        Math.round(
                            japaneseSimilarity * 100
                        )

                });

            }

        }

    }


    // 最大表示数
    const limitedResults =
        results.slice(
            0,
            VALIDATOR_CONFIG.MAX_SIMILAR_RESULTS
        );


    if (limitedResults.length > 0) {

        console.warn("");
        console.warn(
            "======================================"
        );

        console.warn(
            "⚠️ 似た問題が見つかりました"
        );

        console.warn(
            "======================================"
        );


        limitedResults.forEach(function(result) {

            console.warn("");

            console.warn(
                `ID ${result.id1} / Day ${result.day1}`
            );

            console.warn(
                `🇯🇵 ${result.japanese1}`
            );

            console.warn(
                `🇺🇸 ${result.english1}`
            );


            console.warn("        ↓");


            console.warn(
                `ID ${result.id2} / Day ${result.day2}`
            );

            console.warn(
                `🇯🇵 ${result.japanese2}`
            );

            console.warn(
                `🇺🇸 ${result.english2}`
            );


            console.warn(
                `英文類似度：${result.englishSimilarity}%`
            );

            console.warn(
                `日本語類似度：${result.japaneseSimilarity}%`
            );

        });

    }


    return results;

}



// ============================================================
// ⑤ Dayチェック
// ============================================================

function checkDays() {

    const results = [];


    const days = [];


    questionBank.forEach(function(question) {

        if (
            typeof question.day === "number"
        ) {

            days.push(question.day);

        }

    });


    if (days.length === 0) {

        return results;

    }


    const uniqueDays =
        [...new Set(days)].sort(
            function(a, b) {
                return a - b;
            }
        );


    const minDay =
        uniqueDays[0];

    const maxDay =
        uniqueDays[
            uniqueDays.length - 1
        ];


    for (
        let day = minDay;
        day <= maxDay;
        day++
    ) {

        if (
            !uniqueDays.includes(day)
        ) {

            console.error("");

            console.error(
                `❌ Day ${day} がありません`
            );


            results.push(day);

        }

    }


    return results;

}



// ============================================================
// ⑥ 1 Day 5問チェック
// ============================================================

function checkQuestionCount() {

    const results = [];

    const dayMap = {};


    questionBank.forEach(function(question) {

        if (
            question.day === undefined
        ) {
            return;
        }


        if (!dayMap[question.day]) {

            dayMap[question.day] = [];

        }


        dayMap[question.day].push(question);

    });


    Object.keys(dayMap).forEach(function(day) {

        const count =
            dayMap[day].length;


        if (
            count !==
            VALIDATOR_CONFIG.QUESTIONS_PER_DAY
        ) {

            console.error("");

            console.error(
                `❌ Day ${day} は ${count}問です`
            );

            console.error(
                `   → ${VALIDATOR_CONFIG.QUESTIONS_PER_DAY}問必要です`
            );


            results.push({

                day: Number(day),

                count: count

            });

        }

    });


    return results;

}



// ============================================================
// ⑦ 必須項目チェック
// ============================================================

function checkRequiredFields() {

    const results = [];


    const requiredFields = [

        "id",
        "day",
        "japanese",
        "english",
        "choices",
        "answer",
        "tip",
        "extra",
        "category",
        "level"

    ];


    questionBank.forEach(function(question) {

        requiredFields.forEach(function(field) {

            if (
                question[field] === undefined ||
                question[field] === null ||
                question[field] === ""
            ) {

                console.error("");

                console.error(
                    `❌ 必須項目がありません`
                );

                console.error(
                    `ID: ${question.id}`
                );

                console.error(
                    `不足: ${field}`
                );


                results.push({

                    id: question.id,

                    field: field

                });

            }

        });

    });


    return results;

}



// ============================================================
// ⑧ answer / choices チェック
// ============================================================

function checkAnswers() {

    const results = [];


    questionBank.forEach(function(question) {


        // choices が配列か
        if (
            !Array.isArray(question.choices)
        ) {

            console.error("");

            console.error(
                `❌ choices が配列ではありません`
            );

            console.error(
                `ID: ${question.id}`
            );


            results.push({

                id: question.id,

                type: "choices"

            });


            return;

        }


        // choices が4つか
        if (
            question.choices.length !== 4
        ) {

            console.error("");

            console.error(
                `❌ choices が4つではありません`
            );

            console.error(
                `ID: ${question.id}`
            );

            console.error(
                `現在: ${question.choices.length}個`
            );


            results.push({

                id: question.id,

                type: "choice_count"

            });

        }


        // answer が数字か
        if (
            typeof question.answer !== "number"
        ) {

            console.error("");

            console.error(
                `❌ answer が数字ではありません`
            );

            console.error(
                `ID: ${question.id}`
            );


            results.push({

                id: question.id,

                type: "answer_type"

            });


            return;

        }


        // answer の範囲
        if (
            question.answer < 0 ||
            question.answer >=
                question.choices.length
        ) {

            console.error("");

            console.error(
                `❌ answer の番号が不正です`
            );

            console.error(
                `ID: ${question.id}`
            );

            console.error(
                `answer: ${question.answer}`
            );


            results.push({

                id: question.id,

                type: "answer_range"

            });

        }


        // 正解英文と choices の一致
        if (
            question.choices[
                question.answer
            ] !== question.english
        ) {

            console.error("");

            console.error(
                `❌ 正解英文とanswerが一致していません`
            );

            console.error(
                `ID: ${question.id}`
            );

            console.error(
                `english: ${question.english}`
            );

            console.error(
                `answer choice: ${
                    question.choices[
                        question.answer
                    ]
                }`
            );


            results.push({

                id: question.id,

                type: "answer_mismatch"

            });

        }

    });


    return results;

}



// ============================================================
// 文字列をきれいにする
// ============================================================

function normalizeEnglish(text) {

    if (!text) {
        return "";
    }


    return String(text)

        .toLowerCase()

        .replace(/[.,!?'"`]/g, "")

        .replace(/\s+/g, " ")

        .trim();

}



// ============================================================
// 日本語をきれいにする
// ============================================================

function normalizeJapanese(text) {

    if (!text) {
        return "";
    }


    return String(text)

        .replace(/[。！？!?「」『』（）()、,.\s]/g, "")

        .trim();

}



// ============================================================
// 類似度計算
// Jaccard + 編集距離を組み合わせる
// ============================================================

function calculateSimilarity(text1, text2) {

    if (!text1 || !text2) {

        return 0;

    }


    const normalized1 =
        normalizeEnglish(text1);

    const normalized2 =
        normalizeEnglish(text2);


    if (
        normalized1 === normalized2
    ) {

        return 1;

    }


    // 英文を単語に分割
    const words1 =
        new Set(
            normalized1
                .split(" ")
                .filter(Boolean)
        );


    const words2 =
        new Set(
            normalized2
                .split(" ")
                .filter(Boolean)
        );


    // 日本語など、スペースがない文章の場合
    if (
        words1.size <= 1 ||
        words2.size <= 1
    ) {

        return characterSimilarity(
            normalized1,
            normalized2
        );

    }


    // 共通単語
    const intersection =
        new Set(
            [...words1].filter(
                word =>
                    words2.has(word)
            )
        );


    // 全単語
    const union =
        new Set(
            [...words1, ...words2]
        );


    const jaccard =
        intersection.size /
        union.size;


    const character =
        characterSimilarity(
            normalized1,
            normalized2
        );


    // 単語一致を重視
    return (
        jaccard * 0.7 +
        character * 0.3
    );

}



// ============================================================
// 文字列類似度
// ============================================================

function characterSimilarity(text1, text2) {

    const distance =
        levenshteinDistance(
            text1,
            text2
        );


    const maxLength =
        Math.max(
            text1.length,
            text2.length
        );


    if (maxLength === 0) {

        return 1;

    }


    return (
        1 -
        distance / maxLength
    );

}



// ============================================================
// Levenshtein Distance
// ============================================================

function levenshteinDistance(
    text1,
    text2
) {

    const matrix = [];


    for (
        let i = 0;
        i <= text2.length;
        i++
    ) {

        matrix[i] = [i];

    }


    for (
        let j = 0;
        j <= text1.length;
        j++
    ) {

        matrix[0][j] = j;

    }


    for (
        let i = 1;
        i <= text2.length;
        i++
    ) {

        for (
            let j = 1;
            j <= text1.length;
            j++
        ) {

            if (
                text2.charAt(i - 1) ===
                text1.charAt(j - 1)
            ) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] =
                    Math.min(

                        matrix[i - 1][j - 1] + 1,

                        matrix[i][j - 1] + 1,

                        matrix[i - 1][j] + 1

                    );

            }

        }

    }


    return matrix[
        text2.length
    ][
        text1.length
    ];

}



// ============================================================
// 起動
// ============================================================
//
// ブラウザで questionBankValidator.js が読み込まれたら
// 自動でチェックします。
//
// ============================================================

validateQuestionBank();