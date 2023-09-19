import React, { useContext } from 'react';
import { movieContext } from './Movie';

function GameScore(props) {
  const {
    getMovie,
    setGameCount,
    setCount,
    posterImg,
    movies,
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
    window.location.reload();
  };

  console.log(props.answer);
  return (
    <div>
      <div>정답입니다</div>
      <div>문제를 모두 맞추셨습니다</div>
      <button onClick={onClickHandler}>다시 시작하기</button>
      <button onClick={onClickHandler2}>첫 화면으로 돌아가기</button>
      <div>
        <img src={img_url} alt='' />
      </div>
    </div>
  );
}

export default GameScore;
