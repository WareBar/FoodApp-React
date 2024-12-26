import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Search from './components/Search';
import FoodList from './components/FoodList'
import FoodDetails from './components/FoodDetails';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")

  return (
    <div className="App">
      <Navigation/>
      {/* <Search setFoodData={setFoodData}/> */}

      <Routes>
        <Route index element={
          <FoodList foodData={foodData} setFoodId={setFoodId} setFoodData={setFoodData} />}/>
        <Route path="/Recipe" element={<FoodDetails foodId={foodId}/>}/>
        <Route path="/Foods" element={
          <FoodList foodData={foodData} setFoodId={setFoodId} setFoodData={setFoodData} />}/>
      </Routes>

    </div>
  );
}

export default App;



