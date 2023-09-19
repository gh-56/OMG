import React, { useContext, useState } from 'react';
import { movieContext } from './Movie';
import './ResCompare.css';
function ResCompare() {
  const {
    movies,
    setIsTrue,
    setAnswer,
    setGameCount,
    isTrue,
    clickHandler,
    count,
  } = useContext(movieContext);
  const [inputText, setInputText] = useState('');
  const onChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  var title = movies.title;
  const onClickHandler = () => {
    clickHandler();
    setIsTrue(true);
    setGameCount((gameCount) => gameCount + 1);
    if (inputText.replace(/(\s*)/g, '') === title.replace(/(\s*)/g, '')) {
      setAnswer(true);
      console.log('정답');
    } else {
      console.log('오답');
    }
  };
  const onClickAlert = () => {
    alert('이미 제출하셨습니다');
  };
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickHandler(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <div>
      {isTrue || count === 0 ? (
        <div>
          <input
            value={inputText}
            onChange={onChangeHandler}
            placeholder='정답을 입력해주세요'
            disabled
          />
          <button onClick={onClickAlert}>제출</button>
          {/* <div>{movies.title}</div> */}
        </div>
      ) : (
        <div>
          <input
            value={inputText}
            onChange={onChangeHandler}
            placeholder='정답을 입력해주세요'
            onKeyPress={handleOnKeyPress}
          />
          <button onClick={onClickHandler}>제출</button>
          {/* <div>{movies.title}</div> */}
        </div>
      )}
    </div>
  );
}
export default ResCompare;
