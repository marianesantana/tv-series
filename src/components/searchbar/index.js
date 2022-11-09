import React, {useState} from 'react';
import {Container, Image, Text} from './styles';
import iconSearch from './../../../assets/images/icon-search.png';

// import { Container } from './styles';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <Container>
      <Image source={iconSearch} />
      <Text
        placeholder="Search for a show, movie, genre, e.t.c."
        onChange={resultText => setSearchInput(resultText)}
      />
    </Container>
  );
};

export default SearchBar;
