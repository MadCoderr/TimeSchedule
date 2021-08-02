import * as React from "react";
import { Button, Text, Flex, Divider, Box, Modal, Badge } from "native-base";

const UseModal = ({ isOpen, toggle, data, isBadge, isTeacher }) => {
  return (
    <Modal isOpen={isOpen} onClose={toggle}>
      <Modal.Content maxWidth="400px">
        <Modal.Body>
          <Flex direction="column">
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              my={1}
            >
              <Box>
                <Text bold>Course: </Text>
                <Text>{data?.title}</Text>
              </Box>
              {isBadge && data?.isReschedule && (
                <Badge colorScheme="success">ReSchedule</Badge>
              )}
            </Flex>
            {!isTeacher ? (
              <Box my={1}>
                <Text bold>Teacher: </Text>
                <Text>{data?.teacher}</Text>
              </Box>
            ) : (
              <>
                <Box my={1}>
                  <Text bold>Semester: </Text>
                  <Text>{data?.semester || 8}</Text>
                </Box>
                <Box my={1}>
                  <Text bold>Section: </Text>
                  <Text>{data?.section || "B"}</Text>
                </Box>
              </>
            )}
            {data?.isReschedule && (
              <Box my={1}>
                <Text bold>Reschedule Date: </Text>
                <Text>July 22, 2021</Text>
              </Box>
            )}
            <Box my={1}>
              <Text bold>Timing: </Text>
              <Text>
                {data?.startTime} - {data?.endTime}
              </Text>
            </Box>
            <Box my={1}>
              <Text bold>ClassRoom: </Text>
              <Text>{data?.location}</Text>
            </Box>
          </Flex>
        </Modal.Body>
        <Divider />
        <Modal.Footer>
          <Button variant="ghost" onPress={toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default UseModal;
