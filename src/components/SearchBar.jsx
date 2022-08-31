import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  // to handle what being search  
  const handleSubmit = (e) => {
    // to prevent reload
    e.preventDefault();
    if (searchTerm) {
      navigate(`/youtube-clone/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}
    >
        <input 
            className='search-bar'
            placeholder='Search...'
            // to handle typing at the search bar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'> 
            <SearchIcon /> 
        </IconButton>
    </Paper>
  )
}

export default SearchBar