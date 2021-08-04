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
import uuid from "react-uuid";

// components
import Picker from "../components/Common/Picker";

// util
import { formatDate, formatTime } from "../util/dateHelper";
import { validate } from "../util/helper";
import mockup from "../util/data";
import { requestCollection } from "../util/collections";

const Reschedule = () => {
  const toast = useToast();

  const [dateValue, setDateValue] = useState(formatDate(new Date()));
  const [timeValue, setTimeValue] = useState(formatTime(new Date()));
  const [formData, setFormData] = useState(null);

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const toggleDate = () => setShowDate(!showDate);
  const toggleTime = () => setShowTime(!showTime);

  const handleSubmit = () => {
    let data = {
      id: uuid(),
      ...formData,
      date: dateValue,
      time: timeValue,
    };

    if (validate(data)) {
      requestCollection
        .doc(data.id)
        .set(data)
        .then((res) => console.log("done"))
        .catch((err) => console.log(err));
    } else {
      toast.show({
        title: "Required fields are missing!",
      });
    }
  };

  return (
    <ScrollView>
      <Box width="100%" px={4} py={6} bg="gray.50">
        <Flex direction="column" px={5}>
          <FormControl isRequired>
            <FormControl.Label>Semester</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select Batch"
              placeholder="Select Batch"
              mt={1}
              value={formData?.semester || ""}
              onValueChange={(val) =>
                setFormData({ ...formData, semester: val })
              }
            >
              {mockup.semesters.map((item, i) => (
                <Select.Item key={i} label={item.label} value={item.value} />
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label>Section</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select Section"
              placeholder="Select Section"
              mt={1}
              value={formData?.section || ""}
              onValueChange={(val) =>
                setFormData({ ...formData, section: val })
              }
            >
              {mockup.sections.map((item, i) => (
                <Select.Item key={i} label={item.label} value={item.value} />
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired mt={5}>
            <FormControl.Label>Subject</FormControl.Label>
            <Select
              width="100%"
              variant="filled"
              accessibilityLabel="Select Subject"
              placeholder="Select Subject"
              mt={1}
              value={formData?.subject || ""}
              onValueChange={(val) =>
                setFormData({ ...formData, subject: val })
              }
            >
              {mockup.subjects.map((item, i) => (
                <Select.Item key={i} label={item.label} value={item.value} />
              ))}
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
            <TextArea
              numberOfLines={4}
              textAlignVertical="top"
              placeholder="Write additional comments,"
              value={formData?.comment || ""}
              onChangeText={(val) => setFormData({ ...formData, comment: val })}
            />
          </FormControl>
          <Button
            isLoading={false}
            isLoadingText="Submitting"
            variant="outline"
            mt={8}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </ScrollView>
  );
};

export default Reschedule;
