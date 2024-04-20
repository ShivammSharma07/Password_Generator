import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const passWordRef = useRef(null);

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAll] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [bgColor, setBgColor] = useState(null);

  const passCopy = useCallback(() => {
    passWordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    setBgColor("blue");
  }, [bgColor, Password]);

  // when the length change it rerender the function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * str.length + 1);
      // console.log(rand);
      let StrChar = str.charAt(rand);
      pass = pass.concat(StrChar);
    }
    setPassword(pass);
    setBgColor("rgb(249 115 22");
  }, [length, numberAllowed, charAllowed, setPassword]);

  // when length change it call the function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-2xl pb-5">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex items-center shadow rounded-lg overflow-hidden pb-4 gap-1">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 rounded-3xl"
            placeholder="password"
            ref={passWordRef}
            readOnly
          />
          <button
            className="text-white bg-orange-500 px-4 pb-1 rounded-md text-center"
            onClick={passCopy}
            style={{ backgroundColor: bgColor }}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAll((prev) => !prev)}
            />
            <label htmlFor="">Number Allowed</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="">Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
