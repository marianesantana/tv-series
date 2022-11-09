import React, {useEffect, useState} from 'react';
import {showAllTvShows} from '../../services/app';
// import { View } from 'react-native';

import {Container, Text, ImageContainer, ImagesCarousel} from './styles';

const TvShowList = () => {
  const [tvShows, setTvShows] = useState([]);

  //   useEffect(() => {
  //     const resultList = showAllTvShows();
  //     console.log(resultList);
  //     setTvShows(resultList);
  //   }, [tvShows]);
  return (
    <Container>
      {/* {tvShows.map(value => (
        <Container key={value.id}>
          <Text> Popular on MazeTV</Text>
          <Text> {value.name}</Text>
          <ImagesCarousel>
            <ImageContainer source={value.image} />
          </ImagesCarousel> */}
    </Container>
    //   ))}
    // </Container>
  );
};

export default TvShowList;
