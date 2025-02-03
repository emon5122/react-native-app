import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Link href="/chat">Chat</Link>
        </View>
    );
};
export default HomeScreen;
