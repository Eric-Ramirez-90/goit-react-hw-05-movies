import { MagnifyingGlass } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <MagnifyingGlass height="100" width="100" />
    </Container>
  );
};

export default Loader;
