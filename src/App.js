import { useState } from 'react';
import './App.css';
import Search from './components/Search';


function App() {

  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Search setFoodData={setFoodData}/>
      {foodData.map((food)=>(
        <p>{food.title}</p>
      ))}
    </div>
  );
}

export default App;
