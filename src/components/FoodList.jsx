import FoodItem from "./FoodItem.jsx";

const FoodList = ({foodData}) => {
    return (
        <div className="FoodList">
                {foodData.map((food)=>(
                    
                    <FoodItem foodItem={food}/>
                
                ))}
            
        </div>
    )
};



export default FoodList;