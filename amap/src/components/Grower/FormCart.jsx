import React, { useState } from "react";
import SelectCartType from "./SelectCartType";
import makeAnimated from "react-select/animated";
import ButtonAddIngredientCart from "./ButtonAddIngredientCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormCart() {
  const animatedComponents = makeAnimated();
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    id_producteur: JSON.parse(localStorage.getItem("user")).id,
    nom: "",
    description: "",
    type: "",
    created_at: "",
    image: "",
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

  const chooseImage = (type) => {
    const updateCart = { ...cart };
    switch (type) {
      case "fruit":
        updateCart["image"] =
          "https://medias.toutelanutrition.com/blog/2020/08/banner-fruits.jpg";
        updateCart["type"] = type;
        setCart(updateCart);
        break;
      case "légume":
        updateCart["image"] =
          "https://img-3.journaldesfemmes.fr/HwUgYMFAXpGcR9A7Xrw4oF67Mf4=/1500x/smart/409e102e633d42759746f73e286431a3/ccmcms-jdf/11057068.jpg";
        updateCart["type"] = type;
        setCart(updateCart);
        break;
      case "viande":
        updateCart["image"] =
          "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg";
        updateCart["type"] = type;
        setCart(updateCart);
        break;
      case "mélange":
        updateCart["image"] =
          "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg";
        updateCart["type"] = type;
        setCart(updateCart);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://amap-co.infinityfreeapp.com/AmapCo-Back/index.php?action=cartDetails",
        {
          cart,
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          toast.success("Le panier à bien été crée !", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
              navigate(
                `/profileGrower/${JSON.parse(localStorage.getItem("user")).id}`
              );
            },
          });
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
      if (event.name == "type") {
        chooseImage(data.value);
      } else {
        setCart(() => ({
          ...cart,
          [event.name]: data.value,
        }));
      }
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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default FormCart;
