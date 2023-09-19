import React from 'react';
import Home from './Home';
import ResCompare from './ResCompare';
import { useState, useEffect, createContext } from 'react';
import QuizResult from './QuizResult';
import GameScore from './GameScore';
export const movieContext = createContext();
function Movie(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [posterImg, setPosterImg] = useState(null);
  const [count, setCount] = useState(30);
  const [keyword, setKeyword] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [answer, setAnswer] = useState(false);
  let timeOutID = null;

  // let duplicatedIdx = [];
  const getMovie = async () => {
    setLoading(true);
    const rand = Math.floor(Math.random() * 10) + 1;
    const queryString = `&page=${rand}&include_adult=false&include_video=false&language=ko-KR&sort_by=popularity.desc`;
    const api = '?api_key=f5217a0db9120b09b842b37fe18c9685';
    const url = `https://api.themoviedb.org/3/discover/movie${api}${queryString}`;
    const url_posterPath = `https://api.themoviedb.org/3/configuration${api}`;
    while (true) {
      const response = await (await fetch(url)).json();
      const idx = Math.floor(Math.random() * response.results.length);
      console.log('idx = ' + idx);
      fetch(url)
        .then((res) => res.json())
        .then((json) => console.log(json));
      const response2 = await (await fetch(url_posterPath)).json();
      fetch(url_posterPath)
        .then((res) => res.json())
        .then((json) => console.log(json));
      setPosterImg(response2.images);
      // 키워드
      const url_keywords = `https://api.themoviedb.org/3/movie/${response.results[idx].id}/keywords${api}`;
      const response3 = await (await fetch(url_keywords)).json();
      fetch(url_keywords)
        .then((res) => res.json())
        .then((json) => console.log(json));
      if (
        response.results[idx].overview === '' ||
        response3.keywords.length === 0
      ) {
        continue;
      }
      // for (let i; duplicatedIdx.length; i++) {
      //   if (duplicatedIdx[i] === idx) {
      //     continue;
      //   }
      // }
      //duplicatedIdx.push(idx);
      setMovies(response.results[idx]);
      setKeyword(response3.keywords);
      setLoading(false);
      break;
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  // 카운트 다운 구현
  useEffect(() => {
    if (count > 0) {
      timeOutID = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [count]);

  const clickHandler = () => {
    clearTimeout(timeOutID); // 주석처리하면 동일한 이슈 발생
    setCount(0);
  };

  console.log('타이머 = ' + count);
  // console.log('props.gc = ' + props.gc);
  // console.log('게임 횟수 = ' + gameCount);
  return (
    <div>
      <movieContext.Provider
        value={{
          movies,
          keyword,
          posterImg,
          count,
          getMovie,
          gameCount,
          setGameCount,
          setCount,
          isTrue,
          setIsTrue,
          answer,
          setAnswer,
          timeOutID,
          clickHandler,
        }}
      >
        {loading ? (
          <div>로딩중입니다.</div>
        ) : (
          <div>
            <ResCompare />
            {gameCount === Number(props.gc) && answer ? (
              <div id='MovieResult'>
                <GameScore answer={answer} />
              </div>
            ) : (
              <div>
                <div>
                  {count === 0 ? (
                    <div id='MovieResult'>
                      <QuizResult answer={answer} title={movies.title} />
                    </div>
                  ) : (
                    <div>
                      {isTrue ? (
                        <div id='MovieResult'>
                          <QuizResult answer={answer} title={movies.title} />
                        </div>
                      ) : (
                        <div>
                          <div>남은 시간 : {count}초</div>
                          <Home />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </movieContext.Provider>
    </div>
  );
}
export default Movie;
