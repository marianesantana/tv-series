import React, {useEffect} from 'react';

import {
  Container,
  Text,
  SeriesImage,
  TextContainer,
  Vector1,
  Vector2,
} from './styles';
import playIcon from './../../../assets/images/Vector.png';
import playIcon2 from './../../../assets/images/Vector-1.png';

const Resultlist = () => {
  return (
    <Container>
      <SeriesImage></SeriesImage>
      <TextContainer>
        <Text>aaaaaa</Text>
      </TextContainer>
      <Vector1 source={playIcon}></Vector1>
      <Vector2 source={playIcon2}></Vector2>
    </Container>
  );
};

export default Resultlist;
