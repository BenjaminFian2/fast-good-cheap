import "./App.css";
import { useState } from "react";

function App() {
  const [checked1, setChecked1] = useState(false);
  const [bool1, setBool1] = useState(Math.random() >= 0.5);
  const [checked2, setChecked2] = useState(false);
  const [bool2, setBool2] = useState(Math.random() >= 0.5);
  const [checked3, setChecked3] = useState(false);
  const [bool3, setBool3] = useState(Math.random() >= 0.5);
  const handleClickBtn1 = () => {
    setChecked1(!checked1);
    if (checked2 && checked3) {
      if (bool1) {
        setChecked3(false);
      } else {
        setChecked2(false);
      }
      setBool1(!bool1);
    }
  };

  const handleClickBtn2 = () => {
    setChecked2(!checked2);
    if (checked1 && checked3) {
      if (bool2) {
        setChecked1(false);
      } else {
        setChecked3(false);
      }
      setBool2(!bool2);
    }
  };

  const handleClickBtn3 = () => {
    setChecked3(!checked3);
    if (checked1 && checked2) {
      if (bool3) {
        setChecked1(false);
      } else {
        setChecked2(false);
      }
      setBool3(!bool3);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleClickBtn1}
            checked={checked1}
          />
          <span className="sliderR round"></span>
          <p>FAST</p>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleClickBtn2}
            checked={checked2}
          />
          <span className="sliderG round"></span>
          <p>GOOD</p>
        </label>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleClickBtn3}
            checked={checked3}
          />
          <span className="sliderB round"></span>
          <p>CHEAP</p>
        </label>
      </div>
      <footer>
        <p>
          Made with <a href="https://fr.reactjs.org/">React</a> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> by{" "}
          <a href="https://github.com/BenjaminFian2">Benjamin</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
