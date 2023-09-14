import React, { useState } from 'react';

function ResCompare(props) {
  const [input, setInput] = useState('');
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const onClickHandler = () => {
    if (input === props.title) {
      console.log('정답');
    } else {
      console.log('오답');
    }
  };
  console.log(input);
  return (
    <div>
      <input
        value={input}
        onChange={onChangeHandler}
        placeholder='정답을 입력해주세요'
      />
      <button onClick={onClickHandler}>제출</button>
    </div>
  );
}

export default ResCompare;
