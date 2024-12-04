import { useEffect, useState } from "react";

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
            <p>THIS IS FOOD RECIPE COMPONENT</p>
            <h1>{food.title}</h1>
        </div>
    )
}

export default FoodDetails;