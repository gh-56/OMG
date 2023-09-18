import React, { useContext, useState } from 'react';
import { movieContext } from './Movie';
import './ResCompare.css';

function ResCompare() {
  const { movies, setIsTrue, setAnswer } = useContext(movieContext);
  const [inputText, setInputText] = useState('');

  const onChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  var title = movies.title;
  const onClickHandler = () => {
    setIsTrue(true);
    if (inputText.replace(/(\s*)/g, '') === title.replace(/(\s*)/g, '')) {
      setAnswer(true);
      console.log('정답');
    } else {
      console.log('오답');
    }
  };
  return (
    <div className='ResCompare'>
      <input
        value={inputText}
        onChange={onChangeHandler}
        placeholder='정답을 입력해주세요'
      />
      <button onClick={onClickHandler}>제출</button>
      <div>{movies.title}</div>
    </div>
  );
}

export default ResCompare;
