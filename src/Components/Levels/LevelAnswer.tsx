import React from "react";
import { AnswerDef } from "../../GameObjects/Types";
import BooleanAnswer from "./AnswerImpl/BooleanAnswer";
import ChooseAnswer from "./AnswerImpl/ChooseAnswer";
import InputAnswer from "./AnswerImpl/InputAnswer";
import { AnswerProps } from "./AnswerImpl/Types";

function LevelAnswer(props: { answer: AnswerDef } & AnswerProps) {
    const answer = props.answer;

    if (answer.type === "Boolean") {
        return <BooleanAnswer {...answer} {...props} />;
    }

    if (answer.type === "Choose") {
        return <ChooseAnswer {...answer} {...props} />;
    }

    if (answer.type === "Input") {
        return <InputAnswer {...answer} {...props} />;
    }

    return null;
}

export default React.memo(LevelAnswer, (prev, next) => prev.answer === next.answer);
