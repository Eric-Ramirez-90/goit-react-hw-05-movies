import { useLocation } from 'react-router-dom';
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

export default MoviesList;
