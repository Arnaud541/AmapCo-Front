import React from "react";
import Select from "react-select";
function SelectCartType(props) {
  const { handleChangeSelect, style, animatedComponents } = props;

  const type = [
    { value: "fruit", nom: "Fruit" },
    { value: "légume", nom: "Légume" },
    { value: "viande", nom: "Viande" },
    { value: "mélange", nom: "Mélange" },
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={type}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      placeholder="Type"
      name="type"
      styles={style}
    />
  );
}

export default SelectCartType;
