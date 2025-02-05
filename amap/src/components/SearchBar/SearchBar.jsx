import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import Recipes from "../Recipes/Recipes";

function SearchBar(props) {
  const { ingredients, setRecipes } = props;
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

  const typeDishes = [
    { value: "Entrée", nom: "Entrée" },
    { value: "Plat", nom: "Plat" },
    { value: "Dessert", nom: "Dessert" },
  ];

  const difficulties = [
    { value: "Facile", nom: "Facile" },
    { value: "Moyen", nom: "Moyen" },
    { value: "Difficile", nom: "Difficile" },
  ];

  const diets = [
    { value: "Flexitarien", nom: "Flexitarien" },
    { value: "Végétarien", nom: "Végétarien" },
    { value: "Omnivore", nom: "Omnivore" },
    { value: "Sans Gluten", nom: "Sans Gluten" },
  ];

  const [search, setSearch] = useState({
    search: "",
    filters: {
      ingredient: [],
      saison: [],
      difficulte: [],
      regimeAlimentaire: [],
      typePlat: [],

    },
  });

  const [showFilters, setShowFilters] = useState(false);
  const animatedComponents = makeAnimated();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://amap-co.fr/index.php?action=recipeSearch",
        {
          params: {
            search: search,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setRecipes(response.data.recettes);
      });
  };

  const handleFilters = (data, event) => {
    if (event.name.startsWith("filter")) {
      let copySearch = { ...search };
      let array = [];

      data.forEach((e) => {
        array.push(e.nom);
      });
      let filtre = event.name?.split("-")[1];
      switch (filtre) {
        case "type":
          copySearch.filters.type = array;
          break;
        case "saison":
          copySearch.filters.saison = array;
          break;
        case "difficulte":
          copySearch.filters.difficulte = array;
          break;
        case "ingredient":
          copySearch.filters.ingredient = array;
          break;
        case "typePlat":
          copySearch.filters.typePlat = array;
          break;
        case "regimeAlimentaire":
          copySearch.filters.regimeAlimentaire = array;
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
        className="input-home2"
        type="text"
        placeholder="Votre recherche"
        onChange={handleChange}
        name="search"
      />
      <button className="search-button2" type="submit">
        <FaSearch />
      </button>

      <button className="burger-button2" type="button" onClick={handleClick}>
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
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={seasons}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            placeholder="Saisons"
            name="filter-saison"
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={difficulties}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            placeholder="Difficultés"
            name="filter-difficulte"
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={typeDishes}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            name="filter-typePlat"
            placeholder="Type de plat"
            styles={customStyles}
          />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={diets}
            getOptionLabel={(option) => option.nom}
            getOptionValue={(option) => option.value}
            onChange={handleFilters}
            name="filter-regimeAlimentaire"
            placeholder="Regime alimentaire"
            styles={customStyles}
          />
        </div>
      ) : null}
    </form>
  );
}

export default SearchBar;
