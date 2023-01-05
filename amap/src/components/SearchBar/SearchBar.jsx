import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useState } from "react";

function SearchBar(props) {
  const [saisons, setSaisons] = useState([
    { value: "hiver", label: "Hiver" },
    { value: "été", label: "Eté" },
    { value: "printemps", label: "Printemps" },
    { value: "automne", label: "Automne" },
  ]);

  const [search, setSearch] = useState({
    search: "",
    filters: {
      ingredient: [],
      saison: [],
      regimeAlimentaire: [],
    },
  });

  const [showFilters, setShowFilters] = useState(false);
  const animatedComponents = makeAnimated();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleFilters = (data, event) => {
    if (event.name.startsWith("filter")) {
      let copySearch = { ...search };
      let array = [];

      data.forEach((e) => {
        array.push(e.nom);
      });
      let filtre = event.name.split("-")[1];
      switch (filtre) {
        case "region":
          copySearch.filtres.region.push(event.target.value);
          break;
        case "saison":
          copySearch.filters.saison = array;
          break;
        case "ingredient":
          copySearch.filters.ingredient = array;
        default:
          break;
      }
      setSearch(copySearch);
    }
  };

  const handleChange = (event) => {
    setSearch(() => ({
      ...search,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    setShowFilters(!showFilters);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
      width: 200,
      height: 20,
    }),
    container: (styles) => ({ ...styles, width: "200px" }),
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Votre recherche"
        onChange={handleChange}
        name="search"
      />
      <button type="submit">
        <FaSearch />
      </button>

      <button type="button" onClick={handleClick}>
        <FaSlidersH />
      </button>
      {showFilters ? (
        <div className="filters">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={props.ingredients.ingredient}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.nom}
            onChange={handleFilters}
            name="filter-ingredient"
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={props.recipes}
            onChange={handleFilters}
            name="filter-saison"
            styles={customStyles}
          />
        </div>
      ) : null}
    </form>
  );
}

export default SearchBar;
