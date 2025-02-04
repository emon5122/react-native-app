import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const OthersChat = () => {
    const { height } = useWindowDimensions();

    return (
        <View className="flex-row mx-4 my-2.5">
            <View className="relative max-w-[75%] bg-white border border-[#EEEEEE] rounded-xl p-3">
                <Text className="text-black text-base font-[Rubik_400Regular] leading-5">
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
    },
    triangleFill: {
        borderTopColor: "#FFFFFF",
        left: -11,
        bottom: 9,
    },
});

export default OthersChat;
