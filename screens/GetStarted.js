import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Heading, Text, Button, VStack, Center } from "native-base";
import * as React from "react";
import colors from "../components/colors";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_wrapper}>
        <View style={styles.logo} />
      </View>
      <Heading size="xl" mb={3}>
        Getting Started
      </Heading>
      <Text fontSize="md">As</Text>
      <VStack space={4} px={5} mt={8} w="100%">
        <Button
          size="lg"
          variant="outline"
          onPress={() => navigation.navigate("StudentLogin")}
        >
          Student
        </Button>
        <Text textAlign="center" fontSize="sm" color="gray.300">
          Or
        </Text>
        <Button
          size="lg"
          variant="outline"
          onPress={() => navigation.navigate("TeacherLogin")}
        >
          Teacher
        </Button>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo_wrapper: {
    marginTop: 96,
    marginBottom: 48,
  },
  logo: {
    width: 75,
    height: 75,
    backgroundColor: colors.secondary,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.textColor,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textLightColor,
  },
  label_short: {
    marginBottom: 8,
    marginTop: 8,
    color: colors.textLightColor,
    fontSize: 11,
  },
  btn_wrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 16,
  },
  btn: {
    width: "70%",
    paddingVertical: 12,
    backgroundColor: colors.quaternary,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  btn_label: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default GetStarted;
