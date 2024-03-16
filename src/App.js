
import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import List from './components/List';

function App() {
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div className="App">
      <header className="App-header">
<h1>Memory Master 2024</h1>
<p>8th grade</p>
      </header>
      <Buttons setCurrentCategory={setCurrentCategory}/>
      <List currentCategory={currentCategory} />
    </div>
  );
}

export default App;
