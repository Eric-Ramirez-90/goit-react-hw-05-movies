import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/76341';

const API_KEY = '67e5eabdd9e623c9f4d5d7c80743e2e5';

const FetchMovies = () => {};

export default FetchMovies;

// async function fetchImages(searchQuery, page) {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: searchQuery,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//     page,
//   });

//   const response = await axios.get(`${BASE_URL}${searchParams}`);

//   return response.data;
