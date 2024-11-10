import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';


function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")

  return (
    <div className="App">
      <Navigation/>

    </div>
  );
}

export default App;



