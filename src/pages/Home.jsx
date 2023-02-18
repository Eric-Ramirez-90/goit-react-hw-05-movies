import { useState, useEffect } from 'react';
import { Status } from '../constants/status';
import { fetchTrendingMovies } from '../components/Api-services/Api-services';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies(signal);

        setTrending(movies);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        if (error.name === 'CanceledError') return;

        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <div>
        <h1>Trending today</h1>
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && <MoviesList movies={trending} />}
        {status === Status.REJECTED && <div>{error}</div>}
      </div>
    </main>
  );
};

export default Home;
