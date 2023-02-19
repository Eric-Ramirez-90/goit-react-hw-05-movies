import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastInfo } from 'components/Api-services/Api-services';
import { Status } from '../../constants/status';
import Loader from 'components/Loader';

const Cast = () => {
  const [actorsCast, setActorsCast] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);

    const controller = new AbortController();
    const signal = controller.signal;

    const getMovieCast = async () => {
      try {
        const { cast } = await fetchMovieCastInfo(movieId, signal);

        if (!cast.length) {
          return;
        }

        setActorsCast(cast);
        setStatus(Status.RESOLVED);
      } catch (error) {
        if (error.name === 'CanceledError') return;

        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      }
    };

    getMovieCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <div>
          <ul>
            {actorsCast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="name"
                  width="200"
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
