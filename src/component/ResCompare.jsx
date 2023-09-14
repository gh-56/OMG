import React, { useContext, useState } from 'react';
import QuizResult from './QuizResult';
import { movieContext } from './Movie';

function ResCompare() {
  const { movies } = useContext(movieContext);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(false);
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const onClickHandler = () => {
    if (input === movies.title) {
      setAnswer(true);
      console.log('정답');
    } else {
      setAnswer(false);
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
      <QuizResult answer={answer} title={movies.title} />
    </div>
  );
}

export default ResCompare;
