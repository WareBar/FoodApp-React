import FoodItem from './FoodItem'
import styles from '../styles/FoodList.module.css'
import Search from './Search'


const FoodList = ({foodData, setFoodId, setFoodData}) =>{
    return (
        <div>
            <Search setFoodData={setFoodData}/>
            <div className={styles.FoodList}>
                {foodData.map((food)=>(
                    <FoodItem key={food.title} food={food} setFoodId={setFoodId} />
                ))}
            </div>
        </div>
    )
}

export default FoodList;