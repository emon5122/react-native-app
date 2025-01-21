import NewsCard from "@/components/ui/news/card";
import { newsMockData } from "@/constants/data/news";
import { ScrollView, View } from "react-native";

const NewsScreen = () => {
    const data = newsMockData;
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <ScrollView>
                {data.map((item, index) => {
                    return (
                        <View key={index}>
                            <NewsCard {...item} />
                            <View
                                style={{
                                    height: 1.5,
                                    width: "80%",
                                    backgroundColor: "#EEEEEE",
                                    marginVertical: 10,
                                }}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default NewsScreen;
