import { Button, Flex, TextField } from "@radix-ui/themes";
import { AnswerProps } from "./Types";
import React, { useRef } from "react";

export type InputAnswerProps = {
    expected: string;
} & AnswerProps;

export default function InputAnswer(props: InputAnswerProps) {
    const { expected, onCorrect, onWrong } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();

        const value = inputRef.current?.value;

        if (value && value === expected) {
            onCorrect();
        } else {
            onWrong(inputRef.current!);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <TextField.Root
                    ref={inputRef}
                    placeholder="Введите ответ"
                    style={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        width: "100%",
                    }}
                />
                <Button
                    style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                    data-answer
                >
                    Отправить
                </Button>
            </Flex>
        </form>
    );
}
