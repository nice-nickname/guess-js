import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { levels } from "../../GameObjects/GameLevels";
import { NavLink } from "react-router";
import { useUserContext } from "../../Context/UserContext";

export default function IndexPage() {
    const user = useUserContext();

    return (
        <>
            <Heading mb="5">Главная</Heading>

            <Flex direction="column" gap="3">
                {levels.levels.map((level) => (
                    <NavLink key={level.id} to={"/play/" + level.id}>
                        <Box asChild>
                            <Button
                                variant="ghost"
                                size="3"
                                radius="full"
                                disabled={(+user.level + 1) < (+level.id)}
                            >
                                {level.id} – {level.title}
                            </Button>
                        </Box>
                    </NavLink>
                ))}
            </Flex>
        </>
    );
}
