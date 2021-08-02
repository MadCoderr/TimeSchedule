import { Heading, Text, Divider, Box, FlatList, useToast } from "native-base";
import * as React from "react";

const Reschedule = () => {
  return (
    <Box width="100%" px={4} py={6} flex={1} bg="gray.50">
      <Heading alignSelf={"flex-start"} size="md">
        Sunday 28, <Text>July</Text>
      </Heading>
      <Divider my={2} />
      <Heading>Reschedule</Heading>
    </Box>
  );
};

export default Reschedule;
