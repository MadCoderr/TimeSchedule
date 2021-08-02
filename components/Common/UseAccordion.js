import { ScrollView } from "react-native";
import { FlatList, Accordion, Text } from "native-base";

import * as React from "react";

// components
import Card from "./Card";

const UseAccordion = ({ title, data, handleClick, isTeacher }) => {
  return (
    <Accordion my={1}>
      <Accordion.Item>
        <Accordion.Summary>
          {title}
          <Accordion.Icon />
        </Accordion.Summary>
        <Accordion.Details>
          {data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  handleClick={handleClick}
                  isTeacher={isTeacher}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>No Schedule CLass</Text>
          )}
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  );
};

export default UseAccordion;
