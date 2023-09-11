import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import ResCompare from './ResCompare';

function Home() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);
  return (
    <div>
      <h1>영화 맞추기 게임!</h1>
      <input type='text' placeholder='정답을 입력해주세요' />
      <button>제출</button>
      <p>{count ? count : <div>카운트 다운 종료</div>}</p>
      <Movie />
      <ResCompare />
    </div>
  );
}

export default Home;
