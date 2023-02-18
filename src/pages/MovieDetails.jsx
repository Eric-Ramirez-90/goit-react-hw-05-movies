import BackLink from 'components/BackLink';
import MovieInfo from 'components/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../components/Api-services/Api-services';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId, signal);

        setMovie(data);
      } catch (error) {
        return error;
      }
    };

    getMovieById();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to Movies list</BackLink>
      <MovieInfo movie={movie} />
    </main>
  );
};

export default MovieDetails;
