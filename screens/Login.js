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
      <Text>If not register sign up now</Text>
      <Button
        onPress={() => navigation.navigate("StudentSignUp")}
        title="Sign up as Student"
      />
    </View>
  );
};

export default Login;
