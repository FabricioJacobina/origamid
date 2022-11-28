import React from 'react';
import Header from './Header';
import Home from './home';
import Produtos from './produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
