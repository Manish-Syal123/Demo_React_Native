import React, { PureComponent } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import namedata from "./arraydata";

const FlatListDemo = () => {
  const callname = (elem) => {
    if (elem.item.name === "Hacker") {
      return elem.item.work + " Manish";
    }
  };
  const names = [
    {
      name: "Manish",
      work: "computer",
    },
    {
      name: "BK",
      work: "computer",
    },
    {
      name: "Syal",
      work: "computer",
    },
    {
      name: "Hacker",
      work: "Cyber security",
    },
  ];
  return (
    <FlatList
      data={names}
      renderItem={(elem) => {
        return <Text style={styles.textStyle}>{callname(elem)}</Text>;
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
