import { LevelDef } from "./Types";

export const levels: {
    levels: LevelDef[]
} = {
    levels: [
        {
            id: "1",
            title: "Математика",
            props: {
                question: `Что выведет данный код: \`1 + 2 == 3\`?`,
                answer: {
                    type: "Boolean",
                    expected: true
                }
            },
            category: "",
            difficulty: "easy",
        },
        {
            id: "2",
            title: "Математика 2",
            props: {
                question: "Что выведет данный код: `0.1 + 0.2 === 0.3`?",
                answer: {
                    type: "Boolean",
                    expected: false
                },
            },
            category: "",
            difficulty: "easy",
        },
        {
            id: "3",
            title: "Математика 4",
            props: {
                question: "Что выведет данный код: `1 + 2`?",
                answer: {
                    type: "Choose",
                    expected: "3",
                    variants: ["3", "4", "NaN"]
                },
            },
            category: "",
            difficulty: "easy",
        },
        {
            id: "4",
            title: "Математика 4",
            props: {
                question: "Что выведет данный код: `1 + 2`?",
                answer: {
                    type: "Input",
                    expected: "3"
                },
            },
            category: "",
            difficulty: "easy",
        }
    ],
};
