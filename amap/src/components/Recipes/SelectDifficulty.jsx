import React from "react";
import Select from "react-select";

function SelectDifficulty(props) {
  const { handleChangeSelect, style, animatedComponents } = props;
  const difficulties = [
    { value: "Facile", nom: "Facile" },
    { value: "Moyen", nom: "Moyen" },
    { value: "Difficile", nom: "Difficile" },
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={difficulties}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      placeholder="Difficultés"
      name="difficulte"
      styles={style}
    />
  );
}

export default SelectDifficulty;
