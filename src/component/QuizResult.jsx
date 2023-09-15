import React, { useContext } from 'react';
import { movieContext } from './Movie';

function QuizResult(props) {
  const { movies, posterImg, getMovie, gameCount } = useContext(movieContext);

  const img_url = `${posterImg.base_url}${posterImg.poster_sizes[2]}${movies.poster_path}`;
  return (
    <div>
      {props.answer ? (
        '정답입니다.'
      ) : (
        <div>
          오답입니다. 정답은 {movies.title}입니다.
          <img src={img_url} alt='' />
        </div>
      )}
      <div>현재 푼 문제 수: {gameCount}</div>
      <button onClick={getMovie}>다음 문제</button>
    </div>
  );
}

export default QuizResult;
