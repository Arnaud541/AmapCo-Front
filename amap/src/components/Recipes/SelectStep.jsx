import React from "react";
import Select from "react-select";

function SelectStep(props) {
  const { handleChangeSelect, style, animatedComponents, id } = props;
  const steps = [
    { value: 1, nom: "Etape n°1" },
    { value: 2, nom: "Etape n°2" },
    { value: 3, nom: "Etape n°3" },
    { value: 4, nom: "Etape n°4" },
    { value: 5, nom: "Etape n°5" },
  ];
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={steps}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.value}
      onChange={handleChangeSelect}
      placeholder="Etapes"
      name={"etape-" + id}
      styles={style}
    />
  );
}

export default SelectStep;
