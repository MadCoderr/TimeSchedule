import { StyleSheet, View } from "react-native";
import {
  Heading,
  Text,
  Button,
  Input,
  Box,
  Flex,
  FormControl,
  Select,
  useToast,
} from "native-base";
import * as React from "react";
import { useState } from "react";
import { checkBatch } from "../util/helper";

const StudentLogin = ({ navigation }) => {
  const toast = useToast();
  const [batch, setBatch] = useState("");
  const [regNumb, setRegNumb] = useState("");

  const handleClick = () => {
    if (batch === "" || regNumb === "") {
      toast.show({
        title: "Required fields are missing!",
      });
    } else {
      if (checkBatch(batch, regNumb)) {
        navigation.navigate("StudentHome");
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: "StudentHome" }],
        // });
      } else {
        toast.show({
          title: "Batch Number are not same",
        });
      }
    }
  };

  return (
    <View style={styles.center}>
      <Box width="100%">
        <Flex direction="column" px={5}>
          <FormControl isRequired>
            <FormControl.Label>Select Batch</FormControl.Label>
            <Select
              selectedValue={batch}
              width="100%"
              variant="filled"
              accessibilityLabel="Select your Batch"
              placeholder="Select your Batch"
              onValueChange={(itemValue) => {
                setBatch(itemValue);
              }}
              mt={1}
            >
              <Select.Item label="21" value="21" />
              <Select.Item label="20" value="20" />
              <Select.Item label="18" value="18" />
              <Select.Item label="17" value="17" />
              <Select.Item label="16" value="16" />
            </Select>
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label>Register Number</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Enter your Reg Numb"
              my={2}
              value={regNumb}
              onChangeText={(val) => setRegNumb(val)}
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
export default StudentLogin;
