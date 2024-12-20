import { useEffect, useState } from "react";
import styles from '../styles/FoodDetails.module.css'

const FoodDetails = ({foodId}) =>{
    const KEY = 'f4e67dfa4a0f4afcaae7497c1dd1ff73'
    const [food, setFood] = useState({})

    useEffect(()=>{
        async function fetchFood(){
            const result = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+KEY)
            const data = await result.json()
            console.log(data)
            setFood(data)
        }

        fetchFood()

    },[])

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
                            <span>PREP TIME: {food.readyInMinutes}</span>
                            <span>SERVING: {food.servings}</span>
                            <span>TYPE: {food.cuisines}</span>
                            <span>PRICE PER SERVING: {food.pricePerServing}</span>
                        </p>
                    </div>
                </div>

                <hr />

                <div className="left"></div>
            </div>
        </div>
    )
}

export default FoodDetails;