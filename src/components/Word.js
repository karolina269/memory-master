import { useState, useEffect } from "react";

const Word = (props) => {
    const [currentInput, setCurrentInput] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (currentInput === props.word.en) {
            setMessage("+1")
        } else {
            setMessage("")
        }
      }, [currentInput]);

    return (
        <form key={props.index}>
             <label htmlFor={props.word.pl}>{props.word.pl}</label>
             <input id={props.word.pl} type="text" onChange={(e) => setCurrentInput(e.target.value)} />
             <span>{message}</span>
        </form>
    );
  };
  
  export default Word;

