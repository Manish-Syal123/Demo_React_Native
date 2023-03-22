import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CustomCompo = () => {
  const myname = "Manish";
  const myElement = <Text style={styles.textStyle}>My name is {myname}</Text>;
  const getFullName = (a, b, c) => {
    return `Hi mera name ${a} ${b} ${c}`;
  };
  return (
    <View style={styles.viewstyle}>
      {myElement}
      <Text>Guess my name is {getFullName("Manish", "BK", "Syal")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    // backgroundColor: "black",
    marginTop: 200,
  },
  // viewstyle: {
  //   backgroundColor: "green",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default CustomCompo;
