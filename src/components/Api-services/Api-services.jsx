import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '67e5eabdd9e623c9f4d5d7c80743e2e5',
    language: 'en-US',
  },
});

const fetchTrendingMovies = async signal => {
  const { data } = await Axios.get('trending/movie/day', { signal });
  const dayTrands = data.results;

  return dayTrands;
};

const fetchMovieById = async (id, signal) => {
  const { data } = await Axios.get(`movie/${id}`, { signal });

  return data;
};

const fetchMoviesBySearchQuery = async searchQuery => {
  const { data } = await Axios.get(`search/movie?query=${searchQuery}`);

  const moviesList = data.results;

  return moviesList;
};

const fetchMovieCastInfo = async (id, signal) => {
  const { data } = await Axios.get(`movie/${id}/credits`, { signal });

  return data;
};

const fetchMoviesReviewsInfo = async (id, signal) => {
  const { data } = await Axios.get(`movie/${id}/reviews`, { signal });

  return data.results;
};

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMoviesBySearchQuery,
  fetchMovieCastInfo,
  fetchMoviesReviewsInfo,
};
