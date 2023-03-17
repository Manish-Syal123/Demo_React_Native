import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import CustomCompo from "./src/screens/CustomCompo";

export default function App() {
  return (
    <View>
      <Text>Hello World</Text>
      <CustomCompo />
    </View>
  );
}
