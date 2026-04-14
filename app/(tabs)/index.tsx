import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState("");

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
        style={{
          backgroundColor: "#3498db",
          padding: 12,
          borderRadius: 6,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
