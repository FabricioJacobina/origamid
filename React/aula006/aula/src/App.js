import React from 'react';

const App = () => {
  function handleClick(e) {
    alert('Você comprou uma ' + e.target.innerText);
  }
  return (
    <div>
      <button onClick={handleClick}>Camiseta</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

export default App;
