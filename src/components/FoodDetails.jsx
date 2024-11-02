import { useEffect, useState } from "react";

const FoodDetails = ({foodId}) => {
    const apiKey = 'ca08c680f7f34b32ab85b29476761c83'
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
        <div className="FoodDetails">
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt={food.title} />
                <div>
                    <span>
                        <strong>🕐{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        {food.vegetarian? '🍖Vegetarian':'🍖Non-Vegetarian'}
                    </span>
                    <span>
                        <strong>Serves: {food.servings}</strong>
                    </span>
                    <span>{food.vegan? "🐮Vegan":""}</span>
                </div>
                <div>
                    $<span>{food.pricePerServing/100} Per Serving</span>
                </div>
            </div>

            <div>

                <h2>Recipe Instructions</h2>
                {/* displays "Loading..." text if the data is still not available and otherwise if available */}
                {isLoading? 'Loading...':food.analyzedInstructions[0].steps.map((foodStep)=>(
                    <li key={foodStep.number}>{foodStep.step}</li>
                ))}

            </div>

        </div>
    )
}

export default FoodDetails;