import { ArrowRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import useLevels from "../../Hooks/useLevels";
import FormatText from "../FormatText/FormatText";
import BooleanAnswer from "./AnswerImpl/BooleanAnswer";
import ChooseAnswer from "./AnswerImpl/ChooseAnswer";
import InputAnswer from "./AnswerImpl/InputAnswer";
import { AnswerProps } from "./AnswerImpl/Types";
import GameAuio from "../../GameObjects/GameAudio";

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

    const isOver = useMemo(
        () => isSuccess || isFailure,
        [isSuccess, isFailure]
    );

    useEffect(() => {
        if (attempts > MAX_ATTEMPTS) {
            GameAuio.playWrong()

            setFailure(true);
        }
    }, [attempts]);

    const Answer_ = useCallback(() => {
        const answer = level.props.answer;

        const answerProps: AnswerProps = {
            onWrong: (target) => {
                GameAuio.playWrong()

                setAttempts((prev) => prev + 1);

                target?.classList.remove('Animations_shaking')
                requestAnimationFrame(() => {
                    target?.classList.add('Animations_shaking')
                })
            },
            onCorrect: () => {
                GameAuio.playSuccess()

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

        if (answer.type === "Input") {
            return <InputAnswer {...answer} {...answerProps} />;
        }

        return null
    }, [level.props.answer, onComplete]);

    return (
        <Flex direction="column" gap="4" width="550px">
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
