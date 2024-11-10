import styles from '../styles/FoodItem.module.css'

const FoodItem = ({food, setFoodId}) => {
    return (
        <div className={styles.Food}>
            <div className="banner">
                <img src={food.image} alt={food.title} />
            </div>
            <div className={styles.foodInfo}>
                <p className={styles.foodName}>{food.title}</p>

                <input className={styles.viewBtn} type="button" value="VIEW RECIPE"
                onClick={()=>setFoodId(food.id)}
                />
            </div>
        </div>
    )
}

export default FoodItem;