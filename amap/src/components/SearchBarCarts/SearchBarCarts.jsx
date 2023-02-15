import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function SearchBarCarts(props) {
  const { setCart } = props;

  const type = [
    { value: "fruit", nom: "fruit" },
    { value: "légume", nom: "légume" },
    { value: "viande", nom: "viande" },
    { value: "mélange", nom: "mélange" },
  ];

  const [search, setSearch] = useState({
    search: "",
    filters: {
      type: [],
    },
  });

  const [showFilters, setShowFilters] = useState(false);
  const animatedComponents = makeAnimated();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://127.0.0.1/AmapCo-Back/index.php?action=CartSearch", {
        params: {
          search: search,
        },
      })
      .then((response) => {
        console.log(response.data.producerCart);
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
            options={type}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            placeholder="type"
            name="filter-type"
            styles={customStyles}
          />
        </div>
      ) : null}
    </form>
  );
}

export default SearchBarCarts;
