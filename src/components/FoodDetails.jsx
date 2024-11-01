import { useEffect } from "react";

const FoodDetails = ({foodId}) => {
    const apiURL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = '8724467ba94943a5b49ea9de72e8d1f3'

    useEffect(()=>{
        async function fetchFood(){
            // TODO: FIX THE URL API FOOD ID
            const res = await fetch(`https://api.spoonacular.com/recipes/655698/information?apiKey=${apiKey}`)
            const data = res.json()
            console.log(data)
        }
        fetchFood()

    }, [])


    return (
        <div className="FoodDetails">
            <p>{foodId}</p>
        </div>
    )
}

export default FoodDetails;