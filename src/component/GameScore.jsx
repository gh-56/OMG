import React, { useContext } from 'react';
import { movieContext } from './Movie';

function GameScore(props) {
  const { getMovie, setGameCount, gameCount } = useContext(movieContext);
  const onClickHandler = () => {
    setGameCount(0);
    getMovie();
  };
  console.log(props.answer);
  return (
    <div>
      <div>문제를 모두 맞추셨습니다</div>
      <div>맞은 문제 수 : {gameCount - 1}</div>
      <button onClick={onClickHandler}>다시 시작하기</button>
    </div>
  );
}

export default GameScore;
