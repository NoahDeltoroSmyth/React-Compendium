import React from 'react';

export default function List({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <p key={p.id}>{p.pokemon}</p>
      ))}
    </div>
  );
}
