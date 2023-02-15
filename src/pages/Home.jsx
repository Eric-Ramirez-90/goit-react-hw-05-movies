import FetchTrendingMovies from 'components/Api-services';
import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async () => {
      try {
        const movies = await FetchTrendingMovies(signal);

        setTrending(movies);
      } catch (error) {
        return error;
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
        <MoviesList movies={trending} />
      </div>
    </main>
  );
};

export default Home;
