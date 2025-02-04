import { loggedInUserData } from "@/constants/data/user";
import { Image, Text, View } from "react-native";

export const Header = ({ path }: { path: string }) => {
    if (path === "/chat") return null;
    return (
        <View className="w-full h-[10%] bg-[#1F1B1B] p-4">
            <View className="flex flex-row items-center mt-2.5">
                <View className="w-[60px] h-[60px] rounded-full bg-[#4774AD] justify-center items-center mr-2.5 overflow-hidden">
                    <View className="w-[55px] h-[55px] rounded-full bg-[#1F1B1B]" />
                    <Image
                        resizeMode="contain"
                        className="w-[50px] h-[50px] rounded-full absolute"
                        source={{
                            uri: loggedInUserData.image,
                        }}
                    />
                </View>
                <View className="justify-center">
                    <Text className="text-white text-base font-bold">
                        {loggedInUserData.name}
                    </Text>
                    <Text className="text-gray-400 text-sm font-bold">
                        {loggedInUserData.title}
                    </Text>
                </View>
            </View>
        </View>
    );
};
