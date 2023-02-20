import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../components/Api-services/Api-services';
import { Status } from '../constants/status';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackLink from 'components/BackLink';
import MovieInfo from 'components/MovieInfo';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setStatus(Status.PENDING);

    const controller = new AbortController();
    const signal = controller.signal;

    const getMovieById = async () => {
      try {
        const data = await fetchMovieById(movieId, signal);

        setMovie(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        if (error.name === 'CanceledError') return;

        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      }
    };

    getMovieById();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies list</BackLink>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <MovieInfo movie={movie} />}
      {status === Status.REJECTED && <div>{error}</div>}

      <ToastContainer autoClose={3000} rtl />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
