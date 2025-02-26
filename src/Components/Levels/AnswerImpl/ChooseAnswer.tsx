import { AnswerProps } from "./Types";

export type ChooseAnswerProps = {
    expected: string;
    variants: string[];
} & AnswerProps;

export default function ChooseAnswer(props: ChooseAnswerProps) {
    return <>123</>;
}
