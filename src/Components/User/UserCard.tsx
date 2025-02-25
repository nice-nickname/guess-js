import { GearIcon } from "@radix-ui/react-icons";
import { Avatar, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import SettingsDialog from "../Dialogs/SettingsDialog/SettingsDialog";

export type UserAvatarProps = {
    username: string;
    placeholder?: string;
};

function UserCard({ username, placeholder }: UserAvatarProps) {
    const seed = encodeURI(username);
    const src = `https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=${seed}`;

    return (
        <Card>
            <Flex gap="3" align="center">
                <Avatar size="3" src={src} radius="full" fallback="AM" />

                {username ? (
                    <Text size="2" weight="bold">
                        {username}
                    </Text>
                ) : (
                    <Text size="2" color="gray">
                        {placeholder}
                    </Text>
                )}

                <SettingsDialog>
                    <Button variant="ghost" style={{ marginLeft: "auto" }}>
                        <GearIcon />
                    </Button>
                </SettingsDialog>
            </Flex>
        </Card>
    );
}

export default React.memo(UserCard);
