import FoodItem from './FoodItem'
import styles from '../styles/FoodList.module.css'

const FoodList = ({foodData, setFoodId}) =>{
    return (
        <div className={styles.FoodList}>
            {foodData.map((food)=>(
                <FoodItem food={food} setFoodId={setFoodId} />
            ))}
        </div>
    )
}

export default FoodList;