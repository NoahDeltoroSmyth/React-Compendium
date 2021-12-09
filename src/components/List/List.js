import React from 'react';

export default function List({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
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
      <div className="next-page">
        <div>Page: {currentPage}</div>
        <button className="next-button" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}
