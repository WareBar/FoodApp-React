import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Navigation from './components/Navigation';
import FoodDetails from './components/FoodDetails';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

function App() {

  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")

  return (
    <div className="App">
      <Navigation/>
      <Search setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
        
      </Container>   



    </div>
  );
}

export default App;



