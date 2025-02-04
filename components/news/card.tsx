import { TNewsCard } from "@/types";
import { timeAgo } from "@/utils";
import { Image, Text, View } from "react-native";

const NewsCard = (data: TNewsCard) => {
    if (data.type === "system") {
        return (
            <View className="bg-white rounded-lg my-2.5 p-4 shadow-sm">
                <Text className="text-base mb-2.5">System Alert</Text>
                <Text className="text-base mb-1">{data.msg}</Text>
                <Text className="text-xs text-gray-500 mt-2.5">
                    Published at: {data.publishedAt.toLocaleString()}
                </Text>
            </View>
        );
    }

    if (data.type === "news") {
        return (
            <View>
                <Text className="text-[#145E94]">News</Text>
                <Text className="text-base mb-2.5">{data.headline}</Text>
                <Image
                    source={{ uri: data.image }}
                    className="w-full h-[200px] rounded-lg mb-2.5"
                />
                <Text className="text-sm mb-1">Comments: {data.comments}</Text>
                <Text className="text-xs text-gray-500 mt-2.5">
                    {timeAgo(data.publishedAt)}
                </Text>
            </View>
        );
    }

    if (data.type === "event") {
        return (
            <View className="bg-white rounded-lg my-2.5 p-4 shadow-sm">
                <Text className="text-base mb-2.5">{data.headline}</Text>
                <Text className="text-sm mb-1">Messages: {data.messages}</Text>
                <View className="my-2.5 flex flex-row justify-between">
                    <Text className="text-base font-bold mb-1">
                        Match Result
                    </Text>
                    <View className="flex-row items-center mb-2.5">
                        <Image
                            source={{ uri: data.matchResult.team1[0].image }}
                            className="w-[30px] h-[30px] rounded-full mr-2.5"
                        />
                        <Text>{data.matchResult.team1[0].name}</Text>
                        <Text>{data.matchResult.score1.join("-")}</Text>
                    </View>
                    <View className="flex-row items-center mb-2.5">
                        <Image
                            source={{ uri: data.matchResult.team1[1].image }}
                            className="w-[30px] h-[30px] rounded-full mr-2.5"
                        />
                        <Text>{data.matchResult.team1[1].name}</Text>
                        <Text>{data.matchResult.score1.join("-")}</Text>
                    </View>
                </View>
                <View className="my-2.5 flex flex-row justify-between">
                    <Text className="text-base font-bold mb-1">Team 2</Text>
                    <View className="flex-row items-center mb-2.5">
                        <Image
                            source={{ uri: data.matchResult.team2[0].image }}
                            className="w-[30px] h-[30px] rounded-full mr-2.5"
                        />
                        <Text>{data.matchResult.team2[0].name}</Text>
                        <Text>{data.matchResult.score2.join("-")}</Text>
                    </View>
                    <View className="flex-row items-center mb-2.5">
                        <Image
                            source={{ uri: data.matchResult.team2[1].image }}
                            className="w-[30px] h-[30px] rounded-full mr-2.5"
                        />
                        <Text>{data.matchResult.team2[1].name}</Text>
                        <Text>{data.matchResult.score2.join("-")}</Text>
                    </View>
                </View>
                <Text className="text-xs text-gray-500 mt-2.5">
                    Published at: {data.publishedAt.toLocaleString()}
                </Text>
            </View>
        );
    }

    return null;
};

export default NewsCard;
