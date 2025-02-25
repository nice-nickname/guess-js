import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { levels } from "../../GameObjects/levels";
import { NavLink } from "react-router";

export default function IndexPage() {
    return (
        <>
            <Heading mb="5">Уровни</Heading>

            <Flex direction="column" gap="3">
                {levels.levels.map((level) => (
                    <Box>
                        <NavLink to={"/play/" + level.id}>
                            <Text>{level.id}</Text>
                        </NavLink>
                    </Box>
                ))}
            </Flex>
        </>
    );
}
