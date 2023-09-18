import React, { useContext } from 'react';
import { movieContext } from './Movie';
function QuizResult(props) {
  const {
    movies,
    posterImg,
    getMovie,
    gameCount,
    setGameCount,
    setCount,
    setAnswer,
    setIsTrue,
  } = useContext(movieContext);
  const img_url = `${posterImg.base_url}${posterImg.poster_sizes[2]}${movies.poster_path}`;
  const onClickHandler = () => {
    setGameCount(0);
    setCount(10);
    setIsTrue(false);
    setAnswer(false);
    getMovie();
  };
  const onClickHandler2 = () => {
    setCount(10);
    setIsTrue(false);
    setAnswer(false);
    getMovie();
  };
  return (
    <div>
      {props.answer ? (
        <div>
          정답입니다.
          <div>현재까지 맞은 문제 수: {gameCount}</div>
          <button onClick={onClickHandler2}>다음 문제</button>
        </div>
      ) : (
        <div>
          오답입니다. 정답은 {movies.title}입니다.
          <button onClick={onClickHandler}>다시 시작하기</button>
        </div>
      )}
      <img src={img_url} alt='' />
    </div>
  );
}
export default QuizResult;
