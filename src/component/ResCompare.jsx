import React, { useContext, useState } from 'react';
import QuizResult from './QuizResult';
import { movieContext } from './Movie';
import './ResCompare.css';

function ResCompare() {
  const { movies } = useContext(movieContext);
  const [inputText, setInputText] = useState('');
  const [answer, setAnswer] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const onChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const onClickHandler = () => {
    setIsTrue(true);
    if (inputText === movies.title) {
      setAnswer(true);
      console.log('정답');
    }
    console.log('오답');
  };
  console.log(inputText);
  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeHandler}
        placeholder='정답을 입력해주세요'
      />
      <button onClick={onClickHandler}>제출</button>
      <div>
        {isTrue ? <QuizResult answer={answer} title={movies.title} /> : ''}
      </div>
    </div>
  );
}

export default ResCompare;
