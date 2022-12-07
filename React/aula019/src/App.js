import React from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('product', '');

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <h1>Favorite product: {product}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  );
};

export default App;
