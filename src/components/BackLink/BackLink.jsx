import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

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

export default BackLink;
