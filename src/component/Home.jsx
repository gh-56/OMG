import Hint30 from './Hint30';
import Hint15 from './Hint15';
import Hint3 from './Hint3';
import './Home.css';
function Home() {
  return (
    <div className='divHome'>
      <div>
        <Hint3 />
      </div>
      <div className='divHome'>
        <Hint15 />
      </div>
      <div className='divHome'>
        <Hint30 />
      </div>
      {/* <QuizResult /> */}
    </div>
  );
}

export default Home;
