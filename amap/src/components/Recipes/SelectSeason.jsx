import React from "react";
import Select from "react-select";

function SelectSeason(props) {
  const { handleChangeSelect, style, animatedComponents } = props;
  const seasons = [
    {
      value: "hiver",
      nom: "Hiver",
    },
    {
      value: "été",
      nom: "Eté",
    },
    {
      value: "printemps",
      nom: "Printemps",
    },
    {
      value: "automne",
      nom: "Automne",
    },
  ];
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={seasons}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      placeholder="Saisons"
      name="saison"
      styles={style}
    />
  );
}

export default SelectSeason;
