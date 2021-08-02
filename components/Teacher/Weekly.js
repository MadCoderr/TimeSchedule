import { ScrollView } from "react-native";
import { FlatList, Box } from "native-base";

import * as React from "react";
import { useState } from "react";

// component
import UseAccordion from "../Common/UseAccordion";
import UseModal from "../Common/UseModal";

// mockup
import mockupData from "../../util/data";

const Weekly = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState(null);

  const toggle = () => setShowModal(!showModal);

  const handleClick = (_data) => {
    setItemData(_data);
    toggle();
  };

  return (
    <Box width="100%" px={4} py={6} flex={1} bg="gray.50">
      <FlatList
        data={mockupData.teacher.weekly}
        renderItem={({ item }) => (
          <UseAccordion
            title={item.title}
            data={item.timeTable}
            handleClick={handleClick}
            isTeacher
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <UseModal isOpen={showModal} toggle={toggle} data={itemData} isTeacher />
    </Box>
  );
};

export default Weekly;
