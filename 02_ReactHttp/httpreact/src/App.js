import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

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
    return (
    <div className="App">
      <h1>
        Lista de produtos
      </h1>

      <ul>
        {products.map((products)=>(
          <li key={products.id}>
            {products.name} - R$: {products.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
