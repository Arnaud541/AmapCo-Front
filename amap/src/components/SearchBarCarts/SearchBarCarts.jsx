import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./SearchBarCarts.css";

function SearchBarCarts(props) {
  const { setCart, ingredients } = props;

  const type = [
    { value: "fruit", nom: "Fruit" },
    { value: "légume", nom: "Légume" },
    { value: "viande", nom: "Viande" },
    { value: "mélange", nom: "Mélange" },
  ];

  const [search, setSearch] = useState({
    search: "",
    filters: {
      type: [],
      ingredient: [],
    },
  });

  const [showFilters, setShowFilters] = useState(false);
  const animatedComponents = makeAnimated();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=CartSearch",
        {
          params: {
            search: search,
          },
        }
      )
      .then((response) => {
        setCart(response.data.producerCart);
      });
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
        case "type":
          copySearch.filters.type = array;
          break;
        case "ingredient":
          copySearch.filters.ingredient = array;
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
        className="input-home"
        type="text"
        placeholder="Votre recherche"
        onChange={handleChange}
        name="search"
      />
      <button className="search-button" type="submit">
        <FaSearch />
      </button>

      <button className="burger-button" type="button" onClick={handleClick}>
        <FaSlidersH />
      </button>

      {showFilters ? (
        <div className="filters">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={ingredients}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.nom}
            onChange={handleFilters}
            placeholder="Ingrédients"
            name="filter-ingredient"
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            isMulti
            options={type}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            placeholder="Type"
            name="filter-type"
            styles={customStyles}
          />
        </div>
      ) : null}
    </form>
  );
}

export default SearchBarCarts;
