import GameBoardIcon from "@/components/ui/icons/gameBoard";
import NewsIcon from "@/components/ui/icons/news";
import RankIcon from "@/components/ui/icons/rank";
import RegisterIcon from "@/components/ui/icons/register";
import { Tabs, usePathname } from "expo-router";

export default function TabLayout() {
    const path = usePathname();

    if (path === "/chat") {
        return null;
    }
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "Rubik_400Regular",
                    fontSize: 14,
                },
                tabBarStyle: {
                    backgroundColor: "#1F1B1B",
                },
            }}
        >
            <Tabs.Screen
                name="register"
                options={{
                    title: "Register",
                    tabBarIcon: RegisterIcon,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Game Board",
                    tabBarIcon: GameBoardIcon,
                }}
            />
            <Tabs.Screen
                name="rank"
                options={{
                    title: "Rank",
                    tabBarIcon: RankIcon,
                }}
            />
            <Tabs.Screen
                name="news"
                options={{
                    title: "News",
                    tabBarIcon: NewsIcon,
                }}
            />
        </Tabs>
    );
}
