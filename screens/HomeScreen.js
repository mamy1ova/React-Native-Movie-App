import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="mb-8">
      <Text className="text-dark mb-3">HomeScreen</Text>
      <StatusBar style="light" />
    </View>
  );
}
