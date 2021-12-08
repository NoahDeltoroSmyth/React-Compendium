import { useState, useEffect } from 'react';
import './App.css';
import { getPokemomData } from './services/data';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemomData();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
