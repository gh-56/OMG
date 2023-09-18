import React, { useContext, useState } from 'react';
import { movieContext } from './Movie';
import './ResCompare.css';
function ResCompare() {
  const { movies, setIsTrue, setAnswer, setGameCount, isTrue } =
    useContext(movieContext);
  const [inputText, setInputText] = useState('');
  const onChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  var title = movies.title;
  const onClickHandler = () => {
    setIsTrue(true);
    setGameCount((gameCount) => gameCount + 1);
    if (inputText.replace(/(\s*)/g, '') === title.replace(/(\s*)/g, '')) {
      setAnswer(true);
      console.log('정답');
    } else {
      console.log('오답');
    }
  };
  const onClickAlter = () => {
    alert('이미 제출하셨습니다.');
  };
  return (
    <div className='ResCompare'>
      {isTrue ? (
        <div>
          <input
            value={inputText}
            onChange={onChangeHandler}
            placeholder='정답을 입력해주세요'
            disabled
          />
          <button onClick={onClickAlter}>제출</button>
        </div>
      ) : (
        <div>
          <input
            value={inputText}
            onChange={onChangeHandler}
            placeholder='정답을 입력해주세요'
          />
          <button onClick={onClickHandler}>제출</button>
        </div>
      )}
      <div>{movies.title}</div>
    </div>
  );
}
export default ResCompare;
