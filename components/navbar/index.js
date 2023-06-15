import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

export default function Navbar(props) {
  return (
    <View style={styles.navContainer}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's Task</Text>
        <Text style={styles.date}>{props.currentDate}</Text>
        <TextInput
          style={styles.input}
          placeholder=" Enter new task..."
          placeholderTextColor="#ffffff"
          onChangeText={(text) => props.setNewTask(text)}
          value={props.newTask}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="+ New Task" onPress={props.handleNewTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    justifyContent: "space-between",
    marginTop: 80,
    marginBottom: 20,
  },
  taskContainer: { color: "#fffff" },

  title: {
    fontSize: 30,
    color: "#ffff",
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  date: {
    fontSize: 15,
    color: "#ffff",
    fontFamily: "Arial",
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "#ffffff",
    borderWidth: 1,
    marginTop: 20,
    color: "#ffffff",
    paddingHorizontal: 10,
    backgroundColor: "#44484E",
  },
});
