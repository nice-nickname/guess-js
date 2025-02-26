import { CalendarIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import DailyPage from "./Daily/DailyPage";
import IndexPage from "./Index/IndexPage";
import StatisticsPage from "./Statistics/StatisticsPage";

export const routes = [
    {
        index: true,
        to: "/",
        title: "Главная",
        icon: <HomeIcon />,
        page: <IndexPage />,
    },
    {
        to: "/daily",
        title: "Задача дня",
        icon: <CalendarIcon />,
        page: <DailyPage />,
    },
    {
        to: "/statistics",
        title: "Статистика",
        icon: <RocketIcon />,
        page: <StatisticsPage />,
    }
];
