import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: "black" }}>
        To-Do App
      </Text>

      <TextInput
        placeholder="Enter task..."
        placeholderTextColor="#888"
        value={task}
        onChangeText={(text) => setTask(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
          color: "black",
        }}
      />

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

      {/* Show tasks */}
      {tasks.map((item, index) => (
        <Text key={index} style={{ fontSize: 18, marginBottom: 10 }}>
          • {item}
        </Text>
      ))}
    </View>
  );
}
