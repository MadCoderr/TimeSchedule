import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";

// context
import { UserProvider } from "./context/UserAuth";

// screens
import GetStarted from "./screens/GetStarted";
import StudentLogin from "./screens/StudentLogin";
import TeacherLogin from "./screens/TeacherLogin";
import StudentHome from "./screens/StudentHome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="StudentLogin"
              component={StudentLogin}
              options={{
                headerTitle: "Login",
              }}
            />
            <Stack.Screen
              name="TeacherLogin"
              component={TeacherLogin}
              options={{
                headerTitle: "Login",
              }}
            />
            <Stack.Screen
              name="StudentHome"
              component={StudentHome}
              options={{
                headerTitle: "Home",
                headerLeft: null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserProvider>
  );
}
