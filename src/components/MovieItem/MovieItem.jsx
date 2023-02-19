import PropTypes from 'prop-types';
import { Container, Img, Title } from './MovieItem.styled';

const MovieItem = ({ title, poster }) => {
  return (
    <Container>
      <Img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieItem;
