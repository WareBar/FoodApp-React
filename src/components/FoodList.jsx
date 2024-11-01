import FoodItem from "./FoodItem.jsx";

const FoodList = ({foodData}) => {
    return (
        <div className="FoodList">
                {foodData.map((food)=>(
                    <div className="Food" style={{margin:'20px',border:'1px solid black'}}>
                        <FoodItem foodItem={food}/>
                    </div>
                ))}
            
        </div>
    )
};


export default FoodList;