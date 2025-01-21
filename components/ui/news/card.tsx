import { TNewsCard } from "@/types";
import { timeAgo } from "@/utils";
import { Image, StyleSheet, Text, View } from "react-native";

const NewsCard = (data: TNewsCard) => {
    if (data.type === "system") {
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>System Alert</Text>
                <Text style={styles.cardMessage}>{data.msg}</Text>
                <Text style={styles.publishedAt}>
                    Published at: {data.publishedAt.toLocaleString()}
                </Text>
            </View>
        );
    }

    if (data.type === "news") {
        return (
            <View>
                <Text style={styles.heading}>News</Text>
                <Text style={styles.cardTitle}>{data.headline}</Text>
                <Image source={{ uri: data.image }} style={styles.image} />
                <Text style={styles.comments}>Comments: {data.comments}</Text>
                <Text style={styles.publishedAt}>
                    {timeAgo(data.publishedAt)}
                </Text>
            </View>
        );
    }

    if (data.type === "event") {
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{data.headline}</Text>
                <Text style={styles.messages}>Messages: {data.messages}</Text>
                <View style={styles.matchContainer}>
                    <Text style={styles.matchTitle}>Match Result</Text>
                    <View style={styles.matchInfo}>
                        <Image
                            source={{ uri: data.matchResult.team1[0].image }}
                            style={styles.playerImage}
                        />
                        <Text>{data.matchResult.team1[0].name}</Text>
                        <Text>{data.matchResult.score1.join("-")}</Text>
                    </View>
                    <View style={styles.matchInfo}>
                        <Image
                            source={{ uri: data.matchResult.team1[1].image }}
                            style={styles.playerImage}
                        />
                        <Text>{data.matchResult.team1[1].name}</Text>
                        <Text>{data.matchResult.score1.join("-")}</Text>
                    </View>
                </View>
                <View style={styles.matchContainer}>
                    <Text style={styles.matchTitle}>Team 2</Text>
                    <View style={styles.matchInfo}>
                        <Image
                            source={{ uri: data.matchResult.team2[0].image }}
                            style={styles.playerImage}
                        />
                        <Text>{data.matchResult.team2[0].name}</Text>
                        <Text>{data.matchResult.score2.join("-")}</Text>
                    </View>
                    <View style={styles.matchInfo}>
                        <Image
                            source={{ uri: data.matchResult.team2[1].image }}
                            style={styles.playerImage}
                        />
                        <Text>{data.matchResult.team2[1].name}</Text>
                        <Text>{data.matchResult.score2.join("-")}</Text>
                    </View>
                </View>
                <Text style={styles.publishedAt}>
                    Published at: {data.publishedAt.toLocaleString()}
                </Text>
            </View>
        );
    }

    return null;
};

const styles = StyleSheet.create({
    heading: {
        color: "#145E94",
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
        fontFamily: "rubik",
        fontSize: 14,
    },
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardMessage: {
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    comments: {
        fontSize: 14,
        marginBottom: 5,
    },
    publishedAt: {
        fontSize: 12,
        color: "#888",
        marginTop: 10,
    },
    matchContainer: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    matchTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    matchInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    playerImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    messages: {
        fontSize: 14,
        marginBottom: 5,
    },
});

export default NewsCard;
