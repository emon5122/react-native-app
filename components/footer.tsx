import { Link } from "expo-router";
import { Text, View } from "react-native";
import GameBoardIcon from "./icons/gameBoard";
import NewsIcon from "./icons/news";
import RankIcon from "./icons/rank";
import RegisterIcon from "./icons/register";

type TabItemProps = {
    icon: React.ComponentType<{ size: number }>;
    label: string;
    href?: string;
    disabled?: boolean;
    isActive?: boolean;
};

type TabType = {
    icon: React.ComponentType<{ size: number; color?: string }>;
    label: string;
    href?: string;
    disabled?: boolean;
};

const ICON_SIZE = 20;

const TABS: TabType[] = [
    { icon: RegisterIcon, label: "Register", disabled: true },
    { icon: GameBoardIcon, label: "Game Board", href: "/" },
    { icon: RankIcon, label: "Rank", disabled: true },
    { icon: NewsIcon, label: "News", href: "/news" },
];

export const Footer = ({ path }: { path: string }) => {
    if (path === "/chat") return null;
    const TabItem = ({
        icon: Icon,
        label,
        href,
        disabled = false,
        isActive = false,
    }: TabItemProps) => {
        const content = (
            <View
                className={`flex-col items-center p-2.5 
                    ${disabled ? "opacity-50" : ""} 
                    ${isActive ? "opacity-100" : "opacity-70"}`}
            >
                <Icon size={ICON_SIZE} />
                <Text className="text-white font-[Rubik_400Regular] text-sm mt-1.5">
                    {label}
                </Text>
            </View>
        );

        if (href) {
            return (
                <Link
                    href={href as "/chat" | "/"}
                    className="no-underline p-0 m-0"
                >
                    {content}
                </Link>
            );
        }

        return content;
    };

    return (
        <View className="flex-row justify-around items-center bg-[#1F1B1B] w-full h-[8%]">
            {TABS.map((tab, index) => (
                <TabItem
                    key={index}
                    icon={tab.icon}
                    label={tab.label}
                    href={tab.href}
                    disabled={tab.disabled}
                    isActive={tab.href ? path === tab.href : false}
                />
            ))}
        </View>
    );
};
