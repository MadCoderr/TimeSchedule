import { StyleSheet, Text, View,Button } from "react-native";
import * as React from "react";
const Signin = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        onPress={() => navigation.navigate("StudentSignUp")}
        title="Sign up as Student"
      />
    </View>
  );
};

export default Signin;
