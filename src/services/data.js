export async function getPokemomData() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await response.json();
  return data;
}
