import {
  Heading,
  Text,
  ScrollView,
  Button,
  TextArea,
  Stack,
  Box,
  Flex,
  FormControl,
  Select,
  useToast,
} from "native-base";
import * as React from "react";
import { useState } from "react";

// components
import Picker from "../components/Common/Picker";

// util
import { formatDate, formatTime } from "../util/dateHelper";

const Reschedule = () => {
  const [dateValue, setDateValue] = useState(formatDate(new Date()));
  const [timeValue, setTimeValue] = useState(formatTime(new Date()));

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const toggleDate = () => setShowDate(!showDate);
  const toggleTime = () => setShowTime(!showTime);

  return (
    <ScrollView>
      <Box width="100%" px={4} py={6} bg="gray.50">
        <Flex direction="column" px={5}>
          <FormControl isRequired>
            <FormControl.Label>Semester</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select your Batch"
              placeholder="Select your Batch"
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
            <FormControl.Label>Section</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select your Batch"
              placeholder="Select your Batch"
              mt={1}
            >
              <Select.Item label="21" value="21" />
              <Select.Item label="20" value="20" />
              <Select.Item label="18" value="18" />
              <Select.Item label="17" value="17" />
              <Select.Item label="16" value="16" />
            </Select>
          </FormControl>
          <FormControl isRequired mt={5} isDisabled>
            <FormControl.Label>Subject</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select your Batch"
              placeholder="Select your Batch"
              mt={1}
            >
              <Select.Item label="21" value="21" />
              <Select.Item label="20" value="20" />
              <Select.Item label="18" value="18" />
              <Select.Item label="17" value="17" />
              <Select.Item label="16" value="16" />
            </Select>
          </FormControl>
          <FormControl mt={5}>
            <FormControl.Label>Select Date</FormControl.Label>
            <Button
              variant="outline"
              my={2}
              onPress={toggleDate}
              justifyContent="flex-start"
            >
              {dateValue.prettier}
            </Button>
            {showDate && (
              <Picker
                mode="date"
                display="calendar"
                value={dateValue}
                setValue={setDateValue}
                show={setShowDate}
              />
            )}
          </FormControl>
          <FormControl mt={5}>
            <FormControl.Label>Select Time</FormControl.Label>
            <Button
              variant="outline"
              my={2}
              onPress={toggleTime}
              justifyContent="flex-start"
            >
              {timeValue.prettier}
            </Button>
            {showTime && (
              <Picker
                mode="time"
                display="clock"
                value={timeValue}
                setValue={setTimeValue}
                show={setShowTime}
              />
            )}
          </FormControl>
          <FormControl mt={5}>
            <FormControl.Label>Comments</FormControl.Label>
            {/* <Input variant="outline" placeholder="Enter your Reg Numb" my={2} />
             */}
            <TextArea
              numberOfLines={4}
              textAlignVertical="top"
              placeholder="Write additional comments,"
            />
          </FormControl>
          <Button
            isLoading={false}
            isLoadingText="Submitting"
            variant="outline"
            mt={8}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </ScrollView>
  );
};

export default Reschedule;
