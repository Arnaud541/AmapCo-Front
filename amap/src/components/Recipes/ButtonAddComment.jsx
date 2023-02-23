import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonAddComment(props) {
  const { comment, setComment, idRecipe } = props;
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setComment(() => ({
      ...comment,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://amap.momomotus.fr/AmapCo-Back/index.php?action=comments", {
        comment,
      })
      .then((response) => {
        if (response.data.status === 200) {
          setShow(!show);
          navigate(`/recipes/${idRecipe}`);
        }
      });
  };
  return (
    <>
      <button
        className="button-add-comment"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show ? "Cacher" : "Ajouter un commentaire"}
      </button>
      {show ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Ajouter un commentaire"
            name="contenu"
            onChange={handleChange}
          />
          <button type="submit">Envoyer</button>
        </form>
      ) : null}
    </>
  );
}

export default ButtonAddComment;
