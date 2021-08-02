import * as React from "react";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// util
import { formatDate, formatTime } from "../../util/dateHelper";

const Picker = ({ mode, display, value, setValue, show }) => {
  const onChange = (event, selectedDate) => {
    show(false);

    if (mode === "date") {
      if (selectedDate) setValue(formatDate(selectedDate));
    } else {
      if (selectedDate) setValue(formatTime(selectedDate));
    }
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={value.to_date}
      mode={mode}
      is24Hour={false}
      display={display}
      onChange={onChange}
    />
  );
};

export default Picker;
