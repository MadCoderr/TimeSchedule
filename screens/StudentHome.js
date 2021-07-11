import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, Text } from "native-base";

// components
import Today from "../components/Student/Today";
import Reschedule from "../components/Student/Reschedule";
import Weekly from "../components/Student/Weekly";

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: Today,
  second: Reschedule,
  third: Weekly,
});

export default function StudentHome() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Today" },
    { key: "second", title: "ReSchedule" },
    { key: "third", title: "Weekly" },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <Box key={i} flex={1} alignItems="center" p={4} bg="white">
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{ opacity, fontSize: 14, fontWeight: "600" }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </NativeBaseProvider>
  );
}
