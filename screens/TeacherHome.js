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
import { NativeBaseProvider, Box, Text, Fab, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// components
import Today from "../components/Teacher/Today";
import Reschedule from "../components/Teacher/Reschedule";
import Weekly from "../components/Teacher/Weekly";

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: Today,
  second: Weekly,
});

export default function TeacherHome({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Today" },
    { key: "second", title: "Weekly" },
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
      <Fab
        placement="bottom-right"
        bg="primary.700"
        icon={
          <Icon
            color="white"
            as={<MaterialIcons name="change-history" />}
            size={4}
          />
        }
        onPress={() => navigation.navigate("ReRequest")}
      />
    </NativeBaseProvider>
  );
}
