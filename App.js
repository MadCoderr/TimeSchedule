import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// context
import { UserProvider } from "./context/UserAuth";

// screens
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import Student from "./screens/Student";
import Teacher from "./screens/Teacher";
import StudentSignUp from "./screens/StudentSignUp";
import StudentLogIn from "./screens/StudentLogIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StudentLogIn">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login Screen", //Set Header Title
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              title: "Signin Screen", //Set Header Title
            }}
          />
          <Stack.Screen
            name="Student"
            component={Student}
            options={{
              title: "Student Screen", //Set Header Title
            }}
          />
          <Stack.Screen
            name="Teacher"
            component={Teacher}
            options={{
              title: "Teacher Screen", //Set Header Title
            }}
          />
          <Stack.Screen
            name="StudentSignUp"
            component={StudentSignUp}
            options={{
              title: "Student Sign up", //Set Header Title
            }}
          />
          <Stack.Screen
            name="StudentLogIn"
            component={StudentLogIn}
            options={{
              title: "Student log in", //Set Header Title
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
    // <StudentSignUp></StudentSignUp>
  );
}
