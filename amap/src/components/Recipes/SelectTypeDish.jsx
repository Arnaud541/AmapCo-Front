import React from "react";
import Select from "react-select";

function SelectTypeDish(props) {
  const { handleChangeSelect, style, animatedComponents } = props;
  const typeDishes = [
    { value: "Entrée", nom: "Entrée" },
    { value: "Plat", nom: "Plat" },
    { value: "Dessert", nom: "Dessert" },
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={typeDishes}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      name="typePlat"
      placeholder="Type de plat"
      styles={style}
    />
  );
}

export default SelectTypeDish;
