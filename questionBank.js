const questionBank = [

{
    id: 1,
    day: 1,

    japanese: "昨日は何をしましたか？",

    english: "What did you do yesterday?",

    choices: [
        "What did you do yesterday?",
        "What are you doing today?",
        "What will you do tomorrow?",
        "Where did you go yesterday?"
    ],

    answer: 0,

    tip: "What did you ... ? = 「何を〜しましたか？」",

    extra: "What did you eat today?",

    category: "Daily",

    level: 1
},


{
    id: 2,
    day: 1,

    japanese: "今日は少し眠いです。",

    english: "I'm a little sleepy today.",

    choices: [
        "I'm a little sleepy today.",
        "I'm hungry today.",
        "I'm busy today.",
        "I'm excited today."
    ],

    answer: 0,

    tip: "a little = 少し",

    extra: "I'm a little tired.",

    category: "Daily",

    level: 1
},


{
    id: 3,
    day: 1,

    japanese: "私は毎朝電車で英語を勉強します。",

    english: "I study English on the train every morning.",

    choices: [
        "I study English on the train every morning.",
        "I study English at night.",
        "I read books every morning.",
        "I study Japanese every morning."
    ],

    answer: 0,

    tip: "on the train = 電車で",

    extra: "I study English on the bus.",

    category: "Daily",

    level: 1
},


{
    id: 4,
    day: 1,

    japanese: "エアコンを消したかな？",

    english: "Did I turn off the air conditioner?",

    choices: [
        "Did I turn off the air conditioner?",
        "Did I lock the door?",
        "Did I eat breakfast?",
        "Did I charge my phone?"
    ],

    answer: 0,

    tip: "Did I ... ? = 「〜したっけ？」",

    extra: "Did I bring my wallet?",

    category: "Daily",

    level: 1
},


{
    id: 5,
    day: 1,

    japanese: "今日は先輩に資料を確認してもらいます。",

    english: "My senior will check the materials today.",

    choices: [
        "My senior will check the materials today.",
        "I will check the materials today.",
        "My boss will call me today.",
        "I will finish the materials today."
    ],

    answer: 0,

    tip: "check the materials = 資料を確認する",

    extra: "My manager will check my report.",

    category: "Daily",

    level: 1
},

{
    id: 6,
    day: 2,

    japanese: "今日は忙しいです。",

    english: "I'm busy today.",

    choices: [
        "I'm busy today.",
        "I'm sleepy today.",
        "I'm free today.",
        "I'm excited today."
    ],

    answer: 0,

    tip: "busy = 忙しい",

    extra: "I'm busy this week.",

    category: "Daily",

    level: 1
},

{
    id: 7,
    day: 2,

    japanese: "今日は雨が降っています。",

    english: "It's raining today.",

    choices: [
        "It's raining today.",
        "It's sunny today.",
        "It's windy today.",
        "It's snowing today."
    ],

    answer: 0,

    tip: "It's raining = 雨が降っている",

    extra: "It's raining outside.",

    category: "Daily",

    level: 1
},

{
    id: 8,
    day: 2,

    japanese: "コーヒーを一杯ください。",

    english: "Can I have a cup of coffee?",

    choices: [
        "Can I have a cup of coffee?",
        "Can I have some water?",
        "I'd like some tea.",
        "I don't drink coffee."
    ],

    answer: 0,

    tip: "Can I have... ? = ～をください",

    extra: "Can I have a glass of water?",

    category: "Daily",

    level: 1
},

{
    id: 9,
    day: 2,

    japanese: "仕事が終わりました。",

    english: "I finished work.",

    choices: [
        "I finished work.",
        "I started work.",
        "I'm working now.",
        "I'm going to work."
    ],

    answer: 0,

    tip: "finish work = 仕事が終わる",

    extra: "I finished my homework.",

    category: "Daily",

    level: 1
},

{
    id: 10,
    day: 2,

    japanese: "明日は休みです。",

    english: "I'm off tomorrow.",

    choices: [
        "I'm off tomorrow.",
        "I'm busy tomorrow.",
        "I worked yesterday.",
        "I'm home now."
    ],

    answer: 0,

    tip: "I'm off = 休みです",

    extra: "I'm off on Friday.",

    category: "Daily",

    level: 1
},

{
    id: 11,
    day: 3,

    japanese: "最近どうですか？",

    english: "How have you been lately?",

    choices: [
        "How have you been lately?",
        "How are you doing yesterday?",
        "What are you doing lately?",
        "Where have you been yesterday?"
    ],

    answer: 0,

    tip: "How have you been? = 「最近どうしてた？」（久しぶりの相手によく使う）",

    extra: "I've been doing well.",
    
    category: "Conversation",

    level: 1
},


{
    id: 12,
    day: 3,

    japanese: "最近、英語を勉強しています。",

    english: "I've been studying English recently.",

    choices: [
        "I've been studying English recently.",
        "I studied English yesterday.",
        "I will study English tomorrow.",
        "I can study English."
    ],

    answer: 0,

    tip: "I've been ~ing = 最近ずっと〜しています",

    extra: "I've been working hard recently.",

    category: "Conversation",

    level: 1
},


{
    id: 13,
    day: 3,

    japanese: "それは楽しそうですね！",

    english: "That sounds fun!",

    choices: [
        "That sounds fun!",
        "That looks difficult.",
        "That is expensive.",
        "That sounds terrible."
    ],

    answer: 0,

    tip: "That sounds ~ = 「それ〜そうだね」",

    extra: "That sounds interesting.",

    category: "Conversation",

    level: 1
},


{
    id: 14,
    day: 3,

    japanese: "少し緊張しています。",

    english: "I'm a little nervous.",

    choices: [
        "I'm a little nervous.",
        "I'm very excited.",
        "I'm a little hungry.",
        "I'm feeling sleepy."
    ],

    answer: 0,

    tip: "nervous = 緊張している",

    extra: "I was nervous before my presentation.",

    category: "Conversation",

    level: 1
},


{
    id: 15,
    day: 3,

    japanese: "自分の考えを英語で伝えたいです。",

    english: "I want to express my thoughts in English.",

    choices: [
        "I want to express my thoughts in English.",
        "I want to learn English grammar.",
        "I want to speak English faster.",
        "I want to write English books."
    ],

    answer: 0,

    tip: "express my thoughts = 自分の考えを伝える",

    extra: "I want to share my ideas with others.",

    category: "Conversation",

    level: 1
},

{
    id: 16,
    day: 4,

    japanese: "私は研究開発の仕事をしています。",

    english: "I work in research and development.",

    choices: [
        "I work in research and development.",
        "I study research and development.",
        "I make research every day.",
        "I am working at a hospital."
    ],

    answer: 0,

    tip: "research and development (R&D) = 研究開発",

    extra: "I work on new products.",

    category: "Work",

    level: 1
},


{
    id: 17,
    day: 4,

    japanese: "最近、新しい製品を開発しています。",

    english: "I've been developing a new product recently.",

    choices: [
        "I've been developing a new product recently.",
        "I developed a new product yesterday.",
        "I will buy a new product soon.",
        "I use a new product every day."
    ],

    answer: 0,

    tip: "I've been ~ing = 最近ずっと〜しています",

    extra: "I've been working on a new project.",

    category: "Work",

    level: 1
},


{
    id: 18,
    day: 4,

    japanese: "それは難しいですが、楽しいです。",

    english: "It's challenging, but fun.",

    choices: [
        "It's challenging, but fun.",
        "It's easy, but boring.",
        "It's difficult and impossible.",
        "It's interesting and expensive."
    ],

    answer: 0,

    tip: "challenging = 難しいけどやりがいがある",

    extra: "My job is challenging but rewarding.",

    category: "Conversation",

    level: 1
},


{
    id: 19,
    day: 4,

    japanese: "健康に関わる仕事に興味があります。",

    english: "I'm interested in healthcare.",

    choices: [
        "I'm interested in healthcare.",
        "I'm interested in healthy food only.",
        "I'm working at a health store.",
        "I'm studying medical English."
    ],

    answer: 0,

    tip: "be interested in ~ = ～に興味がある",

    extra: "I'm interested in helping people.",

    category: "Work",

    level: 1
},


{
    id: 20,
    day: 4,

    japanese: "人々の健康に役立つ仕事がしたいです。",

    english: "I want to do work that helps people's health.",

    choices: [
        "I want to do work that helps people's health.",
        "I want to work for healthy people.",
        "I want to make people work harder.",
        "I want to learn about people's jobs."
    ],

    answer: 0,

    tip: "help people's health = 人々の健康に役立つ",

    extra: "I want to make a difference in people's lives.",

    category: "Conversation",

    level: 1
},



];