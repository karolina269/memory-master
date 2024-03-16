import "./Buttons.css";

const Buttons = (props) => {
  const categories = [
    "Człowiek",
    "Dom",
    "Życie rodzinne i towarzyskie",
    "Szkoła",
    "Praca",
    "Żywienie",
    "Zakupy i usługi",
    "Podróżowanie i turystyka",
    "Kultura",
    "Sport",
    "Zdrowie",
    "Nauka i technika",
    "Świat przyrody",
    "Społeczeństwo",
  ];
  const buttonHandler = (category) => {
    props.setCurrentCategory(category);
  };

  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => buttonHandler(category)}
            disabled={props.currentCategory === category ? true : false}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
