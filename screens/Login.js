import { StyleSheet, Button, Text, View } from "react-native";
import * as React from "react";
const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Dashbaord </Text>
      <Button
        onPress={() => navigation.navigate("Student")}
        title="Go to Student Dashbaord"
      />
      <Button
        onPress={() => navigation.navigate("Teacher")}
        title="Go to Teacher Dashbaord"
      />
    </View>
  );
};

export default Login;
