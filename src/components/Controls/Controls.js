import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  setSelectedTypes,
  selectedTypes,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={selectedTypes} onChange={(e) => setSelectedTypes(e.target.value)}>
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button className="search" onClick={() => setLoading(true)}>
        Search
      </button>
    </>
  );
}
