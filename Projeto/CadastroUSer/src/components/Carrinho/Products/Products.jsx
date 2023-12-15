import React, {useState, useEffect} from 'react'; 
import './Products.css';
import fetchProducts from '../../../API/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProducts('iphone').then((response)=>{
            setProducts(response)
        }); 
    },[])

  return (
    <section className='products container'>
      {
        products.map((product)=> <ProductCard key={product.id} data= {product}/>)
      }
    </section>
  )
}

export default Products