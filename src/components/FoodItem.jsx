import styles from '../components_styles/foodItem.module.css'
const FoodItem = ({foodItem, setFoodId}) => {
    return (
        <div className={styles.FoodItem}>

            <img src={foodItem.image} alt={foodItem.title} />
            <div className={styles.foodContent}>
                <p className={styles.foodName}>{foodItem.title}</p>
            </div>
            <button className={styles.foodButton}
            onClick={()=>{
                console.log(foodItem.id)
                setFoodId(foodItem.id);
            }}
            >View Recipe</button>
        </div>
    )
}


export default FoodItem;