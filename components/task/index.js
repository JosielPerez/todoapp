import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

export default function Task(props) {
  const { id, task } = props;
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{task}</Text>
      <Button
        color="#FF3742"
        title="Delete"
        onPress={() => {
          props.handleDeleteTask(id);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#44484E",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  taskName: {
    fontSize: 20,
    color: "#ffffff",
  },
});
