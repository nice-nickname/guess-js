import { Button, Dialog, Flex, Slider, Text } from "@radix-ui/themes";
import GameAuio from "../../../GameObjects/GameAudio";
import { PropsWithChildren } from "react";

export default function SettingsDialog({ children }: PropsWithChildren) {

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content maxWidth="600px">
                <form onSubmit={(event) => event.preventDefault()}>
                    <Dialog.Title>Настройки</Dialog.Title>

                    <Flex direction="column">
                        <label>
                            <Text as="div" size="2" mb="2" weight="bold">
                                Громкость
                            </Text>
                            <Slider
                                min={0}
                                max={100}
                                defaultValue={[GameAuio.volume * 100]}
                                onValueChange={([value]) => {
                                    GameAuio.volume = value / 100;
                                }}
                            />
                        </label>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button type="submit">Продолжить</Button>
                            </Dialog.Close>
                        </Flex>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    );
}
