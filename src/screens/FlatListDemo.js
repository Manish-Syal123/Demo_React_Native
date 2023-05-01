import React, { PureComponent } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import namedata from "./arraydata";

const FlatListDemo = () => {
  // const callname = (elem) => {
  //   if (elem.item.name === "Hacker" && elem.item.key == "4") {
  //     return elem.item.work + " Manish";
  //   }
  // };
  const names = [
    {
      key: "1",
      name: "Manish",
      work: "computer",
    },
    {
      key: "2",
      name: "BK",
      work: "computer",
    },
    {
      key: "3",
      name: "Syal",
      work: "computer",
    },
    {
      key: "4",
      name: "Hacker",
      work: "Cyber security",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(index) => {
        return index.key;
      }}
      horizontal
      inverted
      //numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        //object de-construct
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
export default FlatListDemo;
