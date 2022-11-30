import React from 'react';
import Produto from './produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button
        onClick={handleClick}
        style={{
          marginRight: '1rem',
          padding: '.5rem',
          background: '#add8e6',
          border: '0px',
          borderRadius: '5px',
        }}
      >
        notebook
      </button>
      <button
        onClick={handleClick}
        style={{
          padding: '.5rem',
          background: '#add8e6',
          border: '0px',
          borderRadius: '5px',
        }}
      >
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
