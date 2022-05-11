import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";

import "react-native-get-random-values";
import { v4 } from "uuid";

import { View } from "../components/Themed";
import TodoItem from "../components/TodoItem";
import { RootTabScreenProps } from "../types";

interface Task {
  id: string;
  title: string;
  description: string;
}

export default function MainScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [isCreatingTodo, setIsCreatingTodo] = useState<boolean>(false);

  const [title, onChangeTitle] = useState<string>("");
  const [description, onChangeDescription] = useState<string>("");

  let [todoItems, setTodoItems] = useState<Task[]>([]);
  const handlePress = () => {
    setTodoItems((prev) => [...prev, { id: v4(), title, description }]);
    onChangeTitle("");
    onChangeDescription("");

    setIsCreatingTodo(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            description={item.description}
            onPressRemove={() =>
              setTodoItems((prev) => prev.filter((i) => i.id !== item.id))
            }
          />
        ))}
      </ScrollView>

      {isCreatingTodo ? (
        <View style={styles.createTodo}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="Description"
          />
          <Button onPress={handlePress} title="Add" />
        </View>
      ) : (
        <Button onPress={() => setIsCreatingTodo(true)} title="Add new todo" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignContent: "flex-start",
  },
  createTodo: {
    position: "absolute",
    flex: 1,
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
