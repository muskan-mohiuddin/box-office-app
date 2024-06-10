import { useState } from 'react';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setsearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onsearchInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={searchStr}
        onChange={onsearchInputChange}
      ></input>

      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
