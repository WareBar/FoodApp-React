import { useEffect } from "react";

const FoodDetails = ({foodId}) => {
    const apiKey = '8724467ba94943a5b49ea9de72e8d1f3'

    useEffect(()=>{
        async function fetchFood(){
            // i used this format of string instead of literal string because im having problem in syntax
            const res = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+apiKey)
            const data = res.json()
            console.log(data)
        }
        fetchFood()

    }, [foodId])


    return (
        <div className="FoodDetails">
            <p>{foodId}</p>
        </div>
    )
}

export default FoodDetails;