import { StyleSheet, View } from "react-native";

import {
  Heading,
  Text,
  Button,
  Input,
  Stack,
  Center,
  Box,
  Flex,
  FormControl,
  Tooltip,
  Select,
  useToast,
  Icon,
  Popover,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

import * as React from "react";
import { useState } from "react";

const TeacherLogin = ({ navigation }) => {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email === "") {
      toast.show({
        title: "Required fields are missing!",
      });
    } else {
      navigation.navigate("TeacherHome");
    }
  };

  const Test = React.forwardRef((props, ref) => (
    <Icon
      as={<MaterialIcons name="help" />}
      size="sm"
      m={2}
      {...props}
      ref={ref}
    />
  ));

  const PopOverContent = () => {
    return (
      <Popover
        placement="bottom"
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps} variant="ghost">
              <Icon as={<MaterialIcons name="help" />} size="sm" />
            </Button>
          );
        }}
      >
        <Popover.Content accessibilityLabel="hello world" borderRadius={"xl"}>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Note</Popover.Header>
          <Popover.Body>
            Enter the email provided by administrator.
          </Popover.Body>
        </Popover.Content>
      </Popover>
    );
  };

  return (
    <View style={styles.center}>
      <Box width="100%">
        <Flex direction="column" px={5}>
          <FormControl isRequired mt={5}>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControl.Label>Email</FormControl.Label>
              <PopOverContent />
            </Flex>
            <Input
              variant="outline"
              placeholder="Enter Email"
              my={2}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button
            isLoading={false}
            isLoadingText="Submitting"
            variant="outline"
            mt={8}
            onPress={handleClick}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TeacherLogin;
