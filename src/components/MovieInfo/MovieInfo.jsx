import { useLocation, Link } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
  const { title, overview, poster_path, genres, vote_average } = movie;
  const rating = Math.round(vote_average * 10);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>User score: {rating}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Genres</h5>
        <div>
          <ul>
            {genres
              ? genres.map(genre => <li key={genre.id}>{genre.name}</li>)
              : 'N/A'}
          </ul>
        </div>
      </div>

      <div>
        <h2>Additional Information</h2>
        <nav>
          <Link to="cast" state={{ from: backLinkHref }}>
            <p>Cast</p>
          </Link>

          <Link to="reviews" state={{ from: backLinkHref }}>
            <p>Reviews</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MovieInfo;
