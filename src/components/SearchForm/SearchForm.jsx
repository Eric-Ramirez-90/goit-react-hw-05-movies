import { useState } from 'react';
import { toast } from 'react-toastify';

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={inputquery}
          onChange={handleInpurChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
