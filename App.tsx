import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from "react-native";
import "./global.css"

 
export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}