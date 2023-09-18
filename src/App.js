import { useState } from 'react';
import './App.css';
import Movie from './component/Movie';

function App() {
  const [startGame, setStartGame] = useState(false);
  const onClickHandler = () => {
    setStartGame(true);
  };
  return (
    <div className='App'>
      <h1>영화 맞추기 게임!</h1>
      {startGame ? (
        <Movie />
      ) : (
        <button onClick={onClickHandler}>게임 시작하기</button>
      )}
    </div>
  );
}

export default App;
