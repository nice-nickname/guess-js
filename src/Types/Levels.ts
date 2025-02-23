
export type LevelCategory = "choose"

export type LevelDifficulty = "easy" | "hard"

export type GameLevel = {
    id: string,
    props: unknown,
    category: LevelCategory,
    diffuculy: LevelDifficulty
}

export type ChooseLevelProps = {
    question: string,
    answer: string
}
