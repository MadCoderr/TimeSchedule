import moment from "moment";

export const getCurrentTime = () => {
  let now = new moment();

  return {
    now,
    prettier: {
      today: now.format("dddd D"),
      month: now.format("MMMM"),
    },
  };
};

export const formatDate = (_date) => {
  let current = moment(_date);

  return {
    prettier: current.format("DD-MM-YYYY"),
    to_date: current.toDate(),
  };
};

export const formatTime = (_time) => {
  let current = moment(_time);

  return {
    prettier: current.format("hh:mm a"),
    to_date: current.toDate(),
  };
};
