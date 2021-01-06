import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({ text, type, onPress }) => {
  const bg = type === "primary" ? "#171A20CC" : "white";
  const txtcolor = type === "primary" ? "white" : "#171A20CC";
  return (
    <View styles={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bg }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: txtcolor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default StyledButton;
