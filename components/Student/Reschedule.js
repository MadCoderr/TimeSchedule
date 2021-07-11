import { Heading, Text, Divider, Box, FlatList, useToast } from "native-base";

import * as React from "react";
import { useState } from "react";

// component
import Card from "../Common/Card";
import UseModal from "../Common/UseModal";

// util
import mockupData from "../../util/data";
import { getRescheduleList } from "../../util/helper";

const Reschedule = () => {
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
        data={getRescheduleList(mockupData.timeTable)}
        renderItem={({ item }) => (
          <Card
            data={item}
            handleClick={handleClick}
            isBadge={item.isReschedule}
            isDate
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <UseModal isOpen={showModal} toggle={toggle} data={itemData} isBadge />
    </Box>
  );
};

export default Reschedule;
