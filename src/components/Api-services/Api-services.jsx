import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '67e5eabdd9e623c9f4d5d7c80743e2e5',
    language: 'en-US',
  },
});

const FetchTrendingMovies = async signal => {
  const { data } = await Axios.get('trending/movie/day', { signal });
  const dayTrands = data.result;

  return dayTrands;
};

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

export default FetchTrendingMovies;
