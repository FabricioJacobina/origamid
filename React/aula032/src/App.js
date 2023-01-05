import React from 'react';
import Input from './form/Input';
import Select from './form/Select';
import Radio from './form/Radio';
import Checkbox from './form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagem, setLinguagem] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha o seu CEP');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateCep(cep)) {
      console.log('foi');
    } else {
      console.log('nao');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Checkbox</h1>
      <h2>Linguagens</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby', 'Python']}
        value={linguagem}
        setValue={setLinguagem}
      />

      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
        required
      />

      <h1>Radio</h1>
      <h2>Cores</h2>
      <Radio options={['Red', 'Green', 'Blue']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={['Abacaxi', 'Banana', 'Maça']}
        value={frutas}
        setValue={setFrutas}
      />

      <h1>Select</h1>
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />

      <h1>Input</h1>
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        placeholder="Nome Completo"
      />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        placeholder="exemplo@email.com"
        required
      />
      <Input
        id="cep"
        label="CEP"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
