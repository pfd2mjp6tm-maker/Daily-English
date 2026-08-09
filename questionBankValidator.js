// ========================================
// Question Bank Validator
// 問題追加時の自動チェック
// ========================================


// ========================================
// 設定
// ========================================

// この数値以上なら「似ている」と判断
const SIMILARITY_THRESHOLD = 0.75;


// ========================================
// Question Bankチェック
// ========================================

function validateQuestionBank() {

    const errors = [];
    const warnings = [];


    // ====================================
    // Question Bankが存在するか確認
    // ====================================

    if (
        typeof questionBank === "undefined" ||
        !Array.isArray(questionBank)
    ) {

        alert(
            "🚨 Question Bank Error\n\n" +
            "questionBank.js が正しく読み込まれていません。"
        );

        return;

    }


    // ====================================
    // ① 基本チェック
    // ====================================

    questionBank.forEach(function(question, index) {

        const questionNumber = index + 1;


        // --------------------------------
        // ID
        // --------------------------------

        if (question.id === undefined) {

            errors.push(
                `問題 ${questionNumber}\n` +
                "→ id がありません。"
            );

        }


        // --------------------------------
        // ID重複
        // --------------------------------

        const sameId = questionBank.filter(function(q) {

            return q.id === question.id;

        });


        if (sameId.length > 1) {

            errors.push(
                `ID ${question.id}\n` +
                "→ id が重複しています。"
            );

        }


        // --------------------------------
        // Day
        // --------------------------------

        if (typeof question.day !== "number") {

            errors.push(
                `ID ${question.id}\n` +
                "→ day が正しく設定されていません。"
            );

        }


        // --------------------------------
        // Japanese
        // --------------------------------

        if (!question.japanese) {

            errors.push(
                `ID ${question.id}\n` +
                "→ japanese がありません。"
            );

        }


        // --------------------------------
        // English
        // --------------------------------

        if (!question.english) {

            errors.push(
                `ID ${question.id}\n` +
                "→ english がありません。"
            );

        }


        // --------------------------------
        // Choices
        // --------------------------------

        if (
            !Array.isArray(question.choices) ||
            question.choices.length !== 4
        ) {

            errors.push(
                `ID ${question.id}\n` +
                "→ choices は4つ必要です。"
            );

        }


        // --------------------------------
        // Answer
        // --------------------------------

        if (
            typeof question.answer !== "number" ||
            question.answer < 0 ||
            question.answer > 3
        ) {

            errors.push(
                `ID ${question.id}\n` +
                "→ answer が正しくありません。"
            );

        }


        // --------------------------------
        // Englishと正解選択肢
        // --------------------------------

        if (
            Array.isArray(question.choices) &&
            typeof question.answer === "number" &&
            question.choices[question.answer] !== question.english
        ) {

            errors.push(
                `ID ${question.id}\n` +
                "→ english と正解選択肢が一致していません。"
            );

        }


        // --------------------------------
        // Tip
        // --------------------------------

        if (!question.tip) {

            warnings.push(
                `ID ${question.id}\n` +
                "→ tip がありません。"
            );

        }


        // --------------------------------
        // Extra
        // --------------------------------

        if (!question.extra) {

            warnings.push(
                `ID ${question.id}\n` +
                "→ extra がありません。"
            );

        }

    });


    // ====================================
    // ② 完全重複チェック
    // ====================================

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

            const q1 = questionBank[i];
            const q2 = questionBank[j];


            // --------------------------------
            // 英文完全一致
            // --------------------------------

            if (
                normalizeText(q1.english) ===
                normalizeText(q2.english)
            ) {

                warnings.push(
                    `ID ${q1.id} と ID ${q2.id}\n` +
                    "→ 英文が完全に同じです。\n\n" +
                    `「${q1.english}」`
                );

            }


            // --------------------------------
            // 日本語完全一致
            // --------------------------------

            if (
                normalizeText(q1.japanese) ===
                normalizeText(q2.japanese)
            ) {

                warnings.push(
                    `ID ${q1.id} と ID ${q2.id}\n` +
                    "→ 日本語が完全に同じです。\n\n" +
                    `「${q1.japanese}」`
                );

            }

        }

    }


    // ====================================
    // ③ 英文類似チェック
    // ====================================

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

            const q1 = questionBank[i];
            const q2 = questionBank[j];


            const text1 = normalizeText(q1.english);
            const text2 = normalizeText(q2.english);


            // 完全一致は②でチェック済み
            if (text1 === text2) {
                continue;
            }


            const similarity =
                calculateSimilarity(
                    text1,
                    text2
                );


            if (
                similarity >= SIMILARITY_THRESHOLD
            ) {

                warnings.push(
                    `ID ${q1.id} と ID ${q2.id}\n` +
                    "→ 英文がかなり似ています。\n\n" +
                    `① ${q1.english}\n` +
                    `② ${q2.english}`
                );

            }

        }

    }


    // ====================================
    // 結果表示
    // ====================================

    showValidationResult(
        errors,
        warnings
    );

}


// ========================================
// テキストを正規化
// ========================================

function normalizeText(text) {

    if (!text) {
        return "";
    }


    return text
        .toLowerCase()
        .replace(/[.,!?'"`]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}


// ========================================
// 類似度計算
// ========================================

function calculateSimilarity(
    text1,
    text2
) {

    if (text1 === text2) {
        return 1;
    }


    const longer =
        text1.length > text2.length
            ? text1
            : text2;


    const shorter =
        text1.length > text2.length
            ? text2
            : text1;


    if (longer.length === 0) {
        return 1;
    }


    const distance =
        levenshteinDistance(
            longer,
            shorter
        );


    return (
        (longer.length - distance) /
        longer.length
    );

}


// ========================================
// Levenshtein Distance
// ========================================

function levenshteinDistance(
    a,
    b
) {

    const matrix = [];


    for (
        let i = 0;
        i <= b.length;
        i++
    ) {

        matrix[i] = [i];

    }


    for (
        let j = 0;
        j <= a.length;
        j++
    ) {

        matrix[0][j] = j;

    }


    for (
        let i = 1;
        i <= b.length;
        i++
    ) {

        for (
            let j = 1;
            j <= a.length;
            j++
        ) {

            if (
                b.charAt(i - 1) ===
                a.charAt(j - 1)
            ) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] =
                    Math.min(

                        matrix[i - 1][j] + 1,

                        matrix[i][j - 1] + 1,

                        matrix[i - 1][j - 1] + 1

                    );

            }

        }

    }


    return matrix[b.length][a.length];

}


// ========================================
// 結果表示
// ========================================

function showValidationResult(
    errors,
    warnings
) {


    // ------------------------------------
    // 問題なし
    // ------------------------------------

    if (
        errors.length === 0 &&
        warnings.length === 0
    ) {

        return;

    }


    let message =
        "🔐 Question Bank Check\n\n";


    // ------------------------------------
    // エラー
    // ------------------------------------

    if (errors.length > 0) {

        message +=
            "🔴 エラー：" +
            errors.length +
            "件\n\n";


        errors.forEach(function(
            error,
            index
        ) {

            message +=
                `${index + 1}. ${error}\n\n`;

        });

    }


    // ------------------------------------
    // 警告
    // ------------------------------------

    if (warnings.length > 0) {

        message +=
            "🟡 チェック：" +
            warnings.length +
            "件\n\n";


        warnings.forEach(function(
            warning,
            index
        ) {

            message +=
                `${index + 1}. ${warning}\n\n`;

        });

    }


    message +=
        "問題を確認してください。";


    alert(message);

}


// ========================================
// Validator開始
// ========================================
//
// questionBank.jsの直後に読み込まれるため、
// ここで直接チェックします。
// ========================================

validateQuestionBank();