import React, { useContext } from 'react';
import { movieContext } from './Movie';

function QuizResult() {
  const { movies } = useContext(movieContext);
  return (
    <div>
      {movies.answer
        ? '정답입니다.'
        : `오답입니다. 정답은 ${movies.title}입니다.`}
    </div>
  );
}

export default QuizResult;
