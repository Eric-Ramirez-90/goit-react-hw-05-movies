import { Routes, Route, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieInfo from 'pages/MovieInfo';
import MoviesList from '../components/MoviesList';
import MovieCast from './MovieCast';
import MovieReview from './MovieReview';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }

  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trending" element={<MoviesList />} />
        </Route>
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="cast" element={<MovieReview />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
