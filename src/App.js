import { useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import List from './components/List/List';
import { getPokemomData, getTypes } from './services/data';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState('all');
  // console.log(types);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemomData(query, order, currentPage, selectedTypes);
      setPokemon(data.results);
      // console.log(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 900);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage, selectedTypes]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            order={order}
            setOrder={setOrder}
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <List
            pokemon={pokemon}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
}

export default App;
