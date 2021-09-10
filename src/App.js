import { useState, useEffect, useRef } from "react";
import CustomInput from "./CustomInput";
function App() {
  const [input, setInput] = useState("");
  const count = useRef(1);
  const inputRef = useRef();
  useEffect(() => {
    //setCount((prevState) => prevState + 1);
    count.current += 1;
  });

  const clickHandler = () => {
    console.log(inputRef.current);
    const value = inputRef.current.value;
    if (!value) inputRef.current.focus();
    else alert(value);
  };
  return (
    <div>
      <CustomInput
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Submit </button>

      <hr />
      <div>You have entered "{input}"</div>
      <div>Rerendered {count.current}</div>
    </div>
  );
}

export default App;
