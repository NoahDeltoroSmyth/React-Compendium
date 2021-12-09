import React from 'react';

export default function List({ pokemon, currentPage, setCurrentPage }) {
  return (
    <div className="poke-container">
      {pokemon.map((p) => (
        <p key={p.id}>
          {p.pokemon} <img src={p.url_image}></img>
        </p>
      ))}
      <div>Page: {currentPage}</div>
      <button onClick={() => setCurrentPage((prevState) => ++prevState)}>Next Page</button>
    </div>
  );
}
