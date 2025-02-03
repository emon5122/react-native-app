import { Styles } from "@/constants/Colors";
import { Link, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import GameBoardIcon from "./icons/gameBoard";
import NewsIcon from "./icons/news";
import RankIcon from "./icons/rank";
import RegisterIcon from "./icons/register";

export const Footer = () => {
    const path = usePathname();

    if (path === "/chat") {
        return null;
    }

    return (
        <View style={styles.footer}>
            <View style={styles.disabledTab}>
                <RegisterIcon size={20} />
                <Text style={styles.tabText}>Register</Text>
            </View>
            <Link href="/" style={styles.resetLink}>
                <View style={styles.tab}>
                    <GameBoardIcon size={20} />
                    <Text style={styles.tabText}>Game Board</Text>
                </View>
            </Link>
            <View style={styles.disabledTab}>
                <RankIcon size={20} />
                <Text style={styles.tabText}>Rank</Text>
            </View>
            <Link href="/news" style={styles.resetLink}>
                <View style={styles.tab}>
                    <NewsIcon size={20} />
                    <Text style={styles.tabText}>News</Text>
                </View>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    resetLink: {
        textDecorationLine: "none",
        padding: 0,
        margin: 0,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: Styles.colour.backgroundColour,
        width: "100%",
        height: "8%",
    },
    tab: {
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
    tabText: {
        color: "white",
        fontFamily: "Rubik_400Regular",
        fontSize: 14,
        marginTop: 5,
    },
    disabledTab: {
        flexDirection: "column",
        alignItems: "center",
        opacity: 0.5,
        padding: 10,
    },
});
