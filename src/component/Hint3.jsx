import React from 'react';

function Hint3(props) {
  const img_url = `${props.img}${props.img_size}${props.poster_path}`;

  return (
    <div>
      <h3>세 번째 힌트</h3>
      <img src={img_url} alt='' />
    </div>
  );
}

export default Hint3;
