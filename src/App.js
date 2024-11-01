import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Navigation from './components/Navigation';
import Container from './components/Container';
import InnerContainer from './components/innerContainer';

function App() {

  const [foodData, setFoodData] = useState([])

  return (
    <div className="App">
      <Navigation/>
      <Search setFoodData={setFoodData}/>


      <Container>
        <InnerContainer>
          <FoodList foodData={foodData}/>          
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
