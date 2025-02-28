import {
    ArrowRightIcon,
    HomeIcon,
    InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
    Box,
    Button,
    Callout,
    Flex,
    Heading,
    HoverCard,
    Strong,
    Text,
} from "@radix-ui/themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import useLevels from "../../Hooks/useLevels";
import FormatText from "../FormatText/FormatText";
import BooleanAnswer from "./AnswerImpl/BooleanAnswer";
import ChooseAnswer from "./AnswerImpl/ChooseAnswer";
import InputAnswer from "./AnswerImpl/InputAnswer";
import { AnswerProps } from "./AnswerImpl/Types";
import GameAuio from "../../GameObjects/GameAudio";
import React from "react";

export type LevelProps = {
    levelId: string;
    onComplete?: () => void;
    onCorrect: () => void;
};

const MAX_ATTEMPTS = 2;

function Level({ levelId: id, onComplete, onCorrect }: LevelProps) {
    const [level, , nextLevel] = useLevels(id);

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
        if (isOver && onComplete) {
            onComplete();
        }
    }, [isOver, onComplete]);

    useEffect(() => {
        if (attempts > MAX_ATTEMPTS) {
            setFailure(true);
            GameAuio.playWrong();
        } else if (attempts > 1) {
            GameAuio.playWrongTry();
        }
    }, [attempts]);

    const Answer_ = useCallback(() => {
        const answer = level.props.answer;

        const answerProps: AnswerProps = {
            onWrong: (target) => {
                setAttempts((prev) => prev + 1);

                requestAnimationFrame(() => {
                    target?.classList.remove("Animations_shaking");
                    requestAnimationFrame(() => {
                        target?.classList.add("Animations_shaking");
                    });
                });
            },
            onCorrect: () => {
                GameAuio.playSuccess();

                setIsSuccess(true);

                onCorrect();
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

        return null;
    }, [level.props.answer, onCorrect]);

    return (
        <Flex direction="column" gap="4" width="550px">
            <Flex justify="between">
                <Heading>
                    #{level.id} – {level.title}
                </Heading>

                {!isOver ? (
                    <Box flexShrink="0" asChild>
                        <Text color="gray">
                            Попытка {attempts} / {MAX_ATTEMPTS}
                        </Text>
                    </Box>
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
                isSuccess ? (
                    <Callout.Root color="green" variant="outline">
                        <Callout.Icon>
                            <HoverCard.Root>
                                <HoverCard.Trigger>
                                    <InfoCircledIcon />
                                </HoverCard.Trigger>
                                <HoverCard.Content maxWidth="300px">
                                    <Text>{level.help}</Text>
                                </HoverCard.Content>
                            </HoverCard.Root>
                        </Callout.Icon>
                        <Callout.Text>Успех!</Callout.Text>
                    </Callout.Root>
                ) : (
                    <Callout.Root color="red" variant="outline">
                        <Callout.Icon>
                        <HoverCard.Root>
                                <HoverCard.Trigger>
                                    <InfoCircledIcon />
                                </HoverCard.Trigger>
                                <HoverCard.Content maxWidth="300px">
                                    <Text>{level.help}</Text>
                                </HoverCard.Content>
                            </HoverCard.Root>
                        </Callout.Icon>
                        <Callout.Text>
                            Неудача! Правильный ответ:{" "}
                            <Strong>
                                {level.props.answer.expected.toString()}
                            </Strong>
                        </Callout.Text>
                    </Callout.Root>
                )
            ) : null}

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

export default React.memo(Level, (prev, next) => prev.levelId === next.levelId);
