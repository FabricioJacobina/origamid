import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nome, email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block' }} htmlFor="nome">
        Nome completo:{' '}
      </label>
      <input
        style={{ display: 'block' }}
        id="nome"
        type="text"
        name="nome"
        value={nome}
        required
        onChange={(e) => setNome(e.target.value)}
      />
      <label style={{ display: 'block' }} htmlFor="email">
        Email:{' '}
      </label>
      <input
        style={{ display: 'block' }}
        id="email"
        type="email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ display: 'block' }} htmlFor="password">
        Senha:{' '}
      </label>
      <input
        style={{ display: 'block' }}
        id="password"
        type="password"
        name="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
