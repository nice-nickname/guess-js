import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, HoverCard, Strong, Text } from "@radix-ui/themes";

export type LevelCompleteCalloutProps = {
    status: "success" | "failure";
    helpText?: string;
    answer: string;
};

export default function LevelCompleteCallout({
    status,
    helpText,
    answer,
}: LevelCompleteCalloutProps) {
    return (
        <Callout.Root
            color={status === "success" ? "green" : "red"}
            variant="outline"
        >
            <Callout.Icon>
                <HoverCard.Root>
                    <HoverCard.Trigger>
                        <InfoCircledIcon />
                    </HoverCard.Trigger>
                    <HoverCard.Content maxWidth="300px">
                        <Text>{helpText}</Text>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Callout.Icon>
            <Callout.Text>
                {status === "success" ? (
                    <Text>Успех!</Text>
                ) : (
                    <Text>
                        Неудача! Правильный ответ: <Strong>{answer}</Strong>
                    </Text>
                )}
            </Callout.Text>
        </Callout.Root>
    );
}
