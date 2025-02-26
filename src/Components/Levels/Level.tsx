import { ArrowRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import useLevels from "../../Hooks/useLevels";
import FormatText from "../FormatText/FormatText";
import BooleanAnswer from "./AnswerImpl/BooleanAnswer";
import ChooseAnswer from "./AnswerImpl/ChooseAnswer";
import { AnswerProps } from "./AnswerImpl/Types";

export type LevelProps = {
    levelId: string;
    onComplete: () => void;
};

const MAX_ATTEMPTS = 3;

export default function Level({ levelId: id, onComplete }: LevelProps) {
    const [level, prevLevel, nextLevel] = useLevels(id);

    const [attempts, setAttempts] = useState(1);

    if (!level) {
        throw new Error(`level ${id} not found`);
    }

    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setFailure] = useState(false);

    const isOver = useMemo(() => isSuccess || isFailure, [isSuccess, isFailure]);


    useEffect(() => {
        if (attempts > MAX_ATTEMPTS) {
            setFailure(true);
        }
    }, [attempts]);

    const Answer_ = useCallback(() => {
        const answer = level.props.answer;

        const answerProps: AnswerProps = {
            onWrong: () => {
                setAttempts((prev) => prev + 1);
            },
            onCorrect: () => {
                setIsSuccess(true);
                onComplete();
            },
        };

        if (answer.type === "Boolean") {
            return <BooleanAnswer {...answer} {...answerProps} />;
        }

        if (answer.type === "Choose") {
            return <ChooseAnswer {...answer} {...answerProps} />;
        }

        return <div>Not implemented {answer.type}</div>;
    }, [level.props.answer, onComplete]);

    return (
        <Flex direction="column" gap="3" width="550px">
            {prevLevel ? (
                <NavLink to={"/play/" + prevLevel.id}>
                    #{prevLevel.id} – {prevLevel.title}
                </NavLink>
            ) : (
                <NavLink to={"/"}>Главная</NavLink>
            )}

            <Flex justify="between">
                <Heading>
                    #{level.id} – {level.title}
                </Heading>

                {!isOver ? (
                    <Text color="gray">
                        Попытка {attempts} / {MAX_ATTEMPTS}
                    </Text>
                ) : null}
            </Flex>

            <div>
                <FormatText>{level.props.question}</FormatText>

                <Box
                    mt="5"
                    style={
                        isSuccess ? { opacity: 0.5, pointerEvents: "none" } : {}
                    }
                >
                    <Answer_ />
                </Box>
            </div>

            {isOver ? (
                <Flex mt="5" justify="end">
                    {nextLevel ? (
                        <NavLink to={"/play/" + nextLevel.id}>
                            <Button variant="outline">
                                Следующий уровень
                                <ArrowRightIcon />
                            </Button>
                        </NavLink>
                    ) : (
                        <NavLink to={"/"}>
                            <Button variant="outline">
                                <HomeIcon />
                                Главная
                            </Button>
                        </NavLink>
                    )}
                </Flex>
            ) : null}
        </Flex>
    );
}
