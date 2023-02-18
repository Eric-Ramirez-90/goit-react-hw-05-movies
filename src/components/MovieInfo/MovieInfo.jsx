const MovieInfo = ({ movie }) => {
  const { title, overview, poster_path, genres, vote_average } = movie;
  const rating = Math.round(vote_average * 10);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="300"
      />
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
  );
};

export default MovieInfo;
