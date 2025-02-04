import NewsCard from "@/components/news/card";
import { newsMockData } from "@/constants/data/news";
import { ScrollView, View } from "react-native";

const NewsScreen = () => {
    const data = newsMockData;

    return (
        <View className="flex-1 justify-center items-center">
            <ScrollView className="w-full px-4">
                {data.map((item, index) => (
                    <View key={index}>
                        <NewsCard {...item} />
                        <View className="h-[1.5px] w-4/5 bg-[#EEEEEE] mx-auto my-2.5" />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default NewsScreen;
