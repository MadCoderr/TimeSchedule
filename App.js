import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import Student from "./screens/Student";
import Teacher from "./screens/Teacher";
import StudentSignUp from "./screens/StudentSignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         title: "Login Screen", //Set Header Title
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Signin"
    //       component={Signin}
    //       options={{
    //         title: "Signin Screen", //Set Header Title
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Student"
    //       component={Student}
    //       options={{
    //         title: "Student Screen", //Set Header Title
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Teacher"
    //       component={Teacher}
    //       options={{
    //         title: "Teacher Screen", //Set Header Title
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <StudentSignUp></StudentSignUp>
    

  );
  
}
