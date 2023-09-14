import React from 'react';

function Hint15(props) {
  return (
    <div>
      {props.count <= 5 ? (
        <div>
          <div>{props.name}</div>
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default Hint15;
