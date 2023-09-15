import React, { useContext, useState } from 'react';
import { movieContext } from './Movie';
import './ResCompare.css';
import QuizResult from './QuizResult';
import GameScore from './GameScore';

function ResCompare() {
  const { movies, gameCount } = useContext(movieContext);
  const [inputText, setInputText] = useState('');
  const [answer, setAnswer] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

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
  console.log(inputText);
  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeHandler}
        placeholder='정답을 입력해주세요'
      />
      <button onClick={onClickHandler}>제출</button>
      {gameCount === 3 ? (
        <GameScore />
      ) : isTrue ? (
        <QuizResult answer={answer} title={movies.title} />
      ) : (
        ''
      )}

      {movies.title}
    </div>
  );
}

export default ResCompare;
