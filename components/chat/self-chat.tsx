import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const SelfChat = () => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.selfChatContainer}>
            <LinearGradient
                colors={["#34506D", "#3498DB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientContainer}
            >
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, labore neque perferendis id dolor minima ad aliquam
                    ex, sed debitis quos, unde animi. Et eligendi quas magnam
                    cum eveniet? Praesentium!
                </Text>
                <View
                    style={[
                        styles.triangle,
                        {
                            borderLeftWidth: height * 0.005,
                            borderRightWidth: height * 0.005,
                            borderTopWidth: height * 0.035,
                        },
                    ]}
                />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    selfChatContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 20,
        marginBottom: 10,
    },
    gradientContainer: {
        maxWidth: "75%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        borderRadius: 10,
        position: "relative",
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        textAlign: "center",
        paddingHorizontal: 15,
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "#3498DB",
        position: "absolute",
        top: "95%",
        right: "-5%",
        transform: [{ rotate: "-58deg" }],
    },
});

export default SelfChat;
