import { ArrowRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import Globals from "../../Const/Globals";
import GameAuio from "../../GameObjects/GameAudio";
import useLevels from "../../Hooks/useLevels";
import FormatText from "../FormatText/FormatText";
import { AnswerProps } from "./AnswerImpl/Types";
import LevelAnswer from "./LevelAnswer";
import LevelCompleteCallout from "./LevelCompleteCallout";

export type LevelProps = {
    levelId: number;
    onComplete?: () => void;
    onWrong?: () => void;
    onCorrect: () => void;
};

function Level({ levelId: id, onComplete, onCorrect, onWrong }: LevelProps) {
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
        if (attempts > Globals.MAX_ATTEMPTS) {
            setFailure(true);
            GameAuio.playWrong();
        } else if (attempts > 1) {
            GameAuio.playWrongTry();
        }
    }, [attempts]);

    const answerProps: AnswerProps = {
        onWrong: (target) => {
            setAttempts((prev) => prev + 1);

            requestAnimationFrame(() => {
                target?.classList.remove("Animations_shaking");
                requestAnimationFrame(() => {
                    target?.classList.add("Animations_shaking");
                });
            });

            onWrong?.call(null);
        },
        onCorrect: () => {
            GameAuio.playSuccess();

            setIsSuccess(true);

            onCorrect();
        },
    };

    return (
        <Flex direction="column" gap="4" width="550px">
            <Flex justify="between">
                <Heading>
                    #{level.id} – {level.title}
                </Heading>

                {!isOver ? (
                    <Box flexShrink="0" asChild>
                        <Text color="gray">
                            Попытка {attempts} / {Globals.MAX_ATTEMPTS}
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
                    <LevelAnswer answer={level.props.answer} {...answerProps} />
                </Box>
            </div>

            {isOver ? (
                <LevelCompleteCallout
                    status={isSuccess ? "success" : "failure"}
                    answer={level.props.answer.expected.toString()}
                    helpText={level.help}
                />
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
