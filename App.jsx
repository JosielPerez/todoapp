import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/navbar";
import Task from "./components/task";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function App() {
  const [date, setDate] = useState(getCurrentDate());
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function getCurrentDate() {
    const date = new Date();

    const currentDate = `${weekday[date.getDay()]} , ${date.getDate()} ${
      monthList[date.getMonth()]
    }`;
    return currentDate;
  }

  function handleNewTask() {
    if (newTask.length > 0) {
      setTaskList([...taskList, { id: Date.now(), task: newTask }]);
      setNewTask(""); // Clear the input
    }
  }

  function handleDeleteTask(id) {
    console.log(id);
    console.log(taskList);
    setTaskList(taskList.filter((task) => task.id !== id));
  }
  useEffect(() => {
    setDate(getCurrentDate());
  });

  return (
    <View style={styles.background}>
      <Navbar
        currentDate={date}
        handleNewTask={handleNewTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <View>
        {taskList.map((element, index) => (
          <Task
            id={element.id}
            task={element.task}
            key={element.id}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    width: "100%",
    backgroundColor: "#2C2F33",
    paddingHorizontal: 20,
    height: "100%",
  },
});
