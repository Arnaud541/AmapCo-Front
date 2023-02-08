import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function SelectIngredient(props) {
  const { handleChangeSelectArray, style, animatedComponents } = props;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=allIngredients")
      .then((response) => {
        setIngredients(response.data.ingredients);
      });
  }, []);
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={ingredients}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.nom}
      onChange={handleChangeSelectArray}
      name="ingredients"
      placeholder="Ingredients"
      styles={style}
    />
  );
}

export default SelectIngredient;
