import DynamicSvgLoader from "@/components/ui/dyanmicSvgLoader";
import { flag } from "@nexisltd/country";
import { Text, View } from "react-native";

const RankScreen = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Not implemented yet!</Text>
            <View style={{ width: 20, height: 20 }}>
                <DynamicSvgLoader link={flag("Brazil")?.flag!} />
            </View>
        </View>
    );
};

export default RankScreen;
