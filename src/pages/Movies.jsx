import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesBySearchQuery } from 'components/Api-services/Api-services';
import { Status } from '../constants/status';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams('');
  const queryName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryName) return;

    setStatus(Status.PENDING);

    const getSearchingMovies = async () => {
      try {
        const queryMovies = await fetchMoviesBySearchQuery(queryName);

        if (queryMovies.length === 0) {
          toast.error('Nothing Found', { theme: 'colored' });
        }

        setMovies(queryMovies);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      }
    };

    getSearchingMovies();
  }, [queryName]);

  const handlFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <SearchForm onSubmit={handlFormSubmit} />
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.REJECTED && <div>{error}</div>}
      <ToastContainer autoClose={3000} rtl />
    </main>
  );
};

export default Movies;
