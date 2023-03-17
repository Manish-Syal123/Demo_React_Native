import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CustomCompo = () => {
  return (
    <View style={styles.viewstyle}>
      <Text style={styles.textStyle}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    // backgroundColor: "black",
  },
  viewstyle: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomCompo;
