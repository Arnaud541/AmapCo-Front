import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonAddOpinion(props) {
  const { opinion, setOpinion, idGrower } = props;
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setOpinion(() => ({
      ...opinion,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://amap.momomotus.fr/AmapCo-Back/index.php?action=growerreview",
        {
          opinion,
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          setShow(!show);
          navigate(`/growers/${idGrower}`);
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
        {show ? "Cacher" : "Ajouter un avis"}
      </button>
      {show ? (
        <form className="form-add-comment" onSubmit={handleSubmit}>
          <textarea
            className="textarea-add-comment"
            placeholder="Ajouter un avis"
            name="avis"
            onChange={handleChange}
          />
          <button className="submit-new-comment" type="submit">
            Envoyer
          </button>
        </form>
      ) : null}
    </>
  );
}

export default ButtonAddOpinion;
