import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const OthersChat = () => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.othersChatContainer}>
            <View style={styles.ChatContainer}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, labore neque perferendis id dolor minima ad aliquam
                    ex, sed debitis quos, unde animi. Et eligendi quas magnam
                    cum eveniet? Praesentium!
                </Text>
                <View
                    style={[
                        styles.triangle,
                        styles.triangleBorder,
                        {
                            borderLeftWidth: height * 0.005,
                            borderRightWidth: height * 0.005,
                            borderTopWidth: height * 0.035,
                        },
                    ]}
                />
                <View
                    style={[
                        styles.triangle,
                        styles.triangleFill,
                        {
                            borderLeftWidth: height * 0.004,
                            borderRightWidth: height * 0.004,
                            borderTopWidth: height * 0.033,
                        },
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    othersChatContainer: {
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 15,
    },
    ChatContainer: {
        maxWidth: "75%",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#EEEEEE",
        borderRadius: 10,
        padding: 12,
        position: "relative",
    },
    text: {
        color: "black",
        fontSize: 16,
        fontFamily: "Rubik_400Regular",
        lineHeight: 20,
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderStyle: "solid",
        position: "absolute",
        left: -12,
        bottom: 8,
        transform: [{ rotate: "45deg" }],
    },
    triangleBorder: {
        borderTopColor: "#CFD8DC",
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 8,
    },
    triangleFill: {
        borderTopColor: "#FFFFFF",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderTopWidth: 7,
        left: -11,
        bottom: 9,
    },
});

export default OthersChat;
