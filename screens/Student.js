import { StyleSheet, Text,Button, View } from "react-native";
import * as React from "react";
const Student = ({navigation}) => {
  return (
    <View>
      <Text>Steudne Screen</Text>
      <Button
        onPress={() => navigation.navigate("Teacher")}
        title="Go to Teacher Dashbaord"
      />
    </View>
  );
};

export default Student;
