import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastInfo } from 'components/Api-services/Api-services';
import { Status } from '../../constants/status';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import noImage from '../../images/noImages.jpg';
import { Container, List, Item, Img, Name, Text, Span } from './Cast.styled';

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
          toast.info('No cast information found');
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
    <Container>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <div>{error}</div>}
      {status === Status.RESOLVED && (
        <List>
          {actorsCast.map(({ id, name, profile_path, character }) => (
            <Item key={id}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : noImage
                }
                alt="name"
              />
              <Name>{name}</Name>
              <Text>
                <Span>Character:</Span> {character ? character : 'N/A'}
              </Text>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cast;
