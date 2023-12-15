import React, { useState } from 'react';
import './SearchBar.css'; // Adicione o ponto e vírgula aqui

import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Valor de busca:', searchValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder='Buscar produto'
        className='search_input'
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type='submit' className='search_button'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
