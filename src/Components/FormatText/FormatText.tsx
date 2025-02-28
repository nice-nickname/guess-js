import { Code, Text } from "@radix-ui/themes";
import React from "react";

export type FormatTextProps = {
    children: string;
};

function FormatText({ children: text }: FormatTextProps) {
    const regex = /`([^`]+)`/g;

    const parts: React.ReactNode[] = [];

    const lines = text.trim().split('\n')
    lines.forEach((lineText, i) => {
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(lineText)) !== null) {
            parts.push(lineText.slice(lastIndex, match.index));
            parts.push(<Code key={match.index}>{match[1]}</Code>);
            lastIndex = regex.lastIndex;
        }
        parts.push(lineText.slice(lastIndex));
        parts.push(<br key={"line-end-" + i} />)
    })


    return <Text>{parts}</Text>;
}

export default React.memo(FormatText);
