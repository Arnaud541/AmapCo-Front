import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function SelectIngredientUnique(props) {
  const { handleChangeSelect, style, animatedComponents, id } = props;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=allIngredients")
      .then((response) => {
        setIngredients(response.data.ingredients);
        console.log(response.data.ingredients);
      });
  }, []);
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={ingredients}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.id}
      onChange={handleChangeSelect}
      name={"ingredient-" + id}
      placeholder="Ingredients"
      styles={style}
    />
  );
}

export default SelectIngredientUnique;
