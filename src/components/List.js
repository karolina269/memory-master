import './List.css'
import czlowiek from "../vocabulary/czlowiek.json"; 
import Word from './Word';

const words = czlowiek;

const List = (props) => {

    return (
      <div className="list">
        {words.map((word, index) => {
            return <Word word={word} key={index}/>
 } )}
    

      </div>
    );
  };
  
  export default List;