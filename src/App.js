import React, { useState } from 'react';
import './App.css'

function App() {
  const [result, setResult] = useState('')

  const clear = () => {
    setResult('')
  }
  // const backspace = () => {
  //   setResult(result.slice(0,-1))
  // }
  
  const sign = () => {
    setResult((result * (-1)))
  }

  const percentage = () => {
    setResult(result/100+'*')
  }

  const handleClick = (e) => {
    setResult(result +(e.target.name));
  } 

  const calculate = () => {
    try {
      setResult(eval(result));
    }catch (err){
      setResult('Error')
    }
  }

  return (
    <>
      <div className= "container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={clear} className="gray" id="clear">AC</button>
          <button onClick={sign} className="gray" id="backspace">±</button>
          <button name="%" onClick={percentage} className="gray">%</button>
          <button name="/" onClick={handleClick} className="yellow">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="yellow">x</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="yellow">-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="yellow">+</button>
          <button name="0" onClick={handleClick} id="zero">0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} className="yellow">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
