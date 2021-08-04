export const checkBatch = (_batch, _reg) => {
  let numb = _reg.substring(0, 2);
  if (_batch === numb) return true;

  return false;
};

export const getRescheduleList = (_list) => {
  return _list.filter((item) => item.isReschedule);
};

export const validate = (_data) => {
  if (!_data) return false;

  if (
    !_data?.semester ||
    _data?.semester === "" ||
    !_data?.section ||
    _data?.section === "" ||
    !_data?.subject ||
    _data?.subject === ""
  )
    return false;

  return true;
};
