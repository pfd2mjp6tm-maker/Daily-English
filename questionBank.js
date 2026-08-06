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

{
    id: 21,
    day: 5,

    japanese: "もう一度言っていただけますか？",

    english: "Could you say that again?",

    choices: [
        "Could you say that again?",
        "Could you write that tomorrow?",
        "Can you speak louder yesterday?",
        "Would you say that before?"
    ],

    answer: 0,

    tip: "Could you ~ ? = 丁寧なお願い「〜していただけますか？」",

    extra: "Could you speak more slowly?",

    category: "Travel",

    level: 1
},


{
    id: 22,
    day: 5,

    japanese: "おすすめはありますか？",

    english: "Do you have any recommendations?",

    choices: [
        "Do you have any recommendations?",
        "Do you have any reservations?",
        "Do you like recommendations?",
        "Do you need any restaurants?"
    ],

    answer: 0,

    tip: "recommendation = おすすめ",

    extra: "Do you have any recommendations for restaurants?",

    category: "Travel",

    level: 1
},


{
    id: 23,
    day: 5,

    japanese: "これを注文したいです。",

    english: "I'd like to order this.",

    choices: [
        "I'd like to order this.",
        "I'd like to buy this yesterday.",
        "I want to cook this.",
        "I ordered this before."
    ],

    answer: 0,

    tip: "I'd like to ~ = 「〜したいです」の丁寧な表現",

    extra: "I'd like to have a coffee.",

    category: "Travel",

    level: 1
},


{
    id: 24,
    day: 5,

    japanese: "トイレはどこですか？",

    english: "Where is the restroom?",

    choices: [
        "Where is the restroom?",
        "What is the restroom?",
        "When is the restroom?",
        "Who is the restroom?"
    ],

    answer: 0,

    tip: "Where is ~? = 「〜はどこですか？」",

    extra: "Where is the nearest station?",

    category: "Travel",

    level: 1
},


{
    id: 25,
    day: 5,

    japanese: "手伝っていただけますか？",

    english: "Could you help me?",

    choices: [
        "Could you help me?",
        "Could you call me yesterday?",
        "Could you wait me tomorrow?",
        "Could you tell me your job?"
    ],

    answer: 0,

    tip: "help me = 私を助ける、手伝う",

    extra: "Could you help me find this place?",

    category: "Travel",

    level: 1
},

{
    id: 26,
    day: 6,

    japanese: "とても楽しかったです。",

    english: "I had a great time.",

    choices: [
        "I had a great time.",
        "I made a great time.",
        "I took a great time.",
        "I did a great time."
    ],

    answer: 0,

    tip: "have a great time = 楽しい時間を過ごす",

    extra: "I had a great time with my friends.",

    category: "Conversation",

    level: 1
},


{
    id: 27,
    day: 6,

    japanese: "それは面白そうですね。",

    english: "That sounds interesting.",

    choices: [
        "That sounds interesting.",
        "That looks interestingly.",
        "That hears interesting.",
        "That says interesting."
    ],

    answer: 0,

    tip: "That sounds ~ = 「それ〜そうだね」",

    extra: "That sounds amazing.",

    category: "Conversation",

    level: 1
},


{
    id: 28,
    day: 6,

    japanese: "楽しみにしています。",

    english: "I'm looking forward to it.",

    choices: [
        "I'm looking forward to it.",
        "I'm looking for it.",
        "I'm waiting forward it.",
        "I'm watching forward it."
    ],

    answer: 0,

    tip: "look forward to ~ = ～を楽しみにする",

    extra: "I'm looking forward to seeing you again.",

    category: "Conversation",

    level: 1
},


{
    id: 29,
    day: 6,

    japanese: "それは残念ですね。",

    english: "That's too bad.",

    choices: [
        "That's too bad.",
        "That's too good.",
        "That's very worse.",
        "That's not problem."
    ],

    answer: 0,

    tip: "That's too bad. = 残念だね（ネイティブがよく使う）",

    extra: "I'm sorry to hear that.",

    category: "Conversation",

    level: 1
},


{
    id: 30,
    day: 6,

    japanese: "私も同じように感じます。",

    english: "I feel the same way.",

    choices: [
        "I feel the same way.",
        "I think the same road.",
        "I have the same feeling way.",
        "I make the same way."
    ],

    answer: 0,

    tip: "I feel the same way. = 私も同じ気持ちです",

    extra: "I totally agree with you.",

    category: "Conversation",

    level: 1
},

{
    id: 31,
    day: 7,

    japanese: "久しぶりです！",

    english: "It's been a long time!",

    choices: [
        "It's been a long time!",
        "It's a long time ago!",
        "It was a long time!",
        "It takes a long time!"
    ],

    answer: 0,

    tip: "It's been a long time! = 久しぶり！（再会時によく使う）",

    extra: "It's been a while since we met.",

    category: "Conversation",

    level: 1
},


{
    id: 32,
    day: 7,

    japanese: "また会えて嬉しいです。",

    english: "I'm happy to see you again.",

    choices: [
        "I'm happy to see you again.",
        "I'm happy to see you yesterday.",
        "I'm happiness to meet you again.",
        "I'm glad seeing you before."
    ],

    answer: 0,

    tip: "be happy to ~ = ～できて嬉しい",

    extra: "I'm so glad to see you again.",

    category: "Conversation",

    level: 1
},


{
    id: 33,
    day: 7,

    japanese: "日本に帰ってから、研究の仕事をしています。",

    english: "I've been working in research since I came back to Japan.",

    choices: [
        "I've been working in research since I came back to Japan.",
        "I worked research when I return Japan.",
        "I've worked Japan before I came back.",
        "I am research since Japan."
    ],

    answer: 0,

    tip: "since = ～以来、～してから",

    extra: "I've been working on new projects.",

    category: "Conversation",

    level: 1
},


{
    id: 34,
    day: 7,

    japanese: "高校生の時の思い出は今でも大切です。",

    english: "My memories from high school are still important to me.",

    choices: [
        "My memories from high school are still important to me.",
        "My memory is high school important.",
        "My memories are important yesterday.",
        "My high school was remembered me."
    ],

    answer: 0,

    tip: "memory = 思い出、記憶",

    extra: "I still remember my time with your family.",

    category: "Conversation",

    level: 1
},


{
    id: 35,
    day: 7,

    japanese: "いつか海外で仕事をしてみたいです。",

    english: "I want to work abroad someday.",

    choices: [
        "I want to work abroad someday.",
        "I want to go abroad yesterday.",
        "I work abroad every day.",
        "I want abroad my work."
    ],

    answer: 0,

    tip: "abroad = 海外で、海外へ",

    extra: "I'd like to work with people from different countries.",

    category: "Conversation",

    level: 1
},


{
    id: 36,
    day: 8,

    japanese: "作ってみます。",

    english: "I'll try to make it.",

    choices: [
        "I'll try to make it.",
        "I'll buy it.",
        "I'll eat it.",
        "I made it yesterday."
    ],

    answer: 0,

    tip: "try to + 動詞 = ～してみる",

    extra: "I'll try to cook it.",

    pattern: `I'll try to + 動詞

• I'll try to cook it.
• I'll try to help you.
• I'll try to speak English.`,

    category: "Conversation",

    level: 1
},

{
    id: 37,
    day: 8,

    japanese: "挑戦してみます。",

    english: "I'll give it a try.",

    choices: [
        "I'll give it a try.",
        "I'll give it to you.",
        "I'll take it home.",
        "I'll buy one."
    ],

    answer: 0,

    tip: "give it a try = やってみる・挑戦してみる",

    extra: "I'll give it another try.",

    pattern: `I'll give it a try.

• I'll give it another try.
• Just give it a try.
• Why don't you give it a try?`,

    category: "Conversation",

    level: 1
},

{
    id: 38,
    day: 8,

    japanese: "もっと英語が話せるように、一生懸命勉強します。",

    english: "I'll study hard so I can speak English better.",

    choices: [
        "I'll study hard so I can speak English better.",
        "I'll study tomorrow.",
        "I can speak Japanese.",
        "I like studying English."
    ],

    answer: 0,

    tip: "so I can = ～できるように",

    extra: "I'll practice every day so I can improve.",

    pattern: `so I can + 動詞

• I'll practice a lot so I can improve.
• I'll save money so I can travel abroad.
• I'll exercise more so I can stay healthy.`,

    category: "Conversation",

    level: 1
},

{
    id: 39,
    day: 8,

    japanese: "何の日本食を食べてみたいですか？",

    english: "What Japanese food would you like to try?",

    choices: [
        "What Japanese food would you like to try?",
        "Do you like Japanese food?",
        "What do you eat every day?",
        "Where do you usually eat?"
    ],

    answer: 0,

    tip: "What + 名詞 + would you like to + 動詞? = 「何の～を…したいですか？」",

    extra: "What dessert would you like to try?",

    pattern: `What + 名詞 + would you like to + 動詞?

• What movie would you like to watch?
• What country would you like to visit?
• What dessert would you like to try?`,

    category: "Conversation",

    level: 1
},

{
    id: 40,
    day: 8,

    japanese: "上手に作れるように、たくさん練習します。",

    english: "I'll practice a lot so I can make it well.",

    choices: [
        "I'll practice a lot so I can make it well.",
        "I'll cook dinner tonight.",
        "I'll practice tomorrow.",
        "I can make coffee."
    ],

    answer: 0,

    tip: "practice a lot = たくさん練習する",

    extra: "I'll practice every day so I can sing better.",

    pattern: `practice a lot

• I'll practice a lot.
• I'll practice every day.
• Practice makes perfect.`,

    category: "Conversation",

    level: 1
},

{
    id: 41,
    day: 9,

    japanese: "ちょっと考えさせてください。",

    english: "Let me think about it.",

    choices: [
        "Let me think about it.",
        "I don't know anything.",
        "Please tell me now.",
        "I forgot about it."
    ],

    answer: 0,

    tip: "Let me... = ～させて",

    extra: "Let me check.",

    pattern: "Let me + 動詞",

    category: "Daily",

    level: 2
},

{
    id: 42,
    day: 9,

    japanese: "もう一度言ってもらえますか？",

    english: "Could you say that again?",

    choices: [
        "Could you say that again?",
        "Could you write this?",
        "Could you help me?",
        "Could you wait here?"
    ],

    answer: 0,

    tip: "say that again = もう一度言う",

    extra: "Could you speak more slowly?",

    pattern: "Could you + 動詞",

    category: "Travel",

    level: 2
},

{
    id: 43,
    day: 9,

    japanese: "それはいい考えですね。",

    english: "That's a good idea.",

    choices: [
        "That's a good idea.",
        "That's too expensive.",
        "That's impossible.",
        "That's my bag."
    ],

    answer: 0,

    tip: "good idea = いい考え",

    extra: "That's a great idea!",

    pattern: "That's + 名詞",

    category: "Daily",

    level: 1
},

{
    id: 44,
    day: 9,

    japanese: "楽しみにしています。",

    english: "I'm looking forward to it.",

    choices: [
        "I'm looking forward to it.",
        "I'm tired of it.",
        "I'm worried about it.",
        "I'm thinking about it."
    ],

    answer: 0,

    tip: "look forward to = 楽しみにする",

    extra: "I'm looking forward to seeing you.",

    pattern: "look forward to + 名詞 / 動名詞",

    category: "Daily",

    level: 2
},

{
    id: 45,
    day: 9,

    japanese: "今日は本当に楽しかったです。",

    english: "I had a great time today.",

    choices: [
        "I had a great time today.",
        "I had a bad day today.",
        "I stayed home today.",
        "I worked all day."
    ],

    answer: 0,

    tip: "have a great time = 楽しい時間を過ごす",

    extra: "We had a great time together.",

    pattern: "have a great time",

    category: "Daily",

    level: 1
},

{
    id: 46,
    day: 10,

    japanese: "ちょっとやってみます。",

    english: "I'll give it a try.",

    choices: [
        "I'll give it a try.",
        "I'll stop here.",
        "I'll never do it.",
        "I'll forget it."
    ],

    answer: 0,

    tip: "give it a try = やってみる",

    extra: "Why don't you give it a try?",

    pattern: "give it a try",

    category: "Daily",

    level: 2
},

{
    id: 47,
    day: 10,

    japanese: "もっと英語が話せるように勉強します。",

    english: "I'll study hard so I can speak English better.",

    choices: [
        "I'll study hard so I can speak English better.",
        "I'll study tomorrow.",
        "I'll speak only Japanese.",
        "I'll stop studying."
    ],

    answer: 0,

    tip: "so I can = ～できるように",

    extra: "I'll practice every day so I can improve.",

    pattern: "so I can + 動詞",

    category: "Daily",

    level: 2
},

{
    id: 48,
    day: 10,

    japanese: "どんな映画を見たいですか？",

    english: "What movie would you like to watch?",

    choices: [
        "What movie would you like to watch?",
        "What book are you reading?",
        "What did you watch yesterday?",
        "What time is it?"
    ],

    answer: 0,

    tip: "What ... would you like to ...? = 何を～したいですか？",

    extra: "What dessert would you like to try?",

    pattern: "What + 名詞 + would you like to + 動詞",

    category: "Travel",

    level: 2
},

{
    id: 49,
    day: 10,

    japanese: "どんな日本食を食べてみたいですか？",

    english: "What Japanese food would you like to try?",

    choices: [
        "What Japanese food would you like to try?",
        "What Japanese food do you cook?",
        "What food did you buy?",
        "What is your favorite drink?"
    ],

    answer: 0,

    tip: "would you like to try = 食べてみたい・試してみたい",

    extra: "What country would you like to visit?",

    pattern: "What + 名詞 + would you like to + 動詞",

    category: "Travel",

    level: 2
},

{
    id: 50,
    day: 10,

    japanese: "作ってみます。",

    english: "I'll try to make it.",

    choices: [
        "I'll try to make it.",
        "I'll buy it.",
        "I'll throw it away.",
        "I'll eat it now."
    ],

    answer: 0,

    tip: "try to = ～してみる",

    extra: "I'll try to cook it tomorrow.",

    pattern: "try to + 動詞",

    category: "Daily",

    level: 2
},

{
    id: 51,
    day: 11,

    japanese: "毎日こんな天気だったらいいのにな。",

    english: "I wish every day were like this.",

    choices: [
        "I wish every day were like this.",
        "Every day is like this.",
        "I hope it rains every day.",
        "The weather is bad today."
    ],

    answer: 0,

    tip: "I wish ... = ～だったらいいのにな",

    extra: "I wish I could speak English fluently.",

    pattern: "I wish + 主語 + 動詞（過去形）",

    category: "Daily",

    level: 2
},

{
    id: 52,
    day: 11,

    japanese: "今日はいい進捗がありました。",

    english: "We made good progress today.",

    choices: [
        "We made good progress today.",
        "We had good weather today.",
        "We made a mistake today.",
        "We finished yesterday."
    ],

    answer: 0,

    tip: "make progress = 進歩する・進捗がある",

    extra: "I'm making good progress in English.",

    pattern: "make progress",

    category: "Work",

    level: 2
},

{
    id: 53,
    day: 11,

    japanese: "すべて順調に進みました。",

    english: "Everything went smoothly.",

    choices: [
        "Everything went smoothly.",
        "Everything was difficult.",
        "Everything stopped.",
        "Everything is broken."
    ],

    answer: 0,

    tip: "smoothly = 順調に",

    extra: "The meeting went smoothly.",

    pattern: "Everything went + 副詞",

    category: "Daily",

    level: 2
},

{
    id: 54,
    day: 11,

    japanese: "おかわりをいただけますか？",

    english: "I'd like another serving.",

    choices: [
        "I'd like another serving.",
        "I'd like the bill.",
        "I'd like some water.",
        "I'd like to leave."
    ],

    answer: 0,

    tip: "another serving = おかわり",

    extra: "Could I have another serving?",

    pattern: "I'd like + 名詞",

    category: "Travel",

    level: 2
},

{
    id: 55,
    day: 11,

    japanese: "このレシピを忘れたくない。",

    english: "I don't want to forget this recipe.",

    choices: [
        "I don't want to forget this recipe.",
        "I don't know this recipe.",
        "I don't like this recipe.",
        "I forgot my recipe."
    ],

    answer: 0,

    tip: "don't want to = ～したくない",

    extra: "I don't want to forget your name.",

    pattern: "don't want to + 動詞",

    category: "Daily",

    level: 2
},

{
    id: 56,
    day: 12,

    japanese: "少し考えさせてください。",

    english: "Let me think for a moment.",

    choices: [
        "Let me think for a moment.",
        "Let me sleep for a moment.",
        "Give me your answer.",
        "I know the answer."
    ],

    answer: 0,

    tip: "for a moment = 少しの間",

    extra: "Let me think about it.",

    pattern: "Let me + 動詞",

    category: "Conversation",

    level: 2
},

{
    id: 57,
    day: 12,

    japanese: "できるだけ早く終わらせます。",

    english: "I'll finish it as soon as possible.",

    choices: [
        "I'll finish it as soon as possible.",
        "I'll finish it tomorrow.",
        "I'll never finish it.",
        "I finished it yesterday."
    ],

    answer: 0,

    tip: "as soon as possible = できるだけ早く",

    extra: "Please come as soon as possible.",

    pattern: "as soon as possible",

    category: "Work",

    level: 2
},

{
    id: 58,
    day: 12,

    japanese: "その考えは気に入りました。",

    english: "I like that idea.",

    choices: [
        "I like that idea.",
        "I forgot that idea.",
        "I don't have any ideas.",
        "I made that yesterday."
    ],

    answer: 0,

    tip: "I like that idea. = その考えいいね",

    extra: "That's a great idea.",

    pattern: "I like + 名詞",

    category: "Conversation",

    level: 2
},

{
    id: 59,
    day: 12,

    japanese: "少しずつ上達しています。",

    english: "I'm improving little by little.",

    choices: [
        "I'm improving little by little.",
        "I'm studying yesterday.",
        "I'm getting worse.",
        "I'm already perfect."
    ],

    answer: 0,

    tip: "little by little = 少しずつ",

    extra: "My English is getting better little by little.",

    pattern: "little by little",

    category: "Daily",

    level: 2
},

{
    id: 60,
    day: 12,

    japanese: "続けることが大切です。",

    english: "The important thing is to keep going.",

    choices: [
        "The important thing is to keep going.",
        "The important thing is money.",
        "Everything is impossible.",
        "I stopped studying."
    ],

    answer: 0,

    tip: "keep going = 続ける",

    extra: "Just keep going!",

    pattern: "keep + ～ing",

    category: "Motivation",

    level: 2
},

{
    id: 61,
    day: 13,

    japanese: "食べる量に気を付けます。",

    english: "I'll be more careful about how much I eat.",

    choices: [
        "I'll be more careful about how much I eat.",
        "I'll eat as much as I can.",
        "I'll skip every meal.",
        "I don't care what I eat."
    ],

    answer: 0,

    tip: "be careful about = ～に気を付ける",

    extra: "Be careful about what you say.",

    pattern: "be careful about + 名詞",

    category: "Health",

    level: 2
},

{
    id: 62,
    day: 13,

    japanese: "寝る前に読書することにしています。",

    english: "I make it a habit to read before bed.",

    choices: [
        "I make it a habit to read before bed.",
        "I read only once a month.",
        "I went to bed early yesterday.",
        "I don't like reading."
    ],

    answer: 0,

    tip: "make it a habit to = ～することを習慣にする",

    extra: "I make it a habit to stretch every morning.",

    pattern: "make it a habit to + 動詞",

    category: "Daily",

    level: 3
},

{
    id: 63,
    day: 13,

    japanese: "無理しないでね。",

    english: "Don't push yourself too hard.",

    choices: [
        "Don't push yourself too hard.",
        "Push the door harder.",
        "Don't study anymore.",
        "Work all night."
    ],

    answer: 0,

    tip: "push yourself too hard = 無理をする",

    extra: "Take a break if you're tired.",

    pattern: "Don't + 動詞",

    category: "Conversation",

    level: 2
},

{
    id: 64,
    day: 13,

    japanese: "最近、もっと運動するようにしています。",

    english: "I've been trying to exercise more lately.",

    choices: [
        "I've been trying to exercise more lately.",
        "I exercised only yesterday.",
        "I never exercise.",
        "I'll exercise next year."
    ],

    answer: 0,

    tip: "I've been trying to = 最近～するようにしている",

    extra: "I've been trying to eat healthier.",

    pattern: "I've been trying to + 動詞",

    category: "Health",

    level: 3
},

{
    id: 65,
    day: 13,

    japanese: "健康が一番大切です。",

    english: "Health comes first.",

    choices: [
        "Health comes first.",
        "Money comes first.",
        "Work comes yesterday.",
        "Everything is expensive."
    ],

    answer: 0,

    tip: "come first = 最優先である",

    extra: "Safety comes first.",

    pattern: "～ comes first",

    category: "Motivation",

    level: 2
},

];