import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImage from '../../images/noImages.jpg';
import {
  Container,
  Img,
  InfoBlock,
  MoreInfo,
  NavMoreInfo,
  StyledLink,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { title, overview, poster_path, genres, vote_average } = movie;
  const rating = Math.round(vote_average * 10);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Container>
      <Img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : noImage
        }
        alt={title}
      />

      <InfoBlock>
        <h3>{title}</h3>
        <p>User score: {rating}%</p>
        <h4>Overview</h4>
        <p>{overview ? overview : 'N/A'}</p>
        <h5>Genres</h5>
        <div>
          <ul>
            {genres
              ? genres.map(genre => <li key={genre.id}>{genre.name}</li>)
              : 'N/A'}
          </ul>
        </div>

        <MoreInfo>Additional Information</MoreInfo>
        <NavMoreInfo>
          <StyledLink to="cast" state={{ from: backLinkHref }}>
            <p>Cast</p>
          </StyledLink>

          <StyledLink to="reviews" state={{ from: backLinkHref }}>
            <p>Reviews</p>
          </StyledLink>
        </NavMoreInfo>
      </InfoBlock>
    </Container>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default MovieInfo;
