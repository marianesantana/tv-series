import {ContainerHome} from './styles';
import SearchBar from '../../components/searchbar/index.js';
import ResultList from '../../components/resultlist/index.js';

import React from 'react';
import TvShowList from '../../components/tvshowlist';

export const HomePage = () => {
  return (
    <ContainerHome>
      <SearchBar></SearchBar>
      <ResultList></ResultList>

      <TvShowList />
    </ContainerHome>
  );
};
