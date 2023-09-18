import React, { useContext } from 'react';
import { movieContext } from './Movie';
import './Hint15.css';
function Hint15() {
  const { keyword, count } = useContext(movieContext);
  return (
    <div>
      {count <= 5 ? (
        <div className='Hint15'>
          <h3>두 번째 힌트</h3>

          {keyword.map((keywords) => (
            <p className='keyword' key={keywords.id}>
              {keywords.name}
            </p>
          ))}
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint15;
