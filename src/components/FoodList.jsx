import FoodItem from "./FoodItem.jsx";
import styles from '../components_styles/foodList.module.css'

const FoodList = ({foodData}) => {
    return (
        <div className={styles.FoodList}>
                {foodData.map((food)=>(
                    <FoodItem foodItem={food} key={food.id}/>
                ))}
            
        </div>
    )
};



export default FoodList;