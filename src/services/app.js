import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    let path = '/error';
    return Promise.reject(error);
  },
);
export const searchTvShow = input => {
  apiClient.get(`/search/shows?q=${input}`);
};

export const showAllTvShows = () => {
  apiClient.get('/shows');
};

export const getAllEpisodes = id => apiClient.get(`shows/${id}/episodes`);
