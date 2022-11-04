export const searchTvShow = input => {
  const url = 'https://api.tvmaze.com/search/shows?q=girls';
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      console.log(jsonData);
    });
};
