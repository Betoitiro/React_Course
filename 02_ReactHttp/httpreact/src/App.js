import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const { data: items, httpConfig } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // Adicionar o produto à lista de produtos
    setProducts([...products, product]);

    //5- refatorando Post
    httpConfig(product, "POST");

    // Limpar os campos de entrada
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type='text'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type='number'
              value={price}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            <input type='submit' value="Criar" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
