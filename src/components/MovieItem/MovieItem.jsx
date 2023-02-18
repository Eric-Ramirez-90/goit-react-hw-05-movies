import PropTypes from 'prop-types';

const MovieItem = ({ title, poster }) => {
  return (
    <div>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        width="300"
      /> */}
      <h3>{title}</h3>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieItem;
