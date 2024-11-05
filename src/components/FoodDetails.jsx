import styles from '../components_styles/fooddetails.module.css'
import ItemList from './itemList';
import { useEffect, useState } from "react";

const FoodDetails = ({foodId}) => {
    const apiKey = '05940b3f618749bcae5d955b0311f74a'
    const [food, setFood] = useState({})
    // state used to determine if the data from API is fetch
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        async function fetchFood(){
            // i used this format of string instead of literal string because im having problem in syntax
            const res = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+apiKey)
            const data = await res.json()
            console.log(data)
            setFood(data)
            console.log('food data state items:::')
            console.log(food)

            // set the isLoading state to false to indicate the completion of data fetching of API
            setIsLoading(false)

        }
        fetchFood()

    }, [foodId])

    return (
        <div className={styles.FoodDetails}>
            <div>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt={food.title} />
                <div className={styles.recipeDetails}>
                    <span><strong>🕐 {food.readyInMinutes} Minutes</strong></span>
                    <span>{food.vegetarian? '🍎 Vegetarian':'🍖 Non-Vegetarian'}</span>
                    <span><strong>Serves: {food.servings} 👳</strong></span><span>{food.vegan? "🐮Vegan":""}</span>
                </div>

                <div>
                    $<span>{food.pricePerServing/100} Per Serving</span>
                </div>


                <h2>Recipe Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {/* displays "Loading..." text if the data is still not available and otherwise if available */}
                        {isLoading? 'Loading...':food.analyzedInstructions[0].steps.map((foodStep)=>(
                            <li key={foodStep.number}>{foodStep.step}</li>
                        ))}
                    </ol>
                </div>

                <h3>Recipe Ingredients</h3>
                <div className={styles.recipeIngredients}>
                    {/* PUT THE ITELIST COMPONENTS HERE */}
                    <ItemList food={food} isLoading={isLoading}/>
                </div>
            </div>

            <a href={food.sourceUrl}>Read More</a>

        </div>


    )
}

export default FoodDetails;
