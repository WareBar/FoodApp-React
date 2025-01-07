import styles from '../styles/FoodItem.module.css'
import { Link } from 'react-router-dom'

const FoodItem = ({food, setFoodId}) => {
    return (
        <div className={styles.Food}>
            <div className="banner">
                <img src={food.image} alt={food.title} />
            </div>
            <div className={styles.foodInfo}>
                <p className={styles.foodName}>{food.title}</p>

                {/* Navigate towards the /Recipe endpoint */}
                <button className={styles.viewBtn} onClick={()=>setFoodId(food.id)}>
                    <Link className={styles.link} to="/Recipe">VIEW RECIPE</Link>
                </button>
            </div>
        </div>
    )
}

export default FoodItem;