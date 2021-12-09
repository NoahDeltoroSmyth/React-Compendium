import { useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import List from './components/List/List';
import { getPokemomData } from './services/data';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemomData(query, order);
      setPokemon(data.results);
      console.log(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order]);
  return (
    <div className="App">
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} setOrder={setOrder} />
          <List pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
