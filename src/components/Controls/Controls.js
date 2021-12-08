import React from 'react';

export default function Controls({ query, setQuery, setLoading }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={(e) => setLoading(true)}>Search</button>
    </>
  );
}
