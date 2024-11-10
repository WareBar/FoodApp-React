import FoodItem from './FoodItem'


const FoodList = ({foodData}) =>{
    return (
        <div>
            {foodData.map((food)=>(
                <FoodItem food={food} />
            ))}
        </div>
    )
}

export default FoodList;