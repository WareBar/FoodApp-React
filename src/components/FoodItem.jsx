import styles from '../components_styles/foodItem.module.css'
const FoodItem = ({foodItem}) => {
    return (
        <div className={styles.FoodItem} key={foodItem.id}>

            <img src={foodItem.image} alt={foodItem.title} />
            <div className={styles.foodContent}>
                <p className={styles.foodName}>{foodItem.title}</p>
            </div>
            {/* <h1>{foodItem.title}</h1> */}
            <button className={styles.foodButton}>View Recipe</button>
        
        
        </div>
    )
}


export default FoodItem;