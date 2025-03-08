import { LevelDef } from "./Types";

export const levels: {
    levels: LevelDef[]
} = {
    levels: [
        { // 1
            id: 1,
            title: "Обучение",
            props: {
                question:
                    `
Привет 👋
Тебе будет даваться вопрос, на который нужно выбрать верный ответ, либо ввести ответ в поле (зависит от типа вопроса). На каждый вопрос дается 2 попытки. После получения ответа, наведи на иконку информации для объяснения ответа, если необходимо

Давай потренируемся: что выведет данный код: \`1 + 2 == 3\`
`,
                answer: {
                    type: "Boolean",
                    expected: true
                }
            },
            category: "",
            difficulty: "easy",
            help: "Пояснение будет тут"
        },
        { // 2
            id: 2,
            title: "Математика 1",
            props: {
                question:
                    `
Отлично, а теперь, давай попробуем вот так:

Что выведет данный код: \`1 + 2\`?
`,
                answer: {
                    type: "Input",
                    expected: "3"
                },
            },
            category: "",
            difficulty: "easy",
            help: "Да, 1 + 2 это действительно 3"
        },
        { // 3
            id: 3,
            title: "Математика 2",
            props: {
                question:
                    `
А если так: \`0.1 + 0.2 == 0.3\`
`,
                answer: {
                    type: "Boolean",
                    expected: false
                },
            },
            category: "",
            difficulty: "easy",
            help: "0.1 + 0.2 == 0.3000000000001. Вещественные числа плохо работают с округлением"
        },
        { // 4
            id: 4,
            title: "Математика 3",
            props: {
                question:
                    `
Начинаем погружаться в дебри

Что выведет этот код: \`"1" + 2\`
`,
                answer: {
                    type: "Choose",
                    expected: "\"12\"",
                    variants: [
                        "Выкинется исключение",
                        "\"12\"",
                        "12",
                        "NaN"
                    ]
                },
            },
            category: "",
            difficulty: "easy",
            help: "Для строк определена операция сложения, поэтому число приводится к строке"
        },
        { // 5
            id: 5,
            title: "Математика 4",
            props: {
                question:
                    `
Что выведет этот код: \`"1" / 2\`
`,
                answer: {
                    type: "Choose",
                    expected: "0.5",
                    variants: [
                        "Выкинется исключение",
                        "\"12\"",
                        "\"0.5\"",
                        "0.5"
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "Для строк не определена операция деления, поэтому строка приводится к числу"
        },
        { // 6
            id: 6,
            title: "Математика и строки",
            props: {
                question:
                    `
Что выведет этот код: \`+"1" == 1\`
`,
                answer: {
                    type: "Boolean",
                    expected: true
                },
            },
            category: "",
            difficulty: "",
            help: "Унарный плюс перед строкой заставляет ее преобразоваться к числу"
        },

        // Погружамся
        {
            id: 7,
            title: "Погружаемся...",
            props: {
                question:
                    `
Это была лишь вершина айсберга, Ты действительно готов все глубины JavaScript-a?
`,
                answer: {
                    type: "Choose",
                    expected: "Да",
                    variants: ["Да"]
                },
            },
            category: "",
            difficulty: "",
            help: "👍"
        },

        { // 8
            id: 8,
            title: "Математика и бананы",
            props: {
                question:
                    `
\`"b" + "a" + + "a" + "a"\`

Очевидно, что результатом будет строка, а вот что она будет содержать - напиши ниже
`,
                answer: {
                    type: "Input",
                    expected: "baNaNa"
                },
            },
            category: "",
            difficulty: "",
            help: "Унарный плюс перед строкой заставляет ее преобразоваться к числу, но строка не может быть преобразована, поэтому +\"a\" => NaN"
        },
        { // 9
            id: 9,
            title: "Разбираемся с NaN",
            props: {
                question:
                    `
Мы уже выяснили, что NaN это типо Not-A-Number. А если спросить у языка, что он нам скажет?

\`typeof NaN === ?\`
`,
                answer: {
                    type: "Choose",
                    expected: "number",
                    variants: [
                        "Object",
                        "null",
                        "undefined",
                        "number"
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "Да, так и должно быть"
        },
        { // 10
            id: 10,
            title: "Сравнение трех чисел",
            props: {
                question:
                    `
Учитель в 3 классе спрашивает "Джаваскрипт, а сколько будет:"
\`3 > 2 > 1\`

Ответ убил:
`,
                answer: {
                    type: "Boolean",
                    expected: false,
                },
            },
            category: "",
            difficulty: "",
            help: "3 > 2 → true; true > 1 → false"
        },
        { // 11
            id: 11,
            title: "Сортировка трех чисел",
            props: {
                question:
                    `
У того же ученика в 3 классе спрашивают, "Джаваскрипт, а вот числа, разложи их в порядке возростания:"
\`[123, 3, 2, 1].sort()\`

В каком порядке расоложены числа, опиши без пробелов через запятую
`,
                answer: {
                    type: "Input",
                    expected: "1,123,2,3"
                },
            },
            category: "",
            difficulty: "",
            help: "JS очень любит строки, поэтому метод sort сортирует элементы как строки"
        },
        { // 12
            id: 12,
            title: "Превращаем в строки",
            props: {
                question:
                    `
У любого числе есть метод toString(), так давайте превратим число в строку!
Что получится: \`1.toString()\`
`,
                answer: {
                    type: "Choose",
                    expected: "Ошибка исполнения",
                    variants: [
                        "\"1.00\"",
                        "\"1\"",
                        "Ошибка исполнения",
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "1. точка рассматривается как часть числа"
        },
        { // 13
            id: 13,
            title: "Превращаем в строки",
            props: {
                question:
                    `
А так: \`1..toString()\`
`,
                answer: {
                    type: "Choose",
                    expected: "\"1\"",
                    variants: [
                        "\"1.00\"",
                        "\"1\"",
                        "Ошибка исполнения",
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "1. точка рассматривается как часть числа. Ну а теперь две точки, так что все логично, да?"
        },
        { // 14
            id: 14,
            title: "true или не true",
            props: {
                question:
                    `
Вспомни ученика по имени Javascript из задания 10. Ему дали на дом задание
\`(true + true) * (true + false) - true;\`
`,
                answer: {
                    type: "Input",
                    expected: "1"
                },
            },
            category: "",
            difficulty: "",
            help: "true == 1, false == 0"
        },

        // Дно
        {
            id: 15,
            title: "Дно айсберга 🧊",
            props: {
                question:
                    `
Ниже не куда
`,
                answer: {
                    type: "Choose",
                    expected: "Да",
                    variants: ["Да"]
                },
            },
            category: "",
            difficulty: "",
            help: "🧊🧊"
        },

        { // 16
            id: 16,
            title: "Арифметика",
            props: {
                question:
                    `
Я думаю не надо объяснять, что такое \`'' + ''\`
А вот что ЭТО \`{} + []\`
`,
                answer: {
                    type: "Input",
                    expected: "0"
                },
            },
            category: "",
            difficulty: "",
            help: "{ } это не объект, а пустой блок кода. Поэтому +[] == 1"
        },
        { // 17
            id: 17,
            title: "Арифметика??",
            props: {
                question:
                    `
\`[] + {}\`
`,
                answer: {
                    type: "Choose",
                    expected: "[object Object]",
                    variants: [
                        "object",
                        "Object",
                        "object Object",
                        "[object Object]"
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "{ } это не объект, а пустой блок кода. Поэтому +[] == 1"
        },
        { // 18
            id: 18,
            title: "Массив vs пустая строка",
            props: {
                question:
                    `
\`[[[[[[ undefined ]]]]]] != ''\`
`,
                answer: {
                    type: "Boolean",
                    expected: false
                },
            },
            category: "",
            difficulty: "",
            help: "Без комментариев"
        },
        { // 19
            id: 19,
            title: "fail",
            props: {
                question:
                    `
Это ответ без вопроса. Просто вот это выражение равно fail

\`(![] + [])[+[]] +  (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]];\`
`,
                answer: {
                    type: "Choose",
                    expected: "\"fail\"",
                    variants: [
                        "\"fail\""
                    ]
                },
            },
            category: "",
            difficulty: "",
            help: "Без комментариев"
        },
    ],
};
