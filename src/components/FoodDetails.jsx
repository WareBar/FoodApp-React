import { useEffect, useState } from "react";
import styles from '../styles/FoodDetails.module.css'

const FoodDetails = ({foodId}) =>{
    const KEY = '1e51ee9ca5b54891821b46862ee2041f'
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
        <div>
            <h1>{food.title}</h1>

            <div className="info">
                <div className="right">
                    <div className="banner">
                        <img src={food.image} alt={food.title} />                    
                    </div>
                    <div className="meta-info">
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