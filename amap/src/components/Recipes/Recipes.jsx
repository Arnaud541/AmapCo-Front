import React, { useState, useEffect } from "react";
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
    if (recipes && recipes.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(recipes.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(recipes.length / itemsPerPage));
    } else {
      // Gérer le cas où recipes est vide ou undefined
      setCurrentItems([]);
      setPageCount(0);
    }
  }, [itemOffset, itemsPerPage, recipes]);

  const handlePageClick = (event) => {
    if (recipes && recipes.length > 0) {
      const newOffset = (event.selected * itemsPerPage) % recipes.length;
      setItemOffset(newOffset);
    }
  };

  return (
    <>
      <div className="Home-recipes">
        {currentItems.map((recipe) => (
          <Link className="Link-recipe" to={`/recipes/${recipe.id}`} key={recipe.id}>
            <div className="Home-recipe-1by1">
              <div className="recipe">
                <h3 className="recipesh3">{recipe.titre}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link className="create-new-recipe" to={"/recipe/create"}>
        Créer ma recette
      </Link>
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

export default Recipes;
