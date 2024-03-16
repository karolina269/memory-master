import './List.css'
import czlowiek from "../vocabulary/czlowiek.json"; 
import dom from "../vocabulary/dom.json";
import kultura from "../vocabulary/kultura.json"; 
import naukaITechnika from "../vocabulary/nauka-i-technika.json";
import podrozowanieITurystyka from "../vocabulary/podrozowanie-i-turystyka.json"; 
import praca from "../vocabulary/praca.json";
import spoleczenstwo from "../vocabulary/spoleczenstwo.json"; 
import sport from "../vocabulary/sport.json";
import swiatPrzyrody from "../vocabulary/swiat-przyrody.json"; 
import szkola from "../vocabulary/szkola.json";
import zakupyIUslugi from "../vocabulary/zakupy-i-uslugi.json"; 
import zdrowie from "../vocabulary/zdrowie.json";
import zycieRodzinneITowarzyskie from "../vocabulary/zycie-rodzinne-i-towarzyskie.json"; 
import zywienie from "../vocabulary/zywienie.json";
import Word from './Word';
import { useEffect, useState } from 'react';

const List = (props) => {
  const [words, setWords] = useState([]);
    
  useEffect(() => {
      switch(props.currentCategory) {
        case 'Człowiek':
          setWords(czlowiek);
          break;
        case 'Dom':
            setWords(dom);
            break;
        case 'Kultura':
            setWords(kultura);
            break;
        case 'Nauka i technika':
            setWords(naukaITechnika);
            break;
        case 'Podróżowanie i turystyka':
                  setWords(podrozowanieITurystyka);
                  break;
        case 'Praca':
                    setWords(praca);
                    break;
        case 'Społeczeństwo':
                      setWords(spoleczenstwo);
                      break;
        case 'Sport':
                        setWords(sport);
                        break;
        case 'Świat przyrody':
                          setWords(swiatPrzyrody);
                          break;
                        case 'Szkoła':
                            setWords(szkola);
                            break;
                            case 'Zakupy i usługi':
                              setWords(zakupyIUslugi);
                              break;
                            case 'Zdrowie':
                                setWords(zdrowie);
                                break;
                                case 'Życie rodzinne i towarzyskie':
                                  setWords(zycieRodzinneITowarzyskie);
                                  break;
                                case 'Żywienie':
                                    setWords(zywienie);
                                    break;
                                                                     
        default:
          break;
      }
  
  }, [props.currentCategory]);

    return (
      <div className="list">
        {words.map((word, index) => {
            return <Word word={word} key={index} currentCategory={props.currentCategory}/>
 } )}
    

      </div>
    );
  };
  
  export default List;