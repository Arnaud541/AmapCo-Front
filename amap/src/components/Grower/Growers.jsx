import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Growers.css";

function Growers(props) {
  const { growers = [] } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    if (Array.isArray(growers) && growers.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(growers.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(growers.length / itemsPerPage));
    } else {
      // Gestion des cas où growers est vide ou non défini
      setCurrentItems([]);
      setPageCount(0);
    }
  }, [itemOffset, itemsPerPage, growers]);

  const handlePageClick = (event) => {
    if (Array.isArray(growers) && growers.length > 0) {
      const newOffset = (event.selected * itemsPerPage) % growers.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      <div className="growers">
        {currentItems.map((grower) => (
          <Link to={`/growers/${grower.id}`} key={grower.id}>
            <div className="grower">
              <img
                className="avatargrow"
                src={"./src/assets/default.png"}
                alt="Avatar"
              />
              <div className="grower-description">
                <h2 className="growername">
                  {grower.prenom} {grower.nom}
                </h2>
                <h4 className="growerdescript">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
                  rem! Fugit molestiae, enim eligendi nam porro similique cum
                  vel rem animi quibusdam? Iste odit asperiores enim? Minima
                  corrupti voluptates nihil.
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="paginationdiv">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Suivante >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Précédente"
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
    </>
  );
}

export default Growers;
