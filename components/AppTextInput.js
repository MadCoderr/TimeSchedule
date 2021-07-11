import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import colors from "./colors";

function AppTextInput({ icon, ...otherProps }) {
  const [firsName, setFirstName] = useState("");
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"#6e6969"}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    // border: "1px solid  #74d14c",
    borderWidth:1,
    borderColor:colors.green

  },

  textInput: {
    color: "#0c0c0c",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  icon: {
    marginRight: 10,
    marginTop:4,
  },
});

export default AppTextInput;
