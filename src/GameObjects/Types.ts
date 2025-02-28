
export type LevelDef = {
    id: string,
    title: string,
    category: string,
    difficulty: string,
    help?: string,

    props: {
        question: string,
        answer: AnswerDef,
        help?: string
    }

}

export type AnswerDef =
    BooleanAnswerDef |
    ChooseAnswerDef |
    InputAnswerDef

export type BooleanAnswerDef = {
    type: "Boolean",
    expected: boolean
}

export type ChooseAnswerDef = {
    type: "Choose",
    variants: string[]
    expected: string
}

export type InputAnswerDef = {
    type: "Input",
    expected: string
}
