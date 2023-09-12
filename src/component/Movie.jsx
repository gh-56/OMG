import React from 'react';
import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import { useState, useEffect } from 'react';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  const getMovie = async () => {
    setLoading(true);
    const queryString =
      '&page=1&include_adult=false&include_video=false&language=ko-KR&sort_by=popularity.desc';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=f5217a0db9120b09b842b37fe18c9685${queryString}`;

    const response = await (await fetch(url)).json();
    fetch(url)
      .then((res) => res.json())
      .then((json) => console.log(json));
    const idx = 10;
    setMovies(response.results[idx]);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <div>로딩중입니다.</div>
      ) : (
        <div>
          <Hint30
            key={movies.id}
            title={movies.title}
            overview={movies.overview}
          ></Hint30>
        </div>
      )}
      <Hint15 />
      <Hint3 />
    </div>
  );
}

export default Movie;
