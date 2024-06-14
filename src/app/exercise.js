import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    return (
        <View>
            <Text>Exercise Details: {params.name}</Text>
        </View>
    );
}