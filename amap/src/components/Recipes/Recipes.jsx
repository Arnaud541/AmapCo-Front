import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Recipes.css";

function Recipes(props) {
  const { recipes } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(recipes?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(recipes?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, recipes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recipes?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="Home-recipes">
        {currentItems?.map((recipe) => (
          <Link className="Link-recipe" to={`/recipes/${recipe.id}`}>
          <div className="Home-recipe-1by1">
          
            <div className="recipe" key={recipe.id}>
              <h3 className="recipesh3">{recipe.titre}</h3>
            </div>
          
          </div>
          </Link>
        ))}
      </div>
      <Link className="create-new-recipe" to={"/recipe/create"}>Créer ma recette</Link>
      <div className="paginationdiv">
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
      </div>
    </>
  );
}

export default Recipes;
