import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Button</Text>
      <Button
        title="Join Now"
        onPress={() => {
          Alert.alert("hiii");
        }}
        //disabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    display: "flex",
    justifyContent: "center",
    aliginItems: "center",
  },
  textStyle: {
    fontSize: 30,
    marginTop: 200,
    textAlign: "center",
    marginLeft: 160,
    marginVertical: 100,
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginLeft: 50,
  },
});
export default OurButton;
