import React from 'react';

function Hint15(props) {
  return (
    <div>
      {props.count <= 5 ? (
        <div>
          <h3>두 번째 힌트</h3>
          <div>{props.name}</div>
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint15;
