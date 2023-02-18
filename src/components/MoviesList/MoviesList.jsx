import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ form: location }}>
            <MovieItem title={title} poster={poster_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
