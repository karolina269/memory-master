import { useState, useEffect, useRef } from "react";
import './Word.css';

const Word = (props) => {
    const [currentInput, setCurrentInput] = useState("");
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        if (currentInput === props.word.en) {
            setMessage("+1")
        } else {
            setMessage("")
        }
      }, [currentInput, props.word.en]);

      useEffect(() => {
        ref.current.value = "";
        setMessage("");
        setAnswer("");
      }, [props.currentCategory]);

    const handleShowButton = () => {
        answer ? setAnswer("") : setAnswer(props.word.en);
    }

    return (
        <form key={props.index} autoComplete="new-password">
             <label htmlFor={props.word.pl}>{props.word.pl}</label>
             <input ref={ref} id={props.word.pl} type="text" onChange={(e) => setCurrentInput(e.target.value)} autoComplete="off" />
             <span className="message">{message}</span>
             <button type="button" className="show" onClick={() => handleShowButton()}>pokaż odpowiedź</button>
             <span>{answer}</span>
        </form>
    );
  };
  
  export default Word;

