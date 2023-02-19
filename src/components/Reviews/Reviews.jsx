import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviewsInfo } from 'components/Api-services/Api-services';
import { Status } from '../../constants/status';
import Loader from 'components/Loader';

const Reviews = () => {
  const [movieReviews, setmovieReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);

    const controller = new AbortController();
    const signal = controller.signal;

    const getMovieReviews = async () => {
      try {
        const results = await fetchMoviesReviewsInfo(movieId, signal);

        if (!results.length) {
          return;
        }

        setmovieReviews(results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        if (error.name === 'CanceledError') return;

        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {status === Status.PENDING && <Loader />}{' '}
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <div>
          <ul>
            {movieReviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
