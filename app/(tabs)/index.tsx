import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // 🔹 Load tasks when app starts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("tasks");
        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (e) {
        console.log("Error loading tasks");
      }
    };

    loadTasks();
  }, []);

  // 🔹 Save tasks whenever tasks change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (e) {
        console.log("Error saving tasks");
      }
    };

    saveTasks();
  }, [tasks]);

  // 🔹 Add Task
  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // 🔹 Delete Task
  const handleDeleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          marginBottom: 20,
          fontWeight: "bold",
          color: "black",
        }}
      >
        To-Do App
      </Text>

      {/* Input */}
      <TextInput
        placeholder="Enter task..."
        placeholderTextColor="#888"
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
          color: "black",
        }}
      />

      {/* Add Button */}
      <TouchableOpacity
        onPress={handleAddTask}
        style={{
          backgroundColor: "#3498db",
          padding: 12,
          borderRadius: 6,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Add</Text>
      </TouchableOpacity>

      {/* Empty State */}
      {tasks.length === 0 && (
        <Text
          style={{
            textAlign: "center",
            color: "#888",
            marginTop: 20,
          }}
        >
          No tasks yet
        </Text>
      )}

      {/* Task List */}
      {tasks.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            backgroundColor: "#eee",
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>{item}</Text>

          <TouchableOpacity onPress={() => handleDeleteTask(index)}>
            <Text style={{ color: "red", fontSize: 18 }}>❌</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
