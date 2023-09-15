import React, { useContext } from 'react';
import { movieContext } from './Movie';
import './Hint3.css';

function Hint3() {
  const { movies, posterImg, count } = useContext(movieContext);

  const img_url = `${posterImg.base_url}${posterImg.poster_sizes[2]}${movies.poster_path}`;
  return (
    <div>
      {count <= 3 ? (
        <div id='div'>
          <h3>세 번째 힌트</h3>
          <img src={img_url} alt='' />
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint3;
