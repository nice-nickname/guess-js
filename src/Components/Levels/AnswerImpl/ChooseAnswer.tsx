import { Box, Button, Flex } from "@radix-ui/themes";
import { AnswerProps } from "./Types";
import React from "react";

export type ChooseAnswerProps = {
    expected: string;
    variants: string[];
} & AnswerProps;

export default function ChooseAnswer(props: ChooseAnswerProps) {
    const {
        expected,
        variants,
        onCorrect,
        onWrong
    } = props;

    const handleClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLDivElement;

        const optionEl = target.hasAttribute("data-answer")
            ? target
            : target.closest("[data-answer]");

        if (optionEl) {
            const value = optionEl.getAttribute("data-answer");

            if (value === expected) {
                onCorrect();
            } else {
                onWrong(optionEl);
            }
        }
    };

    return (
        <Flex onClick={handleClick} gap="2">
            {variants.map((value) => (
                <Box data-answer={value} key={value}>
                    <Button key={value}>{value}</Button>
                </Box>
            ))}
        </Flex>
    );
}
