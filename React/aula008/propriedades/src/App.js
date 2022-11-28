import React from 'react';
import Form from './Form/Form';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}
      {children}
    </h1>
  );
};

const App = () => {
  return (
    <section>
      <Titulo cor="red" texto="Meu primeiro título">
        <p>Isso é o CHILDREN!</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu segundo título" />
      <Titulo cor="green" texto="Meu Terceiro título" />
      <Form />
    </section>
  );
};

export default App;
