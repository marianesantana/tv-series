import axios from 'axios';
const baseUrl = 'https://api.tvmaze.com/';

// Passing configuration object to axios
// const fetchUser = async () => {
//   const configurationObject = {
//     method: 'get',
//     url: `${baseUrl}/api/users/1`,
//   };
//   const response = await axios(configurationObject);
//   console.log(response.data);
// };

// Invoking get method to perform a GET request
export const fetchApi = async () => {
  const url = `${baseUrl}/api/users/1`;
  const response = await axios.get(url);
  console.log(response.data);
};
