import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <>
      <StyledLink to={to}>
        <HiOutlineArrowNarrowLeft size="24" />
        {children}
      </StyledLink>
    </>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default BackLink;
