import React, { useState } from "react";
import SelectCartType from "./SelectCartType";
import makeAnimated from "react-select/animated";
import ButtonAddIngredientCart from "./ButtonAddIngredientCart";
import axios from "axios";

function FormCart() {
  const animatedComponents = makeAnimated();
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    id_producteur: JSON.parse(localStorage.getItem("user")).id,
    nom: "",
    description: "",
    type: "",
    created_at: "",
    end_at: "",
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
    axios
      .post(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=cartDetails",
        {
          cart,
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          navigate(
            `/profileGrower/${JSON.parse(localStorage.getItem("user")).id}`
          );
        }
      });
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
          const copyCartIngredients = { ...cart };
          copyCartIngredients["ingredients"][str[1]][str[0]] = data.id;
          setCart(copyCartIngredients);
          break;
      }
    } else {
      setCart(() => ({
        ...cart,
        [event.name]: data.value,
      }));
    }
  };
  return (
    <div className="container">
      <form className="creation-cart" onSubmit={handleSubmit}>
        <div className="panier-info-create">
          <input
            className="login__input"
            type="text"
            placeholder="Nom du panier"
            onChange={handleChange}
            name="nom"
          />
          <SelectCartType
            style={customStyles}
            handleChangeSelect={handleChangeSelect}
            animatedComponents={animatedComponents}
          />
          <input
            className="login__input"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            name="description"
          />
          <label className="label-created-at" htmlFor="created_at">
            Date de début
          </label>
          <input
            id="created_at"
            className="login__input"
            type="datetime-local"
            name="created_at"
            onChange={handleChange}
          />
          <label className="label-end-at" htmlFor="end_at">
            Date de fin
          </label>
          <input
            id="end_at"
            className="login__input"
            type="datetime-local"
            name="end_at"
            onChange={handleChange}
          />
        </div>
        <div className="panier-info-ingredients">
          <h1 className="h1-create-cart">Ingredients</h1>
          <hr />
          <div className="panier-info-ingredients-items">
            <ButtonAddIngredientCart
              cart={cart}
              handleChangeSelect={handleChangeSelect}
              style={customStyles}
              animatedComponents={animatedComponents}
              setCart={setCart}
              type="button"
            />
          </div>
        </div>
        <div className="button-create-cart">
          <button className="create-new-cart-btn" type="submit">
            Créer le panier
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCart;
