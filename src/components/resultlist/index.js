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
import tvshowicon from './../../../assets/images/got.jpeg';

const Resultlist = () => {
  return (
    <Container>
      <SeriesImage source={tvshowicon}></SeriesImage>
      <Text>Game of Thrones</Text>
      {/* <Vector1 source={playIcon}></Vector1>
      <Vector2 source={playIcon2}></Vector2> */}
    </Container>
  );
};

export default Resultlist;
