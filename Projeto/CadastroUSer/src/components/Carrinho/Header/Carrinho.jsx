import './Carrinho.css'
import SearchBar from '../SearchBar/SearchBar'
const Carrinho = () => {
  return (
      <header className="header">
        <div className="container">
            <SearchBar/>
            <button>cart</button>
        </div>
      </header>
    )
}

export default Carrinho