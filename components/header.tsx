import { Styles } from "@/constants/Colors";
import { loggedInUserData } from "@/constants/data/user";
import { usePathname } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
    const path = usePathname();

    if (path === "/chat") {
        return null;
    }
    return (
        <View style={styles.header}>
            <View style={styles.InsideHeader}>
                <View style={styles.imageWrapper}>
                    <View style={styles.innerCircle} />
                    <Image
                        resizeMode={"contain"}
                        style={styles.headerImage}
                        source={{
                            uri: loggedInUserData.image,
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>
                        {loggedInUserData.name}
                    </Text>
                    <Text style={styles.headerSubText}>
                        {loggedInUserData.title}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        backgroundColor: Styles.colour.backgroundColour,
        padding: 15,
    },
    InsideHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    headerText: {
        color: Styles.colour.fontColourInverted,
        fontSize: Styles.font.size.medium,
        fontWeight: "bold",
    },
    headerSubText: {
        color: Styles.colour.subFontColourInverted,
        fontSize: Styles.font.size.small,
        fontWeight: "bold",
    },
    imageWrapper: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#4774AD",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        overflow: "hidden",
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        position: "absolute",
    },
    textContainer: {
        justifyContent: "center",
    },
    innerCircle: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: Styles.colour.backgroundColour,
    },
});
