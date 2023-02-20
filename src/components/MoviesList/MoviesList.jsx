import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem';
import { StyledLink, List, Item } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem title={title} poster={poster_path} />
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
