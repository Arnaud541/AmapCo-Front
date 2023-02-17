import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Carts.css";

function Carts(props) {
  const { carts } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(carts?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carts?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, carts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carts?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="wecarts">
        {currentItems?.map((cart) => (
          <div className="weekcart" key={cart.id}>
            <h3 className="weekcarts">{cart.nom}</h3>
          </div>
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

export default Carts;
