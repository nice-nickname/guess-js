import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Link, Text } from "@radix-ui/themes";
import TelegramLogoIcon from "../Icons/TelegramLogoIcon";
import "./Scene.css";
import { useUserContext } from "../../Context/UserContext";
import UserCard from "../User/UserCard";

export default function Scene() {
    const user = useUserContext()

    console.log('user', user)

    return (
        <div className="Scene">
            <Flex className="Scene__Item Nav" direction="column" gap="3">

                <UserCard username={user.username} />


                <Link>
                    <Button variant="soft" style={{ width: "100%" }}>
                        Начать игру / Продолжить
                    </Button>
                </Link>
                <Link>
                    <Button variant="soft" style={{ width: "100%" }}>
                        Задача дня
                    </Button>
                </Link>
                <Link>
                    <Button variant="outline" style={{ width: "100%" }}>
                        Статистика
                    </Button>
                </Link>

                <Box className="Nav__Breakpoint"></Box>

                <Text color="gray">Made in Taganrog</Text>

                <Flex mt="1" gap="2">
                    <Link href="https://github.com/nice-nickname">
                        <GitHubLogoIcon width={28} height={28} color="black" />
                    </Link>
                    <Link href="https://t.me/myachik_red">
                        <TelegramLogoIcon width={28} height={28} />
                    </Link>
                </Flex>
            </Flex>

            <div className="Scene__Item">content</div>
        </div>
    );
}
