import React from 'react';
import './App.css';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({
    nome: 'Fabrício Jacobina',
    idade: '27',
  });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possuí Faculdade' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </div>
  );
};

export default App;
