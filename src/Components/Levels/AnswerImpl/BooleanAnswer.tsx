import { Box, Button, Flex } from "@radix-ui/themes";
import React, { useCallback } from "react";
import { AnswerProps } from "./Types";

export type BooleanAnswerProps = {
    expected: boolean;
} & AnswerProps;

export default function BooleanAnswer(props: BooleanAnswerProps) {
    const { expected, onCorrect, onWrong } = props;

    const handleClick = useCallback(
        (event: React.MouseEvent) => {
            const target = event.target as HTMLDivElement;

            const optionEl = target.hasAttribute("data-answer")
                ? target
                : target.closest("data-answer");

            if (optionEl) {
                const value = optionEl.getAttribute("data-answer") === "true";

                if (value === expected) {
                    onCorrect();
                } else {
                    onWrong(optionEl);
                }
            }
        },
        [expected, onCorrect, onWrong]
    );

    return (
        <Flex onClick={handleClick} gap="3">
            <Box flexGrow="1" asChild>
                <Button data-answer="true">True</Button>
            </Box>

            <Box flexGrow="1" asChild>
                <Button data-answer="false">False</Button>
            </Box>
        </Flex>
    );
}
