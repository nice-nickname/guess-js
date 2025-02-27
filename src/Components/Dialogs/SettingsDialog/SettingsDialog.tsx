import { Button, Dialog, Flex, Slider, Switch, Text } from "@radix-ui/themes";
import GameAuio from "../../../GameObjects/GameAudio";
import React, { PropsWithChildren } from "react";
import { useGameContext } from "../../../Context/GameContext";

export default function SettingsDialog({ children }: PropsWithChildren) {
    const game = useGameContext();

    const onPlayMusicChange = (value: boolean) => {
        if (value) {
            GameAuio.playAmbient();
        } else {
            GameAuio.pauseAmbient();
        }
    };

    const onVolumeChange = ([value]: number[]) => {
        GameAuio.volume = value;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        game.setVolume(GameAuio.volume);
        game.setPlayMusic(!GameAuio.isAmbientPaused());
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>
            <Dialog.Content maxWidth="600px">
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>Настройки</Dialog.Title>

                    <Flex direction="column" gap="5">
                        <label>
                            <Text as="div" size="2" mb="2" weight="bold">
                                Громкость
                            </Text>
                            <Slider
                                min={0}
                                max={100}
                                defaultValue={[game.volume]}
                                onValueChange={onVolumeChange}
                            />
                        </label>

                        <Text as="label" size="2" weight="bold">
                            <Flex gap="2">
                                Музыка{" "}
                                <Switch
                                    size="2"
                                    defaultChecked={game.playMusic}
                                    onCheckedChange={onPlayMusicChange}
                                />
                            </Flex>
                        </Text>

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
