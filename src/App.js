import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Navigation from './components/Navigation';

function App() {

  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Navigation/>
      <Search setFoodData={setFoodData}/>
      <FoodList foodData={foodData}/>
    </div>
  );
}

export default App;
