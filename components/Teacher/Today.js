import {
  Heading,
  Text,
  Divider,
  Box,
  FlatList,
  useToast,
  Flex,
} from "native-base";

import * as React from "react";
import { useState } from "react";

// component
import Card from "../Common/Card";
import UseModal from "../Common/UseModal";

// util
import mockupData from "../../util/data";
import { getCurrentTime } from "../../util/dateHelper";

let current = getCurrentTime();

const Today = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState(null);

  const toggle = () => setShowModal(!showModal);

  const handleClick = (_data) => {
    setItemData(_data);
    toggle();
  };

  return (
    <Box width="100%" px={4} py={6} flex={1} bg="gray.50">
      <Heading alignSelf={"flex-start"} size="md">
        {current.prettier.today}, <Text>{current.prettier.month}</Text>
      </Heading>
      <Divider my={2} />
      {mockupData.teacher.timeTable.length > 0 ? (
        <FlatList
          data={mockupData.teacher.timeTable}
          renderItem={({ item }) => (
            <Card data={item} handleClick={handleClick} isTeacher />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
        >
          <Heading size="md">No Schedule Classes</Heading>
        </Flex>
      )}
      <UseModal isOpen={showModal} toggle={toggle} data={itemData} isTeacher />
    </Box>
  );
};

export default Today;
