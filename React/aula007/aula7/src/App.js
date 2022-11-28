import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const App = () => {
  return (
    <Fragment>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <Form />
      <Footer />
    </Fragment>
  );
};

export default App;
