import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import './Home.css';
function Home() {
  return (
    <div className='div'>
      <div>
        <Hint30 />
      </div>
      <div>
        <Hint15 />
      </div>
      <div>
        <Hint3 />
      </div>
      {/* <QuizResult /> */}
    </div>
  );
}

export default Home;
