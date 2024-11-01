import FoodItem from "./FoodItem.jsx";
import styles from '../components_styles/foodList.module.css'

const FoodList = ({foodData}) => {
    return (
        <div className={styles.FoodList}>
                {foodData.map((food)=>(
                    <FoodItem foodItem={food}/>
                ))}
            
        </div>
    )
};



export default FoodList;