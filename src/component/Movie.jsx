import React from 'react';
import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import { useState, useEffect } from 'react';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [img, setImg] = useState(null);

  const getMovie = async () => {
    setLoading(true);
    const queryString =
      '&page=1&include_adult=false&include_video=false&language=ko-KR&sort_by=popularity.desc';
    const api = 'api_key=f5217a0db9120b09b842b37fe18c9685';
    const url = `https://api.themoviedb.org/3/discover/movie?${api}${queryString}`;
    const url2 = `https://api.themoviedb.org/3/configuration?${api}`;

    const response = await (await fetch(url)).json();
    const response2 = await (await fetch(url2)).json();
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    // fetch(url2)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    const idx = 7;
    setMovies(response.results[idx]);
    setImg(response2.images);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    setImg();
  }, []);
  // console.log(movies);
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
          <Hint15 />
          <Hint3
            poster_path={movies.poster_path}
            img={img.base_url}
            img_size={img.poster_sizes[2]}
          ></Hint3>
        </div>
      )}
    </div>
  );
}

export default Movie;
