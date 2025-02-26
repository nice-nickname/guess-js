import { AnswerProps } from "./Types";

export type InputAnswerProps = {
    expected: string;
} & AnswerProps;

export default function InputAnswer(props: InputAnswerProps) {
    return <>input</>;
}
