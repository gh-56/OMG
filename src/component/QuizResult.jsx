import React, { useContext } from 'react';
import { movieContext } from './Movie';
import './QuizResult.css';

function QuizResult(props) {
  const {
    movies,
    posterImg,
    getMovie,
    gameCount,
    setGameCount,
    setCount,
    setIsTrue,
    setAnswer,
  } = useContext(movieContext);

  const img_url = `${posterImg.base_url}${posterImg.poster_sizes[3]}${movies.poster_path}`;
  const onClickHandler = () => {
    setGameCount(0);
    setIsTrue(false);
    setAnswer(false);
    setCount(30);
    getMovie();
  };
  const onClickHandler2 = () => {
    setIsTrue(false);
    setAnswer(false);
    setCount(30);
    getMovie();
  };
  const onClickHandler3 = () => {
    window.location.reload();
  };

  return (
    <div id='body'>
      <div id='answer'>
        {props.answer ? (
          <div>
            정답입니다.
            <div>현재까지 맞은 문제 수: {gameCount}</div>
            <button onClick={onClickHandler2}>다음 문제</button>
          </div>
        ) : (
          <div>
            오답입니다. 정답은 {movies.title}입니다.
            {gameCount === 0 ? (
              <div>총 {gameCount}개 맞추셨습니다</div>
            ) : (
              <div>총 {gameCount - 1}개 맞추셨습니다</div>
            )}
            <button onClick={onClickHandler}>다시 시작하기</button>
            <button onClick={onClickHandler3}>첫 화면으로 돌아가기</button>
          </div>
        )}
      </div>
      <div id='posterDiv'>
        <img src={img_url} id='moviePoster' alt='' />
      </div>
    </div>
  );
}

export default QuizResult;
