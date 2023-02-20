import React, { useState } from "react";

function FormCart() {
  const [cart, setCart] = useState({
    id_producteur: JSON.parse(localStorage.getItem("user")).id,
    nom: "",
    description: "",
    type: "",
    ingredients: [],
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      padding: 20,
      width: 200,
      height: 20,
    }),
    container: (styles) => ({ ...styles, width: "200px" }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cart);
  };

  const handleChange = (event) => {
    setCart(() => ({
      ...cart,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSelect = (data, event) => {
    if (event.name.includes("-")) {
      let str = event.name.split("-");

      switch (true) {
        case str[0] == "ingredient":
          const copyRecipeIngredients = { ...recipe };
          copyRecipeIngredients["ingredients"][str[1]][str[0]] = data.id;
          setRecipe(copyRecipeIngredients);
          break;
      }
    } else {
      setRecipe(() => ({
        ...recipe,
        [event.name]: data.value,
      }));
    }
  };
  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}></form>
    </div>
  );
}

export default FormCart;
