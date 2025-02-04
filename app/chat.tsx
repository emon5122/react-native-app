import OthersChat from "@/components/chat/others-chat";
import SelfChat from "@/components/chat/self-chat";
import { Link } from "expo-router";
import { View } from "react-native";

const ChatScreen = () => {
    return (
        <View>
            <OthersChat />
            <SelfChat />
            <Link href="/">Home</Link>
        </View>
    );
};
export default ChatScreen;
