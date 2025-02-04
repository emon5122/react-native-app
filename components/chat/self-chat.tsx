import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const SelfChat = () => {
    const { height } = useWindowDimensions();

    return (
        <View className="flex-row justify-end items-end pr-5 mb-2.5">
            <LinearGradient
                colors={["#34506D", "#3498DB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="relative max-w-[75%] p-2.5 border border-[#EEEEEE] rounded-xl"
            >
                <Text className="text-white text-base font-[Rubik_400Regular]">
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
