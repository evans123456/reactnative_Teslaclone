import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CarItem from "./components/Caritem";
import cars from "./assets/cars";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <FlatList
        style={{ width: "100%", height: "100%" }}
        data={cars}
        renderItem={(car) => <CarItem car={car} />}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
      {/* {cars.map((car, index) => {
        return <CarItem car={car} index={index} />;
      })} */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
});
