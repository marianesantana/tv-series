import React, {useEffect, useState} from 'react';
import {Button, TextInput} from 'react-native';
import {
  apiClient,
  fetchApiShow,
  searchTvShow,
  showAllTvShows,
} from '../../services/app';
// import { View } from 'react-native';

import {Container, TextOi, ImageContainer, ImagesCarousel} from './styles';

const TvShowList = () => {
  return (
    <Container>
      {/* <TextOi
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={state.name}
      /> */}
    </Container>
  );
};

export default TvShowList;
