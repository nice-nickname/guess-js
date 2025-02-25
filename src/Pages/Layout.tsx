import { Box, Flex } from "@radix-ui/themes";
import { Route, Routes } from "react-router";
import SideMenu from "../Components/SideMenu/SideMenu";
import { routes } from "./routes";
import LevelPage from "./Level/LevelPage";

export default function Layout() {
    return (
        <Flex width="100%" height="100%">
            <SideMenu />

            <Box p="4" pl="8">
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.to}
                            element={route.page}
                            key={route.to}
                        />
                    ))}

                    <Route
                        path="/play/:levelId"
                        element={<LevelPage />}
                        key={'/play/:levelId'} />
                </Routes>
            </Box>
        </Flex>
    );
}
