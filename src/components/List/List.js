import React from 'react';

export default function List({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div className="poke-container">
      {pokemon.map((p) => (
        <p key={p.id}>
          {p.pokemon} <img src={p.url_image}></img>
        </p>
      ))}
      <div>Page: {currentPage}</div>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
