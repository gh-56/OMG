import React, { useContext } from 'react';
import { movieContext } from './Movie';

function Hint30() {
  const { movies } = useContext(movieContext);
  return (
    <div>
      <h3>첫 번째 힌트</h3>
      <div>{movies.overview}</div>
    </div>
  );
}

export default Hint30;
