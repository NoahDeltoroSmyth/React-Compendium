import React from 'react';
import { Button } from '@mui/material';
export default function List({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  };
  return (
    <div className="poke-container">
      {pokemon.map((p) => (
        <div className="poke-info" key={p.id}>
          <p>
            name: {p.pokemon}
            <img src={p.url_image}></img>
          </p>
          <p> type: {p.type_1}</p>
          <p> type 2: {p.type_2}</p>
          <p>ability: {p.ability_1}</p>
          <p>shape: {p.shape}</p>
        </div>
      ))}
      <div className="page-loader">
        <div className="pagenumber">Page: {currentPage}</div>
        <Button className="prev-button" variant="outlined" onClick={handlePrevPage}>
          Previous Page
        </Button>
        <Button className="next-button" color="success" variant="outlined" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
}
