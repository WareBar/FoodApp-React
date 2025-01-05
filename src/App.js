import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import FoodList from './components/FoodList'
import FoodDetails from './components/FoodDetails';
import { Routes, Route } from 'react-router-dom'
import FoodVideoList from './components/FoodVideoList';

function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")
  const [loading, isLoading] = useState(true)

  return (
    <div className="App">
      <Navigation/>

      {/* Router, it allows us to navigate from one component to another */}
      <Routes>
        <Route index element={
          <FoodList foodData={foodData} setFoodId={setFoodId} setFoodData={setFoodData} />}/>
        <Route path="/Recipe" element={<FoodDetails foodId={foodId}/>}/>
        <Route path="/Foods" element={
          <FoodList foodData={foodData} setFoodId={setFoodId} setFoodData={setFoodData} />}
        />
        <Route path="/Video/" element={
          <FoodVideoList loading={loading} isLoading={isLoading} />}
        />
      </Routes>

    </div>
  );
}

export default App;



