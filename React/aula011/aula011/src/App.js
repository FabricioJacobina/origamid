import React from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = React.useState(['Item 01', 'Item 02']);

  function handleClick() {
    setItems([...items, 'Novo Item']);
    console.log(items);
  }

  return (
    <div>
      <button onClick={handleClick}>Clicar</button>
    </div>
  );
};

export default App;
