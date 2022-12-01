import React from 'react';
import Produto from './Produto';
import { GlobalStorege } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorege>
      <Produto />
    </GlobalStorege>
  );
};

export default App;
