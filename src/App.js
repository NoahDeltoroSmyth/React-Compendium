import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import { getPokemomData } from './services/data';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemomData();
      setPokemon(data.results);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <List pokemon={pokemon} />
    </div>
  );
}

export default App;
