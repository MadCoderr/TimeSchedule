import { ScrollView } from "react-native";
import { FlatList, Accordion } from "native-base";

import * as React from "react";

// components
import Card from "./Card";

const UseAccordion = ({ title, data, handleClick }) => {
  return (
    <Accordion my={1}>
      <Accordion.Item>
        <Accordion.Summary>
          {title}
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card data={item} handleClick={handleClick} />
            )}
            keyExtractor={(item) => item.id}
          />
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  );
};

export default UseAccordion;
