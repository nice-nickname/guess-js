import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

export type UserAvatarProps
= {
    username: string;
};

export default React.memo(function UserCard({ username }: UserAvatarProps) {
    const src = `https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=${usename}`
    return (
        <Card mb="4">
            <Flex gap="3" align="center">
                <Avatar
                    size="3"
                    src={src}
                    radius="full"
                    fallback="T"
                />
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {username}
                    </Text>
                </Box>
            </Flex>
        </Card>
    );
});
