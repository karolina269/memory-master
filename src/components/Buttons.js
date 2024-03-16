import './Buttons.css';

const Buttons = (props) => {
  const categories = ["Człowiek", "Dom", "Życie rodzinne i towarzyskie", "Dom", "Szkoła", "Praca", "Żywienie", "Zakupy i usługi", 
  "Podróżowanie i turystyka", "Kultura", "Sport", "Zdrowie", "Nauka i technika", "Świat przyrody", "Społeczeństwo"];
  const buttonHandler = (category) => {
    props.setCurrentCategory(category);
  };

    return (
      <div className="buttons">
        {categories.map((category, index) => {
          return <button key={index} onClick={() => buttonHandler(category)}>
          {category}
        </button>;
        })}
      </div>
    );
  };
  
  export default Buttons;