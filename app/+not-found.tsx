import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View className="flex-1 items-center justify-center p-8 bg-gray-50">
                <Text className="text-4xl font-bold text-gray-800 mb-4">
                    404
                </Text>
                <Text className="text-lg text-gray-600 mb-8">
                    This page doesn't exist.
                </Text>
                <Link
                    href="/"
                    className="bg-blue-500 rounded-lg px-6 py-3 shadow-md active:bg-blue-600"
                >
                    <Text className="text-white font-semibold">
                        Go to Game Board
                    </Text>
                </Link>
            </View>
        </>
    );
}
