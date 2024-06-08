import { useState } from 'react';

const Home = () => {
  const [searchStr, setsearchStr] = useState('');

  const onsearchInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    const response = await fetch(
      `https://opi.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);

    // https://opi.tvmaze.com/search/shows?q=boys
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          onChange={onsearchInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Home;
