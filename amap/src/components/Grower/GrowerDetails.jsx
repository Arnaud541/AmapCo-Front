import React, { useEffect, useState } from "react";
import "./GrowerDetails.css";
import growerimg from "../../assets/img/backgroundgrower.png";
import avatarimg from "../../assets/default.png";
import { Link } from "react-router-dom";
import ButtonAddOpinion from "./ButtonAddOpinion";
import ReactPaginate from "react-paginate";
import StarsGrower from "./StarsGrower";

function GrowerDetails(props) {
  const { grower, growerreview, growercart, note } = props;
  const profile = JSON.parse(localStorage.getItem("user"));

  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

  const [opinion, setOpinion] = useState({
    id_utilisateur: profile ? profile.id : null,
    id_producteur: grower.id,
    avis: "",
  });

  useEffect(() => {
    if (growerreview && growerreview.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(growerreview.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(growerreview.length / itemsPerPage));
    } else {
      // Gérer le cas où growerreview est vide ou undefined
      setCurrentItems([]);
      setPageCount(0);
    }
  }, [itemOffset, itemsPerPage, growerreview]);

  const handlePageClick = (event) => {
    if (growerreview && growerreview.length > 0) {
      const newOffset = (event.selected * itemsPerPage) % growerreview.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <div className="container">
      <img id="growerimg" src={growerimg} alt="Background" />
      <div className="growerinfo">
        <img id="avatargrowerprofile" src={avatarimg} alt="Avatar" />
        <div className="growerdata">
          <span className="data">{grower.nom}</span>
          <span className="inscriptionDate">
            Date d'inscription : {grower.created_at}
          </span>
          <p className="growerdesc">{grower.description}</p>
        </div>
      </div>
      <div className="growerlike">
        <h2>Note : {Math.round(note.note * 10) / 10}</h2>
        <h2>Commentaires : {growerreview ? growerreview.length : 0}</h2>
        <StarsGrower />
      </div>

      <div className="growerpresentation">
        <h2 id="titleCartspresentation">Paniers disponibles</h2>
        <hr />
        <div className="growerCarts">
          {growercart?.map((cart) => (
            <Link to={`/growers/${grower.id}/cart/${cart.id}`} key={cart.id}>
              <div className="growerCart">
                <div className="growercartimgprofile">
                  <img
                    id="growercartimg"
                    src={cart.img_url}
                    alt="CartPicture"
                  />
                </div>
                <div className="titlewithgrowercart">
                  <h3 className="titlecart">{cart.nom}</h3>
                  <h4 className="title4grower">{grower.nom}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="userReview">
        <h2 id="titleUserReview">Avis des amapiens</h2>
        <hr />
        {profile && profile.acces === 1 ? (
          <ButtonAddOpinion
            opinion={opinion}
            setOpinion={setOpinion}
            idGrower={grower.id}
          />
        ) : null}
        {currentItems?.map((gr) => (
          <div className="growerReview" key={gr.id}>
            <span className="note">
              {gr.nom} {gr.note}/5
            </span>
            <br />
            <span className="publication">Publié le {gr.created_at}</span>
            <p className="growerReviews">{gr.avis}</p>
          </div>
        ))}
        <div className="paginationdiv">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Suivant >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< Précédent"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
            activeLinkClassName="active-link"
            pageClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            pageLinkClassName="page-num-link"
            disabledClassName="button-disabled"
          />
        </div>
      </div>
    </div>
  );
}

export default GrowerDetails;
