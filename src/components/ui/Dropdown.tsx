import React from 'react';
import Select from 'react-dropdown-select';

const box={
  textDecoration:"none",
  color:"#01bf71",
  border:"2px solid #01bf71",
  borderRadius:"20px"
};
const DropDown: React.FC<{
  placeholder: string;
  options: { value: string; label: string }[];
  onSelection: (user: { value: string; label: string }) => void;
}> = (props) => {
  const inputChangeHandler = (values: { value: string; label: string }[]) => {
    // const value = values[0];
    // if (!props.options.includes(value)) return;
    props.onSelection(values[0]);
  };

  return (
    <Select
      options={props.options}
      values={[]}
      multi={false}
      onChange={(values) => inputChangeHandler(values)}
      placeholder={props.placeholder}
      dropdownHandle={false}
      clearable={true}
      style={box}
    />
  );
};

export default DropDown;