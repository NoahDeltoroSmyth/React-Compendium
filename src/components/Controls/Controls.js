import React from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';

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
      <div className="input">
        <TextField
          type="text"
          label="Search for a pokemon"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="dropdowns">
        <Select className="select" value={order} onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
        <Select
          className="select"
          value={selectedTypes}
          onChange={(e) => setSelectedTypes(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button
        className="button"
        color="success"
        variant="outlined"
        onClick={() => setLoading(true)}
      >
        Search
      </Button>
    </>
  );
}
