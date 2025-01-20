import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

const GradientBackground = () => {
    return (
        <LinearGradient
            colors={["#34506D", "#3498DB"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
        >
            <Text style={styles.text}>Expo Linear Gradient</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GradientBackground;
