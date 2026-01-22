import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);

  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="d-flex  w-50  mx-auto mt-4 position-relative" role="search" onSubmit={handleSubmit}>
        
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Buscar canciones, artistas, álbumes..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
        style={{ paddingLeft: '40px' }}
      /><IoIosSearch 
        size={20} 
        style={{ 
          position: 'absolute', 
          left: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: '#888'
        }} />
    </form>
  );
};

export default SearchForm;