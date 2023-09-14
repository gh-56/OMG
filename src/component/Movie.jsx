import React from 'react';
import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import ResCompare from './ResCompare';

import { useState, useEffect } from 'react';
function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [posterImg, setPosterImg] = useState(null);
  const [count, setCount] = useState(0);
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
  useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);
  console.log(count);
  return (
    <div>
      {loading ? (
        <div>로딩중입니다.</div>
      ) : (
        <div>
          <ResCompare title={movies.title} />
          <Hint30
            key={movies.id}
            title={movies.title}
            overview={movies.overview}
          ></Hint30>
          <div>
            <h3>두 번째 힌트</h3>
            {keyword.map((keywords) => (
              <Hint15
                key={keywords.id}
                count={count}
                name={keywords.name}
              ></Hint15>
            ))}
          </div>
          <Hint3
            count={count}
            img={posterImg.base_url}
            img_size={posterImg.poster_sizes[2]}
            poster_path={movies.poster_path}
          ></Hint3>
        </div>
      )}
    </div>
  );
}
export default Movie;
