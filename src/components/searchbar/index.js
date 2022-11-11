import React, {useEffect, useState} from 'react';
import {
  Container,
  Image,
  Text,
  ImageContainer,
  ContainerResults,
  TextSubTitle,
  SeriesImage,
} from './styles';
import iconSearch from './../../../assets/images/icon-search.png';
import axios from 'axios';
import got from '../../../assets/images/got.jpeg';

// import { Container } from './styles';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = axios.create({
    baseURL: 'https://api.tvmaze.com',
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  });
  api
    .get(`/search/shows?q=${searchInput}`)
    .then(response => setResultData(response.data))
    .catch(error => error);

  useEffect(() => {
    try {
      setIsLoading(true);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Data fetching cancelled', error.data);
      } else {
        setIsLoading(false);
      }
    }
  }, [searchInput]);

  return (
    <Container>
      <Image source={iconSearch} />
      <Text
        placeholder="Search for a show, movie, genre, e.t.c."
        onChangeText={resultText => setSearchInput(resultText)}
      />
      {resultData?.map(
        result => (
          console.log(result.show.name),
          (
            <ContainerResults>
              <SeriesImage
                source={{
                  uri: result.show?.image?.original,
                }}></SeriesImage>
              <Text>{result.show.name}</Text>
              {/* <Vector1 source={playIcon}></Vector1>
          <Vector2 source={playIcon2}></Vector2> */}
            </ContainerResults>
          )
        ),
      )}
    </Container>
  );
};

export default SearchBar;
