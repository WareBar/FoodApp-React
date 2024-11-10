import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Search from './components/Search';


function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")

  return (
    <div className="App">
      <Navigation/>
      <Search setFoodData={setFoodData}/>

    </div>
  );
}

export default App;



