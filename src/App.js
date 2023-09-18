import { useState } from 'react';
import './App.css';
import Movie from './component/Movie';
function App() {
  const [startGame, setStartGame] = useState(false);
  const [gc, setGc] = useState(3);
  const [selectValue, setSelectValue] = useState(3);
  const onChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };
  const onClickHandler = () => {
    setGc(selectValue);
    setStartGame(true);
  };
  console.log('selectValue = ' + selectValue);
  return (
    <div className='App'>
      <h1>영화 맞추기 게임!</h1>
      {startGame ? (
        <Movie gc={gc} />
      ) : (
        <div>
          <div className='gameDescription'>게임 설명 </div>
          <ol>
            <li>맞출 문제의 개수를 정해줍니다.</li>{' '}
            <li>문제마다 힌트가 제공됩니다.</li>
            <li>30초안에 문제를 못 맞출 시 오답이 되고 다시 시작합니다.</li>
          </ol>
          <div className='selectLevel'>
            난이도를 선택해주세요.
            <select onChange={onChangeHandler}>
              <option value={3}>쉬움</option>
              <option value={5}>보통</option>
              <option value={7}>어려움</option>
              <option value={10}>매우어려움</option>
            </select>
          </div>
          <div>
            <button className='startButton' onClick={onClickHandler}>
              게임 시작하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
