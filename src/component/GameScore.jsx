import React, { useContext } from 'react';
import { movieContext } from './Movie';

function GameScore(props) {
  const { getMovie, setGameCount } = useContext(movieContext);
  const onClickHandler = () => {
    setGameCount(0);
    getMovie();
  };
  return (
    <div>
      <div>문제를 모두 맞추셨습니다</div>
      <button onClick={onClickHandler}>다시 시작하기</button>
    </div>
  );
}

export default GameScore;
