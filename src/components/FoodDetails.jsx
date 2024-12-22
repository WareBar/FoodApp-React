import { useEffect, useState } from "react";
import styles from '../styles/FoodDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = ({foodId}) =>{
    const KEY = '8f01c50cdb9f46b6bdb00a2bdf5d65a5'
    const [food, setFood] = useState({})
    const [loading, isLoading] =useState(true);

    useEffect(()=>{
        async function fetchFood(){
            const result = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+KEY)
            const data = await result.json()
            console.log(data)
            setFood(data)
            // data.extendedIngredients.map((item)=>(console.log(item.name)))
            isLoading(false)
        }

        fetchFood()

    },[foodId])

    return (
        <div className={styles.Details}>
            <h1>{food.title}</h1>

            <div className={styles.info}>
                <div className={styles.right}>
                    <div className={styles.banner}>
                        <img src={food.image} alt={food.title} />                    
                    </div>
                    <div className={styles.meta_info}>
                        <p>
                        
                            <span><FontAwesomeIcon className="fontIcon" icon={faClock}/>: {food.readyInMinutes}</span>
                            <span><FontAwesomeIcon className="fonticon" icon={faUtensils}/>: {food.servings}</span>
                            <span><FontAwesomeIcon className="fonticon" icon={faAppleAlt}/>: {food.vegetarian? 'Vegetarian':'Non-Vegetarian'}</span>
                            {/* <span>{food.vegetarian? 'VEGE':'NOT VEGE'}</span> */}
                            <span>${food.pricePerServing} per serving</span>
                        </p>
                    </div>
                </div>

                <hr />

                <div className="left">
                    <h2>Recipe Ingredients</h2>
                    <div className={styles.Ingredients}>
                        {loading? <p>Loading...</p>:
                        
                        food.extendedIngredients.map((item)=>(
                            <div className={styles.IngredientsItem}>
                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} />
                                <p className={styles.IngredientsName}>
                                    {item.name}
                                    <span>{item.original}</span>
                                </p>
                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDetails;