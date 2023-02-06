import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Growers.css";

function Growers(props) {
  const { growers } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(growers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(growers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, growers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % growers.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="growers">
        {currentItems.map((grower) => (
          <Link to={`/growers/${grower.id}`}>
            <div className="grower" key={grower.id}>
              <img src={"./src/assets/default.png"} alt="Avatar" />
              <div className="grower-description">
                <h2>
                  {grower.prenom} {grower.nom}
                </h2>
                <h4>
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </>
  );
}

export default Growers;
