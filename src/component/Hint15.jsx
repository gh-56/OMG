import React, { useContext } from 'react';
import { movieContext } from './Movie';
import './Hint15.css';
function Hint15() {
  const { keyword, count } = useContext(movieContext);
  return (
    <div>
      {count <= 5 ? (
        <div id='div'>
          <h3>두 번째 힌트</h3>
          {keyword.map((keywords) => (
            <div key={keywords.id}>{keywords.name}</div>
          ))}
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint15;
