import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnsweer] = useState(0);



  const submit = (e) => {
    e.preventDefault();
    const formValid = +answer >= 0;
    if (!formValid) {
      return;
    }
    if (+answer === +rightAnswer) {
      setStatus("you got it... Play again");
      setStarted(false);
    } else if (+answer < +rightAnswer) {
      setStatus("too low");
    } else {
      setStatus("too high");
    }
  };

  const start = () => {
    setRightAnsweer(Math.ceil(Math.random() * 10));
    setStarted(true);
  };
  if (started) {
    return (
      <div className='gameStart'>
        <form onSubmit={submit}>
          <div>
            <h1 className='fs-2'>Insert Your Number Within 1 To 9</h1>
            <input className='inputNumber' value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
          <button type="submit" className='mt-4 px-4 pb-2 fs-3 border-0 bg-info '>check</button>
        </form>
        <p className='fs-3 text-warning text-uppercase '>{status}</p>
      </div>
    );
  } else {
    return (
      <div className='startBtn d-flex align-items-center justify-content-center flex-column'>
        <button type="button" onClick={start} className="px-4 pb-2 fs-2 border-0 bg-warning  text-white">
          start
        </button>
        <p className='fs-3'>{status}</p>
      </div>
    );
  }


  }
export default App;
