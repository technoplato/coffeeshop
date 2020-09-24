import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useInterval } from "./src/utils/useInterval";

export default function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 2000);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
