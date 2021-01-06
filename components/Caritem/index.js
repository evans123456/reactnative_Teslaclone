import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { id, name, tagline, taglineCTA, image } = props.car.item;
  return (
    <View style={styles.carContainer} key={id}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={[styles.subtitleCTA]}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          text="Custom Order"
          onPress={() => {
            console.warn("Custom Order has been pressed");
          }}
        />
        <StyledButton
          type="secondary"
          text="existing inventory"
          onPress={() => {
            console.warn("Existing Inventory has been pressed");
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
