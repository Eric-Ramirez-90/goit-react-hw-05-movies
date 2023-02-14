import { Link, Outlet, useParams } from 'react-router-dom';

const MovieInfo = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h2>Now showing product with id - {movieId}</h2>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
