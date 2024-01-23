import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  /**
   * Resgatando dados
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // Adicionar o produto à lista de produtos
    setProducts([...products, product]);

    // Limpar os campos de entrada
    setName("");
    setPrice("");

    const res = await fetch(url,{
      method: 'Post',
      headers: {
        "content-Type" : "application/json"
      },
      body: JSON.stringify(product),
    })
    
  };



  return (
    <div className="App">
      <h1>
        Lista de produtos
      </h1>

      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name} - R$: {products.price}
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
