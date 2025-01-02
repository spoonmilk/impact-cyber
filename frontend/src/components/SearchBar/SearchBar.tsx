import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css'

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className={styles.searchcontainer}
    >
      <TextField
        className={styles.searchbar}
        variant="outlined"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              borderColor: '#a9c59a',
              transform: 'scale(1.02)',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            transition: 'border-color 0.3s ease',
            '&:hover': {
              borderColor: '#a9c59a',
            },
          },
        }}
      />
    </div>
  );
};

export default SearchBar;

