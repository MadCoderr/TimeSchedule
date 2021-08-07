import * as React from "react";
import { Button, Text, Modal, Icon, Box } from "native-base";

import { AntDesign } from "@expo/vector-icons";

const DefaultModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} onClose={toggle} size="md">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Icon
              as={AntDesign}
              name="checkcircle"
              size={12}
              style={{ color: "#00DF76" }}
              mb={2}
            />
            <Text textAlign="center">Request Submitted</Text>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default DefaultModal;
