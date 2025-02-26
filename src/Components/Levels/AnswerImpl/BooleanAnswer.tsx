import { Box, Button, Flex } from "@radix-ui/themes";
import { AnswerProps } from "./Types";
import React, { useCallback } from "react";

export type BooleanAnswerProps = {
    expected: boolean
} & AnswerProps

export default function BooleanAnswer(props: BooleanAnswerProps) {
    const {
        expected,
        onCorrect,
        onWrong,
    } = props

    const onClick = useCallback((event: React.MouseEvent) => {
        const target = event.target as HTMLDivElement

        const option = target.hasAttribute('data-value')
            ? target
            : target.closest('data-value')

        if (option) {
            const actual = option.getAttribute('data-value') === 'true'

            if (actual === expected) {
                onCorrect()
            } else {
                onWrong()
            }
        }
    }, [expected, onCorrect, onWrong])

    return (
        <Flex onClick={onClick} gap="3" flexGrow="1">
            <Box flexGrow="1" asChild>
                <Button data-value="true" variant="soft">
                    True
                </Button>
            </Box>

            <Box flexGrow="1" asChild>
                <Button data-value="false" variant="soft">
                    False
                </Button>
            </Box>
        </Flex>
    );
}
