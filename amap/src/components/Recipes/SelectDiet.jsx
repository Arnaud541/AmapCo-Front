import React from "react";
import Select from "react-select";

function SelectDiet(props) {
  const { handleChangeSelect, style, animatedComponents } = props;
  const diets = [
    { value: "Flexitarien", nom: "Flexitarien" },
    { value: "Végétarien", nom: "Végétarien" },
    { value: "Omnivore", nom: "Omnivore" },
    { value: "Sans Gluten", nom: "Sans Gluten" },
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={diets}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      name="regime"
      placeholder="Regime alimentaire"
      styles={style}
    />
  );
}

export default SelectDiet;
