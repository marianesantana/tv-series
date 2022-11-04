import React from 'react';
import {Container, Image, Text} from './styles';
import iconSearch from './../../../assets/images/icon-search.png';

// import { Container } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <Image source={iconSearch}></Image>
      <Text placeholder="Search for a show, movie, genre, e.t.c."></Text>
    </Container>
  );
};

export default SearchBar;
