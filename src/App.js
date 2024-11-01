import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {

  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Search setFoodData={setFoodData}/>
      <FoodList foodData={foodData}/>
    </div>
  );
}

export default App;
