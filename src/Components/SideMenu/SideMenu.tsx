import {
    GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex, Link, Text } from "@radix-ui/themes";
import { NavLink } from "react-router";
import { useUserContext } from "../../Context/UserContext";
import { routes } from "../../Pages/routes";
import TelegramLogoIcon from "../Icons/TelegramLogoIcon";
import UserCard from "../User/UserCard";

import "./SideMenu.css";

export default function SideMenu() {
    const user = useUserContext();
    return (
        <Flex className="Nav" direction="column" gap="3" width="320px" p="4">
            <UserCard username={user.username} />

            {routes.map((route) => (
                <NavLink to={route.to} key={route.to}>
                    {({ isActive }) => (
                        <Button
                            variant={isActive ? "outline" : "soft"}
                            style={{ width: "100%" }}
                        >
                            {route.icon}
                            {route.title}
                        </Button>
                    )}
                </NavLink>
            ))}

            <Box className="Nav__Breakpoint"></Box>

            <Text color="gray" size="2">
                Made in Taganrog
            </Text>

            <Flex gap="3">
                <Link href="https://github.com/nice-nickname">
                    <GitHubLogoIcon width={24} height={24} color="white" />
                </Link>
                <Link href="https://t.me/myachik_red">
                    <TelegramLogoIcon width={24} height={24} />
                </Link>
            </Flex>
        </Flex>
    );
}
