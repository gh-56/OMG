import React from 'react';

function QuizResult(props) {
  return (
    <div>
      {props.answer
        ? '정답입니다.'
        : `오답입니다. 정답은 ${props.title}입니다.`}
    </div>
  );
}

export default QuizResult;
