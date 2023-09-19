import React, { useContext } from 'react';
import { movieContext } from './Movie';
import './Hint15.css';

function Hint15() {
  const { keyword, count } = useContext(movieContext);
  return (
    <div>
      {count <= 20 ? (
        <div>
          <div className='Hint15'>
            <div>
              <h3>두 번째 힌트</h3>
            </div>
            <div className='keywordBox'>
              {keyword.map((keywords) => (
                <div className='keyword' key={keywords.id}>
                  {keywords.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint15;
