import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('product', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <span>Carregando...</span>;
  if (data)
    return (
      <div>
        <h1>Favorite product: {product}</h1>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        {data.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
