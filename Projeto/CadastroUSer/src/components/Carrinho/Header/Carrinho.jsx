import './Carrinho.css'
import SearchBar from '../SearchBar/SearchBar'
import CarButton from '../CarButton/CarButton'
const Carrinho = () => {
  return (
      <header className="header">
        <div className="container">
            <SearchBar/>
            <CarButton/>
        </div>
      </header>
    )
}

export default Carrinho