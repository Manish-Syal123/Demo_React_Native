import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import CustomCompo from "./src/screens/CustomCompo";
import FlatListDemo from "./src/screens/FlatListDemo";
import ImagesFile from "./src/screens/images";

export default function App() {
  return (
    <View>
      {/* <Text>Hello World</Text> */}
      {/* <FlatListDemo /> */}
      <ImagesFile />
    </View>
  );
}
