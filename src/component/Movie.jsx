import React from 'react';
import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import ResCompare from './ResCompare';

import { useState, useEffect, createContext } from 'react';
export const movieContext = createContext();
function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [posterImg, setPosterImg] = useState(null);
  const [count, setCount] = useState(10);
  const [keyword, setKeyword] = useState(0);
  const getMovie = async () => {
    setLoading(true);
    const queryString =
      '&page=1&include_adult=false&include_video=false&language=ko-KR&sort_by=popularity.desc';
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
      } else {
        setMovies(response.results[idx]);
        setKeyword(response3.keywords);
        setLoading(false);
        break;
      }
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  // 카운트 다운 구현
  useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);
  console.log(count);
  return (
    <div>
      <movieContext.Provider value={{ movies, keyword, posterImg, count }}>
        {loading ? (
          <div>로딩중입니다.</div>
        ) : (
          <div>
            <ResCompare />
            <Hint30 />
            <Hint15 />
            <Hint3 />
          </div>
        )}
      </movieContext.Provider>
    </div>
  );
}
export default Movie;
