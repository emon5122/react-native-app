import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Rubik_400Regular, Rubik_700Bold } from "@expo-google-fonts/rubik";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import "react-native-reanimated";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const path = usePathname();

    const [loaded] = useFonts({
        Rubik_400Regular,
        Rubik_700Bold,
        Poppins_400Regular,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header path={path} />
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="news" options={{ headerShown: false }} />
                <Stack.Screen name="chat" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <Footer path={path} />
        </SafeAreaView>
    );
}
