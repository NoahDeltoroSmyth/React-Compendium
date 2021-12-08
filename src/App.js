import { useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import List from './components/List/List';
import { getPokemomData } from './services/data';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemomData(query);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);
  return (
    <div className="App">
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <List pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
