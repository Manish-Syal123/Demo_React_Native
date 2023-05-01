import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImagesFile = () => {
  return (
    <View style={styles.liststyle}>
      <Text style={styles.textStyle}>This is image file </Text>
      <Image
        source={require("../../assets/img/yourname.jpg")}
        style={styles.imageStyle}
      />
      <Image
        source={require("../../assets/img/yourname.jpg")}
        style={styles.imageStyle}
      />
      <Image
        source={require("../../assets/img/yourname.jpg")}
        style={styles.imageStyle}
      />
      <Image
        source={require("../../assets/img/yourname.jpg")}
        style={styles.imageStyle}
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
    margin: 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginLeft: 50,
  },
});
export default ImagesFile;
