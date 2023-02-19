import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesReviewsInfo } from 'components/Api-services/Api-services';
import { Status } from '../../constants/status';
import Loader from 'components/Loader';
import { Container, List, Title, Item } from './Reviews.styled';

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
          toast.info('No reviews were found');
          setStatus(Status.IDLE);
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
        <Container>
          <List>
            {movieReviews.map(({ id, author, content }) => (
              <Item key={id}>
                <Title>Author: {author}</Title>
                <p>&emsp;{content}</p>
              </Item>
            ))}
          </List>
        </Container>
      )}
    </div>
  );
};

export default Reviews;
