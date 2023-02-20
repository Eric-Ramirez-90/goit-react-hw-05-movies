import PropTypes from 'prop-types';
import noImage from '../../images/noImages.jpg';
import { Container, Img, Title } from './MovieItem.styled';

const MovieItem = ({ title, poster }) => {
  return (
    <Container>
      <Img
        src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : noImage}
        alt={title}
      />
      <Title>{title}</Title>
    </Container>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default MovieItem;
