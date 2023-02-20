import { useState } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { Container, Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [inputquery, setInputQuery] = useState('');

  const handleInpurChange = evt => {
    setInputQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!inputquery.trim()) {
      return toast.error('Please, enter a name');
    }
    onSubmit(inputquery);
    reset();
  };

  const reset = () => {
    setInputQuery('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search movies"
          value={inputquery}
          onChange={handleInpurChange}
        />
        <Button type="submit">
          <FcSearch size="24" />
        </Button>
      </Form>
    </Container>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
