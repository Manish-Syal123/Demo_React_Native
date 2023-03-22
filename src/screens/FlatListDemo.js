import React, { PureComponent } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import namedata from "./arraydata";

const FlatListDemo = () => {
  const names = [
    {
      name: "Manish",
    },
    {
      name: "BK",
    },
    {
      name: "Syal",
    },
    {
      name: "Hacker",
    },
  ];
  return (
    <FlatList
      data={names}
      renderItem={(elem) => {
        return <Text style={styles.textStyle}>{elem.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
export default FlatListDemo;
