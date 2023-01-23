import React , { useState , useEffect } from 'react' ;
import './App.css' ;
import on_logo from './logos/on_logo.svg' ; 
import off_logo from './logos/off_logo.svg' ; 
import back_btn from './logos/back_btn.svg' ;
import next_btn from './logos/next_btn.svg' ; 

function App() {

  let [current,setCurrent] = useState(0) ; 

  let [logos,setLogos] = useState([on_logo,off_logo,off_logo,off_logo]) ; 

  const checkCurrent = (index) => current === index ? on_logo : off_logo

  const changeLogos = () => {
    setLogos( prev => {
      logos = [] ;
      for(let i=0 ; i<4 ; i++){
        logos.push(checkCurrent(i))
      }
      return logos
    })
  }
  
  const changeHandler = (direction) => {
    if(direction === 'back'){
      setCurrent(current === 0 ? 3 : current-1)
    } else {
      setCurrent(current === 3 ? 0 : current+1)
    } 
  }

  useEffect(() => {
    changeLogos()
  }, [logos])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         ProFlight React Challenge
        </h1>
      </header>
      <div className="logos">
      <button onClick={()=>changeHandler('back')}>
      <img src={back_btn} alt='back_btn' />
      </button>
        {logos.map( logo => <img className='logo' src={logo} alt="logo" />)}
      <button onClick={()=>changeHandler('fwd')}>
      <img src={next_btn} alt='next_btn' />
      </button>
      </div>
    </div>
  );
}

export default App;
