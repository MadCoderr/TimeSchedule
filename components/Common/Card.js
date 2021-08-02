import { Pressable, Text, Badge, Flex } from "native-base";
import React from "react";

const Card = ({ data, handleClick, isBadge, isDate, isTeacher }) => {
  return (
    <Pressable
      shadow={1}
      borderRadius={4}
      bg={"white"}
      mx={1}
      my={2}
      px={2}
      py={3}
      _pressed={{
        bg: "primary.300",
      }}
      onPress={() => handleClick(data)}
    >
      <Flex direction="row">
        <Text flexGrow={1} noOfLines={1}>
          {data.title}
        </Text>
        {isBadge && <Badge colorScheme="success">ReSchedule</Badge>}
      </Flex>
      <Flex
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Text fontSize="xs" bold>
          {isDate && "July 12, 2021"}
          {isTeacher && `Semester ${data?.semester} - ${data?.section}`}
        </Text>
        <Text fontSize="sm">
          {data.startTime} <Text bold>-</Text> {data.endTime}
        </Text>
      </Flex>
    </Pressable>
  );
};

export default Card;
