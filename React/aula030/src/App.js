import React from 'react';
import Input from './form/Input';
import Select from './form/Select';
import Radio from './form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['Red', 'Green', 'Blue']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={['Abacaxi', 'Banana', 'Maça']}
        value={frutas}
        setValue={setFrutas}
      />

      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
