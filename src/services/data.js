export async function getPokemomData(query, order, currentPage, selectedTypes) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', order);
  if (selectedTypes !== 'all') {
    params.set('type', selectedTypes);
  }
  params.set('page', currentPage);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data;
}

export async function getTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data.map((item) => item.type);
}
