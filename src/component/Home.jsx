import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <h1 className="Header">영화 맞추기 게임</h1>
      <section>
        <input type="text" placeholder='정답을 입력하세요'/>
        <button>제출</button>
      </section>
    </div>)
}

export default Home;
