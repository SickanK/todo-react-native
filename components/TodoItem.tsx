import React from "react";
import {
  Text,
  View,
  StyleSheet,
  GestureResponderEvent,
  Button,
} from "react-native";

export type Props = {
  title: string;
  description: string;
  onPressRemove?(e: GestureResponderEvent): void;
};

export default function TodoItem({ title, description, onPressRemove }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>

      <Button title="Remove" onPress={onPressRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: 50,
    backgroundColor: "blue",
  },
});
