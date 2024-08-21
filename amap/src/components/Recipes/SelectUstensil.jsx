import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function SelectUstensil(props) {
  const { handleChangeSelectArray, style, animatedComponents } = props;
  const [ustensils, setUstensils] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://amap-co.infinityfreeapp.com/htdocs/AmapCo-Back/index.php?action=allUstensils"
      )
      .then((response) => {
        setUstensils(response.data.ustensiles);
      });
  }, []);

  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={ustensils}
      getOptionLabel={(option) => option.nom}
      getOptionValue={(option) => option.nom}
      onChange={handleChangeSelectArray}
      name="ustensiles"
      placeholder="Ustensiles"
      styles={style}
    />
  );
}

export default SelectUstensil;
